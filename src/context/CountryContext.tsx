import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export type CountryCode = 'US' | 'IN';
export type Locale = 'en-us' | 'en-in';

export type CountryConfig = {
  code: CountryCode;
  locale: Locale;
  label: string;
  flag: string;
  /** Product noun used across the site: "EHR" in the US, "HIMS" in India. */
  product: string;
  /** Full product title shown in the navbar. */
  title: string;
  /** Legal entity operating in this market. */
  entity: string;
};

export const COUNTRIES: Record<CountryCode, CountryConfig> = {
  US: {
    code: 'US',
    locale: 'en-us',
    label: 'United States',
    flag: '🇺🇸',
    product: 'EHR',
    title: 'Ciyex EHR',
    entity: 'Qiaben LLC',
  },
  IN: {
    code: 'IN',
    locale: 'en-in',
    label: 'India',
    flag: '🇮🇳',
    product: 'HIMS',
    title: 'Ciyex HIMS',
    entity: 'Qiaben Healthcare Solutions Pvt Ltd',
  },
};

const BY_LOCALE: Record<string, CountryConfig> = {
  'en-us': COUNTRIES.US,
  'en-in': COUNTRIES.IN,
};

/** Remembers that the visitor declined the switch, so we ask only once. */
const DISMISS_KEY = 'ciyex-region-prompt-dismissed';

function isCountryCode(value: unknown): value is CountryCode {
  return value === 'US' || value === 'IN';
}

type CountryContextValue = {
  /** Country of the locale currently being viewed. */
  current: CountryConfig;
  /** Country inferred from the visitor's IP, once resolved. */
  detected: CountryConfig | null;
  promptDismissed: boolean;
  dismissPrompt: () => void;
  /** Path to the same page in the other locale. */
  urlForCountry: (country: CountryConfig) => string;
};

const CountryContext = createContext<CountryContextValue | undefined>(undefined);

/**
 * Resolves the visitor's country from their IP.
 *
 * ipwho.is first — ipapi.co's free tier rate-limits aggressively and often
 * returns an error body instead of a country. Any failure resolves to null so
 * the visitor is simply left on the locale they asked for.
 */
async function detectCountry(signal: AbortSignal): Promise<CountryCode | null> {
  const endpoints = ['https://ipwho.is/', 'https://ipapi.co/json/'];

  for (const url of endpoints) {
    try {
      const res = await fetch(url, { signal });
      if (!res.ok) continue;
      const data = await res.json();
      const code = data?.country_code;
      if (isCountryCode(code)) return code;
      // A real country we don't run a dedicated site for — leave them be.
      if (typeof code === 'string' && code.length === 2) return null;
    } catch {
      if (signal.aborted) return null;
      // Try the next endpoint.
    }
  }
  return null;
}

export function CountryProvider({ children }: { children: ReactNode }) {
  const {
    i18n: { currentLocale, defaultLocale },
    siteConfig: { baseUrl },
  } = useDocusaurusContext();

  const current = BY_LOCALE[currentLocale] ?? COUNTRIES.US;

  const [detected, setDetected] = useState<CountryConfig | null>(null);
  const [promptDismissed, setPromptDismissed] = useState(true);

  // Read the dismissal flag on the client before considering the prompt.
  useEffect(() => {
    try {
      setPromptDismissed(window.localStorage.getItem(DISMISS_KEY) === '1');
    } catch {
      setPromptDismissed(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    detectCountry(controller.signal).then((code) => {
      if (!controller.signal.aborted && code) {
        setDetected(COUNTRIES[code]);
      }
    });
    return () => controller.abort();
  }, []);

  const dismissPrompt = useCallback(() => {
    setPromptDismissed(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // Flag simply won't persist.
    }
  }, []);

  /**
   * Maps the current path onto the other locale. The default locale is served
   * unprefixed, so this adds or strips the locale segment as needed.
   */
  const urlForCountry = useCallback(
    (country: CountryConfig) => {
      if (typeof window === 'undefined') return baseUrl;

      const prefix = currentLocale === defaultLocale ? '' : `${currentLocale}/`;
      const stripped = window.location.pathname.slice(baseUrl.length);
      const rest = prefix && stripped.startsWith(prefix)
        ? stripped.slice(prefix.length)
        : stripped;

      const nextPrefix = country.locale === defaultLocale ? '' : `${country.locale}/`;
      return `${baseUrl}${nextPrefix}${rest}`;
    },
    [baseUrl, currentLocale, defaultLocale],
  );

  const value = useMemo<CountryContextValue>(
    () => ({ current, detected, promptDismissed, dismissPrompt, urlForCountry }),
    [current, detected, promptDismissed, dismissPrompt, urlForCountry],
  );

  return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>;
}

export function useCountry(): CountryContextValue {
  const ctx = useContext(CountryContext);
  if (!ctx) {
    throw new Error('useCountry must be used inside a CountryProvider');
  }
  return ctx;
}
