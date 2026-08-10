import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ── Inline SVG Icons ── */
const IconShield = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconHeart = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
    <path d="M12 6v4M10 8h4" />
  </svg>
);

const IconGlobe = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconCode = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const IconUsers = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconZap = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

/* ── Workspace Screenshot ── */
function WorkspaceMockup() {
  return (
    <div className={styles.mockupWrapper}>
      <div className={styles.mockupWindow}>
        <div className={styles.mockupBar}>
          <span className={styles.dot} style={{ background: '#ff5f57' }} />
          <span className={styles.dot} style={{ background: '#febc2e' }} />
          <span className={styles.dot} style={{ background: '#28c840' }} />
          <span className={styles.mockupTitle}>Ciyex Workspace — Schedule</span>
        </div>
        <div className={styles.screenshotBody}>
          <img
            src="/img/workspace-schedule.png"
            alt="Ciyex Workspace desktop client showing the EHR schedule view"
            className={styles.screenshotImg}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Hero ── */
function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          Clinical Software &middot; Built for Healthcare
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          Ciyex Workspace.<br />
          <span className={styles.heroGradient}>One app for your whole clinic.</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          A modern desktop workspace, the Ciyex EHR, and secure cloud hosting — all in one
          platform. Built so clinics of any size run on the same tools as the biggest hospitals.
        </p>
        <div className={styles.heroCta}>
          <Link className={styles.btnPrimary} to="/workspace">
            Explore Ciyex Workspace
          </Link>
        </div>
      </div>
      <WorkspaceMockup />
    </section>
  );
}

/* ── Features ── */
const features = [
  { icon: <IconHeart />, title: 'Patient-First Design', desc: 'Patients own their health data. Secure portal access to records, appointments, messaging, and prescriptions. Software that puts people in control.' },
  { icon: <IconUsers />, title: 'Community Health Centers', desc: 'Purpose-built EHR software for community health centers, free clinics, and rural providers who serve the most underserved populations.' },
  { icon: <IconGlobe />, title: 'Health Equity', desc: 'Multi-language, culturally responsive, and designed to remove technology barriers for immigrant, uninsured, and underserved communities.' },
  { icon: <IconShield />, title: 'Privacy & Trust', desc: 'HIPAA-compliant with enterprise-grade encryption. Every patient deserves the same level of data protection, regardless of which software their clinic uses.' },
  { icon: <IconCode />, title: 'Deploy Your Way', desc: 'Fully managed cloud or self-hosted on your own infrastructure. Clear licensing, no per-patient fees, and no vendor lock-in.' },
  { icon: <IconZap />, title: 'Interoperable', desc: 'FHIR R4 native. Connects with labs, pharmacies, and other systems so patients never have to repeat their story at every visit.' },
];

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresInner}>
        <div className={styles.sectionLabel}>Why Ciyex</div>
        <Heading as="h2" className={styles.sectionTitle}>
          Technology built around your patients.
        </Heading>
        <p className={styles.sectionSubtitle}>
          Every feature is designed with one question: does this give clinics and patients better tools than what they have today?
        </p>
        <div className={styles.featureGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Product Showcase (Apple-style alternating sections) ── */
function ShowcaseSection() {
  return (
    <>
      {/* Section 1: Patient Care */}
      <section className={styles.showcase}>
        <div className={styles.showcaseInner}>
          <div className={styles.showcaseText}>
            <div className={styles.sectionLabel}>Better Tools</div>
            <Heading as="h2" className={styles.showcaseTitle}>
              Every clinic<br />deserves this.
            </Heading>
            <p className={styles.showcaseDesc}>
              Complete health records software, smart clinical documentation tools,
              and care coordination workflows. The same quality of technology
              whether you run a rural clinic or a major hospital.
            </p>
          </div>
          <div className={styles.showcaseVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualCardHeader}>
                <div className={styles.visualCardDot} />
                <span>Patient Chart</span>
              </div>
              <div className={styles.visualCardRow}><span className={styles.vcLabel}>Name</span><span className={styles.vcValue}>Sarah Johnson</span></div>
              <div className={styles.visualCardRow}><span className={styles.vcLabel}>DOB</span><span className={styles.vcValue}>04/15/1985</span></div>
              <div className={styles.visualCardRow}><span className={styles.vcLabel}>MRN</span><span className={styles.vcValue}>CX-2024-0847</span></div>
              <div className={styles.visualCardDivider} />
              <div className={styles.visualVitals}>
                <div className={styles.vitalPill}><strong>120/80</strong><span>BP</span></div>
                <div className={styles.vitalPill}><strong>72</strong><span>HR</span></div>
                <div className={styles.vitalPill}><strong>98.6</strong><span>Temp</span></div>
                <div className={styles.vitalPill}><strong>99%</strong><span>SpO2</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interoperability */}
      <section className={clsx(styles.showcase, styles.showcaseReverse, styles.showcaseDark)}>
        <div className={styles.showcaseInner}>
          <div className={styles.showcaseText}>
            <div className={styles.sectionLabel}>Connected Care</div>
            <Heading as="h2" className={styles.showcaseTitle}>
              Your health data<br />should follow you.
            </Heading>
            <p className={styles.showcaseDesc}>
              Built on FHIR R4 open standards so patient records move seamlessly
              between providers, labs, pharmacies, and specialists. No more
              lost records or repeated tests.
            </p>
          </div>
          <div className={styles.showcaseVisual}>
            <div className={styles.interopVisual}>
              <div className={styles.interopCenter}>
                <img src="/img/Ciyex-logo-no-text.png" alt="Ciyex" width="40" height="40" />
              </div>
              {['Labs', 'Pharmacy', 'Insurance', 'HIE', 'Imaging', 'Billing'].map((label, i) => (
                <div key={i} className={styles.interopNode}>
                  <span>{label}</span>
                </div>
              ))}
              {[0,1,2,3,4,5].map(i => (
                <div key={i} className={styles.interopLine} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Recent Blogs Section ── */
/* ── CTA Section ── */
function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <Heading as="h2" className={styles.ctaTitle}>
          Get the whole stack.<br />One platform.
        </Heading>
        <p className={styles.ctaDesc}>
          Ciyex Workspace runs on Windows, macOS, and Linux. Start with our managed cloud
          and your clinic is up and running in minutes — no servers to manage.
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.btnPrimary} to="/signup">
            Get started &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function Home(): ReactNode {
  return (
    <Layout
      title="Ciyex Workspace — Clinical EHR Software for Every Practice"
      description="Ciyex Workspace bundles a modern desktop client, the Ciyex EHR, and secure cloud hosting into one platform for clinics and hospitals.">
      <HomepageHero />
      <FeaturesSection />
      <ShowcaseSection />
      <CtaSection />
    </Layout>
  );
}
