import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { BaseCrudService } from '@/integrations';
import { Programs } from '@/entities';

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Programs[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      setLoading(true);
      const result = await BaseCrudService.getAll<Programs>('programs');
      setPrograms(result.items);
    } catch (error) {
      console.error('Error loading programs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

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
            Our Programs
          </h1>
          <p className="font-paragraph text-lg text-foreground text-center mb-16 max-w-3xl mx-auto">
            Discover how the Mason Atlas Foundation supports families, engages volunteers, 
            and creates meaningful change in the fight against pediatric cancer.
          </p>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-12 gap-12 items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="col-span-6">
                      <Image
                        src={program.programImage || 'https://static.wixstatic.com/media/dcf233_d5f65bd7fdee4f93a37f2bd0e29b1266~mv2.png?originWidth=576&originHeight=384'}
                        alt={program.programTitle || 'Program image'}
                        width={600}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="col-span-6">
                      {program.programCategory && (
                        <p className="font-paragraph text-sm text-primary uppercase tracking-wider mb-2">
                          {program.programCategory}
                        </p>
                      )}
                      <h2 className="font-heading text-4xl text-foreground mb-4">
                        {program.programTitle}
                      </h2>
                      <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                        {program.programDescription}
                      </p>
                      {program.callToActionLink && (
                        <Link to={`/programs/${program._id}`}>
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph">
                            Learn More
                          </Button>
                        </Link>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-6">
                      {program.programCategory && (
                        <p className="font-paragraph text-sm text-primary uppercase tracking-wider mb-2">
                          {program.programCategory}
                        </p>
                      )}
                      <h2 className="font-heading text-4xl text-foreground mb-4">
                        {program.programTitle}
                      </h2>
                      <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                        {program.programDescription}
                      </p>
                      {program.callToActionLink && (
                        <Link to={`/programs/${program._id}`}>
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph">
                            Learn More
                          </Button>
                        </Link>
                      )}
                    </div>
                    <div className="col-span-6">
                      <Image
                        src={program.programImage || 'https://static.wixstatic.com/media/dcf233_bff9a5b09ab243318608d7bf078307f9~mv2.png?originWidth=576&originHeight=384'}
                        alt={program.programTitle || 'Program image'}
                        width={600}
                        className="w-full rounded-lg"
                      />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Static Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 grid grid-cols-12 gap-12"
          >
            <div className="col-span-6">
              <div className="bg-background border border-light-grey rounded-lg p-8">
                <h2 className="font-heading text-3xl text-foreground mb-4">
                  Get Help
                </h2>
                <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                  If your family is facing a pediatric cancer diagnosis, we're here to help. 
                  Our support services provide guidance, resources, and compassionate assistance 
                  during this challenging time.
                </p>
                <Link to="/programs/get-help">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph">
                    Access Support
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="col-span-6">
              <div className="bg-background border border-light-grey rounded-lg p-8">
                <h2 className="font-heading text-3xl text-foreground mb-4">
                  Get Involved
                </h2>
                <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                  Join our community of dedicated volunteers making a difference in the lives 
                  of children and families affected by pediatric cancer. Your time and talents 
                  can create meaningful change.
                </p>
                <Link to="/programs/get-involved">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph">
                    Volunteer Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center bg-background border border-light-grey rounded-lg p-12"
          >
            <h2 className="font-heading text-4xl text-foreground mb-4">
              Other Programs Coming Soon
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-2xl mx-auto">
              We are continuously developing new programs to expand our impact and better 
              serve families affected by pediatric cancer. Stay tuned for exciting announcements!
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
