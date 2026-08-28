import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from '@site/src/pages/workspace.module.css';

const modules = [
  {
    title: 'Appointments & Queue',
    description: `Book by doctor, department or slot from a single calendar, and send the patient an SMS or email reminder from the hospital's own sender.

Tokens are issued at the counter and called from the queue console, with a waiting-area display board driven by the same list — so nobody has to shout a number across a corridor.

The front desk sees who has arrived, who is still waiting and which doctor is running late, without walking to the OPD to find out.`,
    image: '/img/features/appointments.png',
    imageAlt: 'Appointments module shown inside the Ciyex Workspace desktop client',
    flip: false,
  },
  {
    title: 'Registration & UHID',
    description: `The patient's whole story on one screen — demographics, history, allergies, medications, vitals and results. Search by name, phone, UHID or IP number in seconds.

UHID is allocated from your own number series, and duplicate detection runs before a second file is ever created, so one patient does not end up as three.

Visits, admissions, imaging and reports hang off the same record, which is what makes a case sheet retrievable years later without sending a clerk to the record room.`,
    image: '/img/features/patients.png',
    imageAlt: 'Patient management module shown inside the Ciyex Workspace desktop client',
    flip: true,
  },
  {
    title: 'OPD & Clinical Notes',
    description: `A new visit is one click, with the consultation fee applied and the free follow-up window enforced by the rule your hospital set — not by whoever is on the counter that morning.

Notes carry forward from the previous visit, so a review starts from what happened last time rather than from a blank screen. ICD-10 search sits inside the encounter.

The doctor's day shows who is waiting and who is to be rounded, and the results inbox collects the lab and imaging that came back — so nothing waits on somebody remembering to look.`,
    image: '/img/features/prescriptions.png',
    imageAlt: 'Clinical documentation module shown inside the Ciyex Workspace desktop client',
    flip: false,
  },
  {
    title: 'Messaging & Notifications',
    description: `Encrypted messaging between doctors, nursing staff and the front desk, delivered in real time with read receipts, attachments and an urgent flag that actually stands out.

Appointment reminders, report-ready notices and intake forms go out over SMS and email from the hospital's own sender, configured per branch.

Every conversation is logged and retention is configurable, so a record request years later has something to answer with.`,
    image: '/img/features/messaging.png',
    imageAlt: 'Secure messaging module shown inside the Ciyex Workspace desktop client',
    flip: false,
  },
  {
    title: 'Laboratory & Radiology',
    description: `Order from inside the encounter and follow the sample through collection, result entry and verification. Values outside the reference range are flagged in the chart rather than left to be noticed.

Analysers push results back over HL7 and modalities pick up their worklist over DICOM, so a technician is not retyping a number a machine already printed.

Billing, collection and outstanding-balance reports sit alongside, so what was ordered and what was actually paid for reconcile at day end.`,
    image: '/img/features/labs.png',
    imageAlt: 'Labs and reports module shown inside the Ciyex Workspace desktop client',
    flip: true,
  },
];

export default function Workspace(): ReactNode {
  return (
    <Layout
      title="Ciyex Workspace"
      description="Ciyex Workspace is the desktop client for the Ciyex HIMS — appointments and queue, registration and UHID, OPD, laboratory and radiology, messaging and billing in one app for Windows, macOS and Linux.">
      <main className={styles.page}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroBadge}>Desktop &middot; Cloud &middot; Self-hosted</span>
            <Heading as="h1" className={styles.heroTitle}>
              Ciyex Workspace.<br />
              <span className={styles.heroGradient}>Your hospital's command centre.</span>
            </Heading>
            <p className={styles.heroSubtitle}>
              A desktop application, the Ciyex HIMS, and secure hosting — built on the same
              VS Code foundation millions of developers trust, tuned for a hospital. The sidebar
              shows only the modules your hospital has switched on.
            </p>
            <div className={styles.heroCta}>
              <Link className={styles.btnPrimary} to="/signup">Get started &rarr;</Link>
            </div>
          </div>

          <div className={styles.mockupWrapper}>
            <div className={styles.mockupWindow}>
              <div className={styles.mockupBar}>
                <span className={styles.dot} style={{ background: '#ff5f57' }} />
                <span className={styles.dot} style={{ background: '#febc2e' }} />
                <span className={styles.dot} style={{ background: '#28c840' }} />
                <span className={styles.mockupTitle}>Ciyex Workspace — Schedule</span>
              </div>
              <div className={styles.mockupBody}>
                <img
                  src="/img/workspace-schedule.png"
                  alt="Ciyex Workspace desktop client showing the HIMS schedule view"
                  className={styles.mockupImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stack: how the pieces fit */}
        <section className={styles.stack}>
          <div className={styles.stackInner}>
            <div className={styles.stackText}>
              <div className={styles.sectionLabel}>How the pieces fit</div>
              <Heading as="h2" className={styles.stackTitle}>
                One download.<br />Three things working together.
              </Heading>
              <p className={styles.stackDesc}>
                Most HIMS vendors sell you a website. We give you a desktop app, the
                server that powers it, and the cloud to host your data — all together.
              </p>
              <ul className={styles.stackList}>
                <li>
                  <strong>Workspace (desktop)</strong> — the app clinicians use day to day.
                </li>
                <li>
                  <strong>Ciyex HIMS (server)</strong> — runs in the cloud we host for you or
                  on your own infrastructure.
                </li>
                <li>
                  <strong>Ciyex Cloud</strong> — encrypted storage, sync and backups.
                </li>
              </ul>
              <div className={styles.stackCta}>
                <Link className={styles.btnPrimary} to="/signup">Get started &rarr;</Link>
              </div>
            </div>
            <div className={styles.stackVisual}>
              <div className={styles.stackLayer} data-layer="desktop">
                <span className={styles.layerLabel}>Workspace Desktop</span>
                <span className={styles.layerSub}>Windows &middot; macOS &middot; Linux</span>
              </div>
              <div className={styles.stackLayer} data-layer="cloud">
                <span className={styles.layerLabel}>Ciyex Cloud (free)</span>
                <span className={styles.layerSub}>Encrypted storage &middot; sync &middot; backups</span>
              </div>
              <div className={styles.stackLayer} data-layer="ehr">
                <span className={styles.layerLabel}>Ciyex HIMS Server</span>
                <span className={styles.layerSub}>FHIR R4 &middot; HL7 v2 &middot; DPDP-aligned</span>
              </div>
            </div>
          </div>
        </section>

        {/* Module deep-dives (formerly /features) */}
        <section className={styles.modulesSection}>
          <div className={styles.modulesIntro}>
            <div className={styles.sectionLabel}>Every module, in the box</div>
            <Heading as="h2" className={styles.sectionTitle}>
              Built for the people at the counter.
            </Heading>
            <p className={styles.sectionSubtitle}>
              Every module below runs inside Ciyex Workspace — one download, and the full
              catalogue is on the <Link to="/modules">modules page</Link>. Designed to take steps
              out between your staff and the patient in front of them.
            </p>
          </div>
          <div className={styles.moduleRows}>
            {modules.map((m) => (
              <div
                key={m.title}
                className={`${styles.moduleRow} ${m.flip ? styles.moduleRowFlip : ''}`}
              >
                <div className={styles.moduleImage}>
                  <img
                    src={m.image}
                    alt={m.imageAlt}
                    className={styles.moduleScreenshot}
                    loading="lazy"
                  />
                </div>
                <div className={styles.moduleText}>
                  <Heading as="h3" className={styles.moduleTitle}>
                    {m.title}
                  </Heading>
                  {m.description.split('\n\n').map((para, j) => (
                    <p key={j} className={styles.moduleDesc}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <Heading as="h2" className={styles.ctaTitle}>
              One platform.<br />Built for how hospitals work.
            </Heading>
            <p className={styles.ctaDesc}>
              Workspace, the HIMS and hosting come together as one product — with
              straightforward commercial licensing, unlimited users, and support from our team.
            </p>
            <div className={styles.ctaButtons}>
              <Link className={styles.btnPrimary} to="/signup">Get started &rarr;</Link>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
