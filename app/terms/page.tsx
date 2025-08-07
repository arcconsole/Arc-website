
import React from 'react';
import NavBar from "../sections/navBar";
import Footer from "../sections/footer";
import { DotPattern } from "@/components/ui/dot-pattern";


export const metadata = {
  title: 'Terms of Service – ArcConsoles',
};

export default function TermsPage() {
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
            <strong>Terms of Service</strong>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-gilmer mb-8 md:mb-12 tracking-wide">
            <strong>Last updated:</strong> July 2025
          </p>

          <div className="space-y-8 md:space-y-12">
            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Acceptance of Terms</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                By accessing, using, or purchasing products from Arc Consoles (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you (&quot;user,&quot; &quot;you,&quot; or &quot;your&quot;) accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Products and Services</strong>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Gaming Consoles</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    Arc Consoles designs, manufactures, and sells gaming consoles and related hardware. All products are subject to availability and our current specifications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Software and Updates</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    Our consoles include proprietary software and firmware. We may provide updates, patches, and new features at our discretion. Some updates may be required for continued operation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Online Services</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    We may offer online gaming services, digital content, and cloud features. These services are provided &quot;as available&quot; and may be modified or discontinued.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Use License and Restrictions</strong>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Permitted Use</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide mb-4">
                    You are granted a limited, non-exclusive, non-transferable license to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                    <li>Use Arc Consoles products for personal, non-commercial purposes</li>
                    <li>Access our website and online services</li>
                    <li>Download and install official software updates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Prohibited Activities</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide mb-4">
                    You may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                    <li>Reverse engineer, modify, or tamper with console hardware or software</li>
                    <li>Use our products for illegal or unauthorized purposes</li>
                    <li>Attempt to circumvent security measures</li>
                    <li>Distribute pirated or unauthorized content</li>
                    <li>Engage in activities that could damage our servers or services</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Account Terms</strong>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Registration</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide mb-4">
                    Some services may require account registration. You must:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Be responsible for all activities under your account</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Account Termination</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    We reserve the right to suspend or terminate accounts that violate these terms or engage in prohibited activities.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Purchase and Payment Terms</strong>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Pricing</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    All prices are subject to change without notice. Prices include applicable taxes unless otherwise stated.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Payment</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    Payment must be made in full at the time of purchase using accepted payment methods. All transactions are subject to verification.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Shipping and Delivery</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    We will make reasonable efforts to deliver products within estimated timeframes. Shipping costs and delivery terms are specified during checkout.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Warranty and Returns</strong>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Limited Warranty</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    Arc Consoles products are covered by our limited warranty against manufacturing defects. Warranty terms and conditions are provided with each product.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Return Policy</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    Returns must be initiated within [X] days of delivery. Products must be in original condition with all accessories and documentation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Warranty Exclusions</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide mb-4">
                    Warranties do not cover:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700 font-gilmer">
                    <li>Damage from misuse, accidents, or modifications</li>
                    <li>Normal wear and tear</li>
                    <li>Software issues caused by user modifications</li>
                    <li>Damage from unauthorized repairs</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Intellectual Property</strong>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Our Rights</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    All content, trademarks, logos, and intellectual property on our website and in our products remain our exclusive property.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>User Content</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    Any content you submit (reviews, feedback, etc.) may be used by us for business purposes. You grant us a non-exclusive license to use such content.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Privacy and Data</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                Your privacy is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Disclaimers and Limitations</strong>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Service Availability</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    Our website and online services are provided &quot;as is&quot; and &quot;as available.&quot; We do not guarantee uninterrupted or error-free service.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Disclaimer of Warranties</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-gilmer text-black mb-3 tracking-tight">
                    <strong>Limitation of Liability</strong>
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                    IN NO EVENT SHALL ARC CONSOLES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, PROFITS, OR USE.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Indemnification</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                You agree to indemnify and hold Arc Consoles harmless from any claims, damages, or expenses arising from your use of our products or violation of these terms.
              </p>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Governing Law</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                These Terms are governed by [Your State/Country] law, without regard to conflict of law principles. Any disputes will be resolved in the courts of [Your Jurisdiction].
              </p>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Changes to Terms</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                We reserve the right to modify these Terms at any time. Material changes will be posted on our website with an updated effective date. Your continued use constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Severability</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-gilmer text-black tracking-tight">
                <strong>Contact Information</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-gilmer leading-relaxed tracking-wide">
                For questions about these Terms of Service, please contact us:
                <br />
                <strong className="text-black">Email:</strong>{' '}
                <a
                  href="mailto:support@arcconsoles.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors underline"
                >
                  support@arcconsoles.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

