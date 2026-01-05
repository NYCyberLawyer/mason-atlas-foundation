import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function GetHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="max-w-[100rem] mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-6xl text-foreground text-center mb-8">
            Get Help
          </h1>
          <p className="font-paragraph text-lg text-foreground text-center mb-16 max-w-3xl mx-auto">
            We understand the challenges families face when dealing with a pediatric cancer diagnosis. 
            The Mason Atlas Foundation is here to provide support, guidance, and resources during this difficult time.
          </p>

          <div className="grid grid-cols-12 gap-12 mb-16">
            <div className="col-span-6">
              <Image
                src="https://static.wixstatic.com/media/dcf233_1ebc92e1361a4233b156b750301192cf~mv2.png?originWidth=576&originHeight=448"
                alt="Family receiving support"
                width={600}
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="col-span-6 flex flex-col justify-center">
              <h2 className="font-heading text-4xl text-foreground mb-6">
                Support Services Available
              </h2>
              <ul className="space-y-4">
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Financial Assistance:</strong> Help with medical bills, 
                  travel expenses, and other costs related to treatment.
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Emotional Support:</strong> Access to counseling services 
                  and support groups for families and patients.
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Resource Navigation:</strong> Guidance in finding the best 
                  medical care and treatment options.
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Community Connection:</strong> Connect with other families 
                  who understand your journey.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-background border border-light-grey rounded-lg p-12 mb-16">
            <h2 className="font-heading text-4xl text-foreground text-center mb-8">
              How to Access Support
            </h2>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-4 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl text-primary">1</span>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">Contact Us</h3>
                <p className="font-paragraph text-base text-foreground">
                  Reach out through our contact form or call our support line.
                </p>
              </div>
              
              <div className="col-span-4 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl text-primary">2</span>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">Initial Assessment</h3>
                <p className="font-paragraph text-base text-foreground">
                  We'll discuss your needs and determine the best way to help.
                </p>
              </div>
              
              <div className="col-span-4 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl text-primary">3</span>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">Receive Support</h3>
                <p className="font-paragraph text-base text-foreground">
                  Access the resources and assistance you need.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-heading text-4xl text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-paragraph text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Don't hesitate to reach out. We're here to help you navigate this journey.
            </p>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph px-12 py-6 text-lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
