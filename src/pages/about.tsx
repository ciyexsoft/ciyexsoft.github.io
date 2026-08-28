import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './about.module.css';

export default function About(): ReactNode {
  return (
    <Layout
      title="About Us"
      description="About Qiaben LLC - the company behind Ciyex, commercial electronic health record and hospital information management software.">
      <main className={styles.aboutPage}>
        <div className="container">
          {/* Hero Section */}
          <div className={styles.heroCard}>
            <div className={styles.heroContent}>
              <div className={styles.badges}>
                <span className={styles.badge}>Healthcare Software</span>
                <span className={styles.badgeState}>Qiaben LLC</span>
              </div>
              <Heading as="h1" className={styles.heroTitle}>
                About Qiaben LLC
              </Heading>
              <p className={styles.heroSubtitle}>
                Clinical software for healthcare providers worldwide.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <Heading as="h2" className={styles.sectionTitle}>
                Our Mission
              </Heading>
              <div className={styles.missionCard}>
                <p className={styles.missionText}>
                  Qiaben LLC builds Ciyex — modern, secure, and interoperable electronic
                  health record (EHR) software. We believe high-quality healthcare
                  technology should be within reach of any provider, not just the largest
                  hospital networks.
                </p>
                <p className={styles.missionText}>
                  We deliver a complete, HIPAA-compliant platform built on open standards
                  like FHIR R4 and HL7 v2, available as a managed cloud service or
                  self-hosted on your own infrastructure. We serve clinics, hospitals, and
                  healthcare organizations of all sizes, from single-site practices to
                  multi-facility networks.
                </p>
                <p className={styles.missionText}>
                  Our focus is straightforward: reduce the friction of adoption, make data
                  genuinely interoperable, and let providers concentrate on what matters
                  most — patient care.
                </p>
              </div>
            </div>
          </section>

          {/* Corporate Info Section */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <Heading as="h2" className={styles.sectionTitle}>
                Corporate Information
              </Heading>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>&#x1f3e2;</div>
                  <h3 className={styles.infoLabel}>Registered Address</h3>
                  <p className={styles.infoValue}>
                    Qiaben LLC<br />
                    1309 Coffeen Avenue, STE 1200<br />
                    Sheridan, WY 82801<br />
                    United States
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>&#x1f4e7;</div>
                  <h3 className={styles.infoLabel}>Contact</h3>
                  <p className={styles.infoValue}>
                    <a href="mailto:info@qiaben.com" className={styles.infoLink}>
                      info@qiaben.com
                    </a>
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>&#x1f3e2;</div>
                  <h3 className={styles.infoLabel}>India Office</h3>
                  <p className={styles.infoValue}>
                    1/39, Veerappanur<br />
                    Coimbatore, Tamil Nadu 641105<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
