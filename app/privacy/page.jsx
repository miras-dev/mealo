import { Header69 } from "@/components/about-us/Header69";

export const metadata = {
  title: "Privacy Policy | Mealo Balance Kitchen",
  description: "Privacy policy for Mealo Balance Kitchen - Learn how we protect and handle your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header69
        heading="Privacy Policy"
        description="Last updated: January 2025"
      />

      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              At Mealo Balance Kitchen, we collect information that you provide directly to us when you:
            </p>
            <ul>
              <li>Create an account or place an order</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us for customer support</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, delivery address,
              payment information, and dietary preferences.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and deliver your meal orders</li>
              <li>Send you order confirmations and delivery updates</li>
              <li>Respond to your questions and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business
              (payment processors, delivery partners, email service providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet is 100% secure.
            </p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website.
              You can control cookies through your browser settings. For more information, see our Cookie Policy.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13 years of age. We do not knowingly
              collect personal information from children under 13.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <p>
              Email: privacy@mealobalancekitchen.com<br />
              Phone: +971 XX XXX XXXX<br />
              Address: Dubai, United Arab Emirates
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
