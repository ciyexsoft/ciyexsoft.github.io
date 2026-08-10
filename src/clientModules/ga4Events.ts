/**
 * GA4 custom event tracking for Google Ads Grant compliance.
 * Tracks meaningful user actions: signup clicks, GitHub engagement,
 * donate clicks, and outbound link clicks.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

function setupTracking() {
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;

    const href = target.getAttribute('href') || target.getAttribute('to') || '';

    // Signup clicks
    if (href.includes('/signup') || target.classList.contains('navbar-signup-btn')) {
      trackEvent('signup_click', { link_url: href });
    }

    // Provider/Patient sign-in clicks
    if (href.includes('app-dev.qiaben.com') || href.includes('portal-dev.qiaben.com')) {
      trackEvent('signin_click', { link_url: href, link_text: target.textContent?.trim() || '' });
    }
  });
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTracking);
  } else {
    setupTracking();
  }
}

export {};
