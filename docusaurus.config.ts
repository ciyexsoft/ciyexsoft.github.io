import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Docusaurus builds each locale in its own pass and exposes which one is being
// built. Anything defined in this file (structured data, tagline, copyright) is
// otherwise identical across locales, so derive the market-specific values here.
const LOCALE = process.env.DOCUSAURUS_CURRENT_LOCALE ?? 'en-us';
const IS_INDIA = LOCALE === 'en-in';

const PRODUCT = IS_INDIA ? 'HIMS' : 'EHR';
const ENTITY = IS_INDIA ? 'Qiaben Healthcare Solutions Pvt Ltd' : 'Qiaben LLC';
const ADDRESS = IS_INDIA
  ? {
      '@type': 'PostalAddress',
      streetAddress: '1/39, Veerappanur',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      postalCode: '641105',
      addressCountry: 'IN',
    }
  : {
      '@type': 'PostalAddress',
      streetAddress: '1309 Coffeen Avenue, STE 1200',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'US',
    };

const config: Config = {
  title: 'Ciyex',
  tagline: `Ciyex Workspace and the Ciyex ${PRODUCT} — one commercial platform for your whole clinic.`,
  favicon: 'img/Ciyex-favicon-new.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ciyex.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ciyexsoft', // Usually your GitHub org/user name.
  projectName: 'ciyexsoft.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',

  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: ENTITY,
        alternateName: 'Ciyex',
        url: 'https://ciyex.com',
        logo: 'https://ciyex.com/img/Ciyex-logo-no-text.png',
        description: 'Commercial electronic health records and hospital information management software. Modern, secure, FHIR-compliant, and built for healthcare interoperability.',
        foundingDate: '2025',
        address: ADDRESS,
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'info@qiaben.com',
          contactType: 'customer support',
        },
        sameAs: [
          'https://twitter.com/ciyexehr',
        ],
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Ciyex',
        url: 'https://ciyex.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://ciyex.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: `Ciyex ${PRODUCT}`,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web, Docker, Kubernetes',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Ciyex Workspace',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Windows, macOS, Linux',
        description: `Ciyex Workspace is the desktop client for the Ciyex ${PRODUCT}, built on a VS Code foundation tuned for healthcare.`,
      }),
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // Each country is a locale with its own URL space and its own pages, so
  // features and pricing can differ per market. The default locale (en-us) is
  // served unprefixed at /, India at /en-in/.
  i18n: {
    defaultLocale: 'en-us',
    locales: ['en-us', 'en-in'],
    localeConfigs: {
      'en-us': {
        label: 'United States',
        htmlLang: 'en-US',
      },
      'en-in': {
        label: 'India',
        htmlLang: 'en-IN',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          sortPosts: 'descending',
          postsPerPage: 9,
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-26FYS5F4Y7',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // India-only pages.
    //
    // The pages plugin globs its file list from `path` alone and only consults
    // the i18n folder to *override* a file that already exists there, so a page
    // that exists solely for one market cannot live in i18n/. It gets its own
    // plugin instance instead, registered only on the India build, which keeps
    // /modules off the US site entirely rather than merely unlinked.
    ...(IS_INDIA
      ? [
          [
            '@docusaurus/plugin-content-pages',
            { id: 'india', path: 'src/pages-in' },
          ] as [string, Record<string, unknown>],
        ]
      : []),
  ],

  clientModules: [
    './src/clientModules/ga4Events.ts',
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ciyex-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'commercial_announcement',
      content: 'Ciyex is now available for clinics and hospitals worldwide. <a href="/signup">Talk to our team</a>',
      backgroundColor: '#6b5ce7',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'Ciyex EHR',
      logo: {
        alt: 'Ciyex Logo',
        src: 'img/Ciyex-logo-no-text.png',
        srcDark: 'img/Ciyex-logo-no-text.png',
      },
      items: [
        // India buys a hospital system module by module, so the catalogue is a
        // top-level destination there. The US site has no equivalent page, and
        // this file is evaluated once per locale, so the item only exists where
        // the page does.
        ...(IS_INDIA
          ? [{ to: '/modules', label: 'Modules', position: 'left' as const }]
          : []),
        { to: '/workspace', label: 'Workspace', position: 'left' },
        { to: '/professional-support', label: 'Support', position: 'left' },
        {
          type: 'dropdown',
          label: 'Company',
          position: 'left',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Impact', to: '/impact' },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          to: '/signup',
          label: 'Book a demo',
          position: 'right',
          className: 'button button--primary navbar-signup-btn',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            ...(IS_INDIA ? [{ label: 'HIMS Modules', to: '/modules' }] : []),
            { label: 'Ciyex Workspace', to: '/workspace' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Support', to: '/professional-support' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'About Us', to: '/about' },
            { label: 'Our Impact', to: '/impact' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms of Service', to: '/terms' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${ENTITY}. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
