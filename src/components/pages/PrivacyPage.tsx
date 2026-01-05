import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="max-w-[100rem] mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-6xl text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="font-paragraph text-sm text-secondary mb-12">
            Last Updated: January 2026
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Name, email address, phone number, and mailing address
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Donation information and payment details
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Volunteer application information
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Communications you send to us
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Process donations and send receipts
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Respond to your inquiries and requests
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Send you updates about our programs and impact
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Coordinate volunteer activities
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Improve our website and services
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                3. Information Sharing
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information with trusted service providers who assist us in operating our website, conducting 
                our business, or serving our users, as long as those parties agree to keep this information 
                confidential.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                4. Data Security
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                5. Cookies and Tracking
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your experience. You can 
                set your browser to refuse all cookies or to indicate when a cookie is being sent. However, some 
                features of our website may not function properly without cookies.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                6. Your Rights
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Access the personal information we hold about you
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Request correction of inaccurate information
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Request deletion of your personal information
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  Opt out of receiving marketing communications
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                7. Children's Privacy
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                8. Changes to Privacy Policy
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                9. Contact Us
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at 
                info@masonatlasfoundation.org or call (555) 123-4567.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
