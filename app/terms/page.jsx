import { Header69 } from "@/components/about-us/Header69";

export const metadata = {
  title: "Terms of Service | Mealo Balance Kitchen",
  description: "Terms of Service for Mealo Balance Kitchen - Read our terms and conditions for using our meal delivery service.",
};

export default function TermsPage() {
  return (
    <>
      <Header69
        heading="Terms of Service"
        description="Last updated: January 2025"
      />

      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Mealo Balance Kitchen's services, you accept and agree to be
              bound by these Terms of Service. If you do not agree to these terms, please do not
              use our services.
            </p>

            <h2>2. Service Description</h2>
            <p>
              Mealo Balance Kitchen provides authentic Kerala meal delivery services in the UAE.
              Our service includes:
            </p>
            <ul>
              <li>Daily meal delivery with calorie-aligned options</li>
              <li>Subscription-based meal plans (Normal, Executive, Weight Loss)</li>
              <li>Fresh, authentic Kerala cuisine prepared daily</li>
            </ul>

            <h2>3. Account Registration</h2>
            <p>
              To use our services, you must create an account and provide accurate, complete information.
              You are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>

            <h2>4. Orders and Payment</h2>
            <p>
              <strong>4.1 Placing Orders:</strong> All orders are subject to acceptance and availability.
              We reserve the right to refuse or cancel any order for any reason.
            </p>
            <p>
              <strong>4.2 Pricing:</strong> Prices are displayed in AED and are subject to change without
              notice. The price charged will be the price displayed at the time of order placement.
            </p>
            <p>
              <strong>4.3 Payment:</strong> Payment is due at the time of order. We accept credit cards,
              debit cards, and other payment methods as displayed on our website.
            </p>
            <p>
              <strong>4.4 Subscription Plans:</strong> Subscription plans auto-renew unless cancelled.
              You will be charged automatically at the start of each billing cycle.
            </p>

            <h2>5. Delivery</h2>
            <p>
              <strong>5.1 Delivery Areas:</strong> We deliver to specified areas within the UAE.
              Delivery times are estimates and not guaranteed.
            </p>
            <p>
              <strong>5.2 Delivery Address:</strong> You must provide accurate delivery information.
              We are not responsible for deliveries to incorrect addresses provided by you.
            </p>
            <p>
              <strong>5.3 Failed Deliveries:</strong> If delivery cannot be completed due to incorrect
              information or unavailability, additional charges may apply for redelivery.
            </p>

            <h2>6. Cancellation and Refund Policy</h2>
            <p>
              <strong>6.1 Order Cancellation:</strong> Orders can be cancelled up to 24 hours before
              the scheduled delivery date for a full refund.
            </p>
            <p>
              <strong>6.2 Subscription Cancellation:</strong> Subscriptions can be cancelled at any time.
              Cancellations take effect at the end of the current billing cycle.
            </p>
            <p>
              <strong>6.3 Refunds:</strong> Refunds for cancelled orders will be processed within 5-7
              business days to the original payment method.
            </p>

            <h2>7. Food Safety and Allergens</h2>
            <p>
              We take food safety seriously and follow all applicable health regulations. However:
            </p>
            <ul>
              <li>You are responsible for informing us of any food allergies or dietary restrictions</li>
              <li>We cannot guarantee that our meals are completely allergen-free</li>
              <li>Cross-contamination may occur during food preparation</li>
            </ul>

            <h2>8. Intellectual Property</h2>
            <p>
              All content on our website, including text, images, logos, and recipes, is the property
              of Mealo Balance Kitchen and protected by intellectual property laws. You may not use
              our content without written permission.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Mealo Balance Kitchen shall not be liable for
              any indirect, incidental, special, or consequential damages arising from your use of
              our services.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold Mealo Balance Kitchen harmless from any claims, losses,
              or damages arising from your use of our services or violation of these terms.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective
              immediately upon posting. Your continued use of our services constitutes acceptance
              of the modified terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These terms are governed by the laws of the United Arab Emirates. Any disputes shall
              be resolved in the courts of Dubai, UAE.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p>
              Email: support@mealobalancekitchen.com<br />
              Phone: +971 XX XXX XXXX<br />
              Address: Dubai, United Arab Emirates
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
