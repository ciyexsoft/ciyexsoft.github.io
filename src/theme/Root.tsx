import React, { type ReactNode } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { CountryProvider } from '@site/src/context/CountryContext';
import CountryTerms from '@site/src/components/CountryTerms';
import CountryPrompt from '@site/src/components/CountryPrompt';

/**
 * Wraps the whole app so the selected country is available everywhere.
 *
 * The term swap and the region prompt are browser-only: both read the stored
 * preference and the visitor's IP, neither of which exists during the static
 * build.
 */
export default function Root({ children }: { children: ReactNode }) {
  return (
    <CountryProvider>
      {children}
      <BrowserOnly>
        {() => (
          <>
            <CountryTerms />
            <CountryPrompt />
          </>
        )}
      </BrowserOnly>
    </CountryProvider>
  );
}
