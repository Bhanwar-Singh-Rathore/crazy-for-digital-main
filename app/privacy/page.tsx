// pages/privacy.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Crazy For Digital',
  description:
    'Learn how Crazy For Digital collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  const effectiveDate = '[Insert Date]';

  const rights = [
    {
      region: 'EU / EEA',
      rights: 'Access, rectification, deletion, portability, objection, restrict processing',
    },
    {
      region: 'Canada',
      rights: 'Access, correction, withdrawal of consent',
    },
    {
      region: 'USA',
      rights: 'Opt-out of sale, access, deletion (where applicable)',
    },
    {
      region: 'Australia',
      rights: 'Access and correction under the Privacy Act',
    },
    {
      region: 'GCC',
      rights: 'Access and purpose-limited data use (local laws permitting)',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Privacy Policy – Crazy For Digital
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Effective Date: <span className="font-medium">{effectiveDate}</span>
        </p>
        
        <p>
          Crazy For Digital (<em>&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;</em>) is committed to
          protecting your privacy across all regions where we operate. This Privacy Policy explains how we
          collect, use, and protect personal information when you interact with our website, services, or
          communication.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Who This Applies To</h2>
          <p>This policy applies to all website visitors, clients, and leads from:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>United States</strong> – Compliant with CCPA/CPRA</li>
            <li><strong>European Union &amp; EEA</strong> – Compliant with GDPR</li>
            <li><strong>Canada</strong> – Compliant with PIPEDA</li>
            <li><strong>GCC (Gulf Cooperation Council)</strong> – Regional privacy‑aware</li>
            <li><strong>Australia</strong> – Compliant with the Privacy Act 1988</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2. What We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Contact details:</strong> name, email, phone, website, company (when submitted)</li>
            <li><strong>Business information:</strong> project details, marketing goals, audit inputs</li>
            <li><strong>Usage data:</strong> pages visited, device type, referrer, cookies (via GA4, Meta Pixel)</li>
            <li><strong>Consent records:</strong> form opt‑ins, marketing preferences</li>
            <li><strong>Files uploaded</strong> via contact or audit forms</li>
          </ul>
          <p className="italic">We do not knowingly collect personal data from anyone under the age of 18.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3. How We Use It</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Respond to requests and form submissions</li>
            <li>Provide audits, proposals, or consultations</li>
            <li>Deliver marketing or service communications (with consent)</li>
            <li>Improve site performance and user experience</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">4. Lawful Basis (For GDPR)</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Consent</strong> (e.g., form submissions, newsletter)</li>
            <li><strong>Contractual necessity</strong> (e.g., project discussions, audits)</li>
            <li><strong>Legitimate interest</strong> (e.g., internal analytics, improving services)</li>
            <li><strong>Compliance</strong> (as required by law)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">5. Data Sharing</h2>
          <p>We do <strong>not</strong> sell your data. We may share data only with:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Service providers (hosting, email, analytics)</li>
            <li>Legal or regulatory authorities (if required)</li>
            <li>CRM and workflow tools (for lead management)</li>
          </ul>
          <p>All third parties are required to comply with relevant data protection laws.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">6. Your Rights</h2>
          <p>Depending on your country, you may have the right to:</p>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Region</th>
                  <th className="border px-4 py-2 text-left">Key Rights Include</th>
                </tr>
              </thead>
              <tbody>
                {rights.map(({ region, rights }, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''}>
                    <td className="border px-4 py-2">{region}</td>
                    <td className="border px-4 py-2">{rights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2">
            To exercise your rights, email us at{' '}
            <a
              href="mailto:privacy@crazyfordigital.com"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              privacy@crazyfordigital.com
            </a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">7. Data Retention</h2>
          <p>We retain data only as long as necessary for its purpose or as required by law. You may request deletion anytime.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">8. Cookies &amp; Analytics</h2>
          <p>
            We use cookies and third-party tools (e.g., Google Analytics 4, Meta Pixel) to monitor performance.
            You can opt out using browser settings or cookie controls. A separate Cookie Policy may be introduced soon.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">9. Data Security</h2>
          <p>
            We use industry‑standard security measures, encryption, and secure platforms to protect your data. However,
            no method of transmission is 100% secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">10. International Transfers</h2>
          <p>
            Your data may be transferred outside your country. We ensure appropriate safeguards (like Standard Contractual
            Clauses) when doing so.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">11. Contact Information</h2>
          <address className="not-italic">
            <p>Crazy For Digital</p>
            <p>
              Email:{' '}
              <a
                href="mailto:privacy@crazyfordigital.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                privacy@crazyfordigital.com
              </a>
            </p>
            <p>
              Website:{' '}
              <Link href="https://crazyfordigital.com" className="text-blue-600 hover:underline dark:text-blue-400">
                https://crazyfordigital.com
              </Link>
            </p>
          </address>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">12. Updates</h2>
          <p>We may revise this Privacy Policy from time to time. Last updated: {effectiveDate}.</p>
        </section>
      </div>
    </main>
  );
}
