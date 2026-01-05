import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="font-paragraph text-sm text-secondary mb-12">
            Last Updated: January 2026
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                By accessing and using the Mason Atlas Foundation website, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to these terms, please do 
                not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                2. Use of Website
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-4">
                You may use our website for lawful purposes only. You agree not to use the website:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  In any way that violates any applicable federal, state, local, or international law or regulation
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  To transmit any material that is defamatory, offensive, or otherwise objectionable
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  To impersonate or attempt to impersonate the Foundation, a Foundation employee, or any other person
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                3. Donations
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                All donations made through our website are final and non-refundable unless otherwise required by law. 
                The Mason Atlas Foundation is a 501(c)(3) nonprofit organization, and donations are tax-deductible 
                to the extent allowed by law.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                4. Intellectual Property
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                The content on this website, including text, graphics, logos, images, and software, is the property 
                of the Mason Atlas Foundation and is protected by copyright and other intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                5. Disclaimer of Warranties
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                This website is provided "as is" without any representations or warranties, express or implied. 
                The Mason Atlas Foundation makes no representations or warranties in relation to this website or 
                the information and materials provided on this website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                The Mason Atlas Foundation will not be liable to you in relation to the contents of, or use of, 
                or otherwise in connection with, this website for any indirect, special, or consequential loss or 
                for any business losses, loss of revenue, income, profits, or anticipated savings.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                7. Changes to Terms
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes by posting the new Terms of Use on this page. Your continued use of the website after 
                such modifications will constitute your acknowledgment and acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">
                8. Contact Information
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at 
                info@masonatlasfoundation.org.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
