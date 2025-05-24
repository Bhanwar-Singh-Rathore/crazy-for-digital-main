// pages/terms.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Crazy For Digital',
  description:
    'Read the Terms & Conditions governing your use of Crazy For Digital’s website and services.',
};

export default function TermsPage() {
  const effectiveDate = '[Insert Date]';

  return (
    <main className="min-h-screen bg-white mt-24 text-gray-800 dark:bg-gray-900 dark:text-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
          Terms &amp; Conditions – Crazy For Digital
        </h1>
        <p className="mb-8 text-sm text-gray-600 dark:text-gray-400">
          Effective Date: <span className="font-medium">{effectiveDate}</span>
        </p>

        <p className="mb-6">
          Welcome to Crazy For Digital (<em>&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;</em>).
          These Terms and Conditions (<em>&ldquo;Terms&rdquo;</em>) govern your use of our website and any services we offer.
          By accessing or using our site or services, you agree to be bound by these Terms.
        </p>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">1. Scope of Services</h2>
          <p>
            We offer digital marketing, SEO, website development, content creation, and performance advertising services
            tailored to the needs of startups, founders, and growing businesses. Specific deliverables, timelines, and
            costs will be outlined in separate proposals or agreements.
          </p>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">2. User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You confirm that the information you submit is accurate and you have the right to share it.</li>
            <li>You agree not to misuse our site, impersonate others, or submit malicious material.</li>
            <li>You will use any content, proposal, or audit results for legitimate business evaluation purposes only.</li>
          </ul>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">3. Project Engagements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Scope and pricing have been agreed upon in writing.</li>
            <li>A signed agreement and/or advance payment (if applicable) is received.</li>
            <li>
              Revisions, cancellation, and delivery terms will be included in the service proposal or project agreement
              shared before work begins.
            </li>
          </ul>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">4. Intellectual Property</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              All original creative, strategy, or marketing materials delivered remain the property of Crazy For Digital
              until fully paid for.
            </li>
            <li>
              You receive a royalty‑free license to use completed and approved deliverables for your business.
            </li>
            <li>
              We reserve the right to showcase completed work in our portfolio unless a written NDA is in place.
            </li>
          </ul>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">5. Payments &amp; Refunds</h2>
          <p>
            Payment terms, installment schedules, and refund clauses will be defined in your proposal or service agreement.
            Late payments may result in paused work, withheld deliverables, or applicable fees.
          </p>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">6. Confidentiality</h2>
          <p>
            Any sensitive business or proprietary information shared with us will be kept confidential and not disclosed
            to third parties without your written consent &mdash; unless required by law.
          </p>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">7. Disclaimer of Guarantees</h2>
          <p>
            While we strive to deliver excellent results, we <strong>do not guarantee</strong> specific outcomes (e.g.,
            SEO rankings, ad conversions, revenue growth). Marketing performance depends on multiple factors beyond our control.
          </p>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">8. Limitation of Liability</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We are not liable for any indirect, incidental, or consequential damages.</li>
            <li>Losses due to third‑party platforms (e.g., Google, Meta, hosting providers).</li>
            <li>Client‑side delays, miscommunication, or implementation errors.</li>
            <li>Total liability under any engagement shall not exceed the total fees paid for that service.</li>
          </ul>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">9. Termination</h2>
          <p>
            We reserve the right to decline or terminate services if you violate these terms or engage in unethical practices,
            abuse, or fraudulent requests. In such cases, unused fees (if any) will be handled as per project terms.
          </p>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">10. Jurisdiction</h2>
          <p>
            These terms are governed by the laws of [Insert country/state of legal registration]. Any disputes shall be
            resolved in that jurisdiction unless mutually agreed otherwise.
          </p>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-bold">11. Contact</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <address className="not-italic">
            <p>Crazy For Digital</p>
            <p>
              Email:{' '}
              <a
                href="mailto:legal@crazyfordigital.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                legal@crazyfordigital.com
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
      </div>
    </main>
  );
}
