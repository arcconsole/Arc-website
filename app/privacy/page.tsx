// app/privacy/page.tsx

import React from 'react';
import NavBar from "../sections/navBar";
import Footer from "../sections/footer";
import { DotPattern } from "@/components/ui/dot-pattern";

export const metadata = {
  title: 'Privacy Policy – ArcConsoles',
};

export default function PrivacyPage() {
  return (
    <div className="overflow-x-hidden relative bg-white min-h-screen">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="absolute inset-0 h-full w-full fill-neutral-400/30"
      />
      <NavBar />
      <main className="relative z-10 mx-auto py-20 md:py-32 px-4 md:px-12 max-w-4xl md:max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-gilmer mb-4 md:mb-6 text-black tracking-tight">
            <strong>Privacy Policy</strong>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-gilmer mb-8 md:mb-12 tracking-wide">
            <strong>Last updated:</strong> July 2025
          </p>

          <div className="space-y-8 md:space-y-12">
            <section className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                At Arc Consoles, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, purchase our products, or use our services.
              </p>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Information We Collect</strong>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Information You Provide Directly</strong>
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                    <li>Name, email address, and contact information</li>
                    <li>Billing and shipping addresses</li>
                    <li>Payment information (processed securely through third-party processors)</li>
                    <li>Account registration details</li>
                    <li>Customer service communications</li>
                    <li>Product reviews and feedback</li>
                    <li>Newsletter subscriptions and marketing preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Automatically Collected Information</strong>
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                    <li>Device information (console serial numbers, hardware specifications)</li>
                    <li>Usage data and gaming statistics</li>
                    <li>IP address and browser information</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Website navigation patterns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Gaming and Performance Data</strong>
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                    <li>Game usage statistics and performance metrics</li>
                    <li>Console diagnostic information</li>
                    <li>Software update and installation data</li>
                    <li>Online gaming activity (when applicable)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>How We Use Your Information</strong>
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support and technical assistance</li>
                <li>Improve our products and gaming experience</li>
                <li>Send important updates about your console or services</li>
                <li>Communicate promotional offers (with your consent)</li>
                <li>Ensure product security and prevent fraud</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns to enhance our services</li>
              </ul>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Information Sharing and Disclosure</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Service Providers</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide mb-4">
                    We may share information with trusted third-party service providers who assist us in:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                    <li>Payment processing</li>
                    <li>Shipping and logistics</li>
                    <li>Customer support</li>
                    <li>Website analytics</li>
                    <li>Marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Legal Requirements</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide mb-4">
                    We may disclose your information when required by law or to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                    <li>Comply with legal processes</li>
                    <li>Protect our rights and property</li>
                    <li>Ensure user safety</li>
                    <li>Prevent fraud or illegal activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Business Transfers</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Data Security</strong>
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and data storage</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and employee training</li>
                <li>Industry-standard payment processing security</li>
              </ul>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Your Rights and Choices</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                <li>Access and review your personal information</li>
                <li>Correct or update inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Control cookie preferences</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide mt-4">
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@arcconsoles.com" className="text-black underline hover:text-gray-600 transition-colors">
                  privacy@arcconsoles.com
                </a>.
              </p>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Cookies and Tracking</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide mb-4">
                <strong>Our website uses cookies and similar technologies to:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage</li>
                <li>Provide personalized content</li>
                <li>Enable social media features</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                <strong>You can control cookie settings through your browser preferences.</strong>
              </p>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Third-Party Links</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Children's Privacy</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                Our services are not directed to individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information.
              </p>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>International Data Transfers</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                Your information may be transferred and stored in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers.
              </p>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Changes to This Privacy Policy</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                We may update this Privacy Policy periodically. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Contact Us</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                If you have any questions about this Privacy Policy or our data practices, please contact us:<br />
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@arcconsoles.com" className="text-black underline hover:text-gray-600 transition-colors">
                  privacy@arcconsoles.com
                </a><br />
                <strong>Address:</strong> Zenali Innovative Technologies, Trivandrum
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
