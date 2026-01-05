import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="max-w-[100rem] mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-6xl text-foreground text-center mb-16">
            Our Mission
          </h1>
          
          <div className="grid grid-cols-12 gap-12 mb-16">
            <div className="col-span-6">
              <Image
                src="https://static.wixstatic.com/media/dcf233_66622a5a74c741d0a075ed66c5a0c691~mv2.png?originWidth=576&originHeight=448"
                alt="Children receiving support from the foundation"
                width={600}
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="col-span-6 flex flex-col justify-center">
              <h2 className="font-heading text-4xl text-foreground mb-6">
                Transforming Hope into Action
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                The Mason Atlas Foundation is dedicated to supporting families affected by 
                pediatric cancer through comprehensive assistance programs, funding groundbreaking 
                research, and creating a compassionate community of hope and healing.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                We believe that every child deserves access to the best possible care, and 
                every family deserves support during their most challenging moments. Through 
                Mason's legacy, we work tirelessly to make this vision a reality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-12 mb-16">
            <div className="col-span-6 flex flex-col justify-center">
              <h2 className="font-heading text-4xl text-foreground mb-6">
                Our Core Values
              </h2>
              <ul className="space-y-4">
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Compassion:</strong> We approach every family 
                  with empathy, understanding, and unwavering support.
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Hope:</strong> We inspire hope through action, 
                  research, and community connection.
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Excellence:</strong> We are committed to funding 
                  the highest quality research and providing exceptional support services.
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Transparency:</strong> We maintain the highest 
                  standards of accountability in all our operations.
                </li>
              </ul>
            </div>
            
            <div className="col-span-6">
              <Image
                src="https://static.wixstatic.com/media/dcf233_a91e1e3af8a44affab3709fb95a8782e~mv2.png?originWidth=576&originHeight=448"
                alt="Foundation team working together"
                width={600}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="bg-background border border-light-grey rounded-lg p-12 text-center">
            <h2 className="font-heading text-4xl text-foreground mb-6">
              Our Fundraising Goals
            </h2>
            <p className="font-paragraph text-lg text-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              We have set ambitious goals to maximize our impact in the fight against pediatric cancer. 
              Our current fundraising objectives include:
            </p>
            
            <div className="grid grid-cols-12 gap-8 mt-12">
              <div className="col-span-4">
                <div className="bg-background border border-primary rounded-lg p-8">
                  <h3 className="font-heading text-3xl text-primary mb-4">$500,000</h3>
                  <p className="font-paragraph text-base text-foreground">
                    Research Funding
                  </p>
                  <p className="font-paragraph text-sm text-secondary mt-2">
                    Supporting innovative pediatric cancer research initiatives
                  </p>
                </div>
              </div>
              
              <div className="col-span-4">
                <div className="bg-background border border-primary rounded-lg p-8">
                  <h3 className="font-heading text-3xl text-primary mb-4">$250,000</h3>
                  <p className="font-paragraph text-base text-foreground">
                    Family Support
                  </p>
                  <p className="font-paragraph text-sm text-secondary mt-2">
                    Providing direct assistance to families in need
                  </p>
                </div>
              </div>
              
              <div className="col-span-4">
                <div className="bg-background border border-primary rounded-lg p-8">
                  <h3 className="font-heading text-3xl text-primary mb-4">$150,000</h3>
                  <p className="font-paragraph text-base text-foreground">
                    Awareness Programs
                  </p>
                  <p className="font-paragraph text-sm text-secondary mt-2">
                    Educating communities about pediatric cancer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
