import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { BaseCrudService } from '@/integrations';
import { ImpactTimeline } from '@/entities';
import { format } from 'date-fns';

export default function ProgressPage() {
  const [timeline, setTimeline] = useState<ImpactTimeline[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTimeline();
  }, []);

  const loadTimeline = async () => {
    try {
      setLoading(true);
      const result = await BaseCrudService.getAll<ImpactTimeline>('impacttimeline');
      const sortedTimeline = result.items.sort((a, b) => {
        const dateA = a.eventDate ? new Date(a.eventDate).getTime() : 0;
        const dateB = b.eventDate ? new Date(b.eventDate).getTime() : 0;
        return dateB - dateA;
      });
      setTimeline(sortedTimeline);
    } catch (error) {
      console.error('Error loading timeline:', error);
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
            Our Progress & Impact
          </h1>
          <p className="font-paragraph text-lg text-foreground text-center mb-16 max-w-3xl mx-auto">
            Track the meaningful difference we're making in the fight against pediatric cancer. 
            Every milestone represents hope, healing, and progress toward our mission.
          </p>

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-12 gap-12 items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="col-span-5">
                      {item.milestoneImage && (
                        <Image
                          src={item.milestoneImage}
                          alt={item.milestoneTitle || 'Milestone image'}
                          width={500}
                          className="w-full rounded-lg"
                        />
                      )}
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <div className="relative">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        {index < timeline.length - 1 && (
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-light-grey"></div>
                        )}
                      </div>
                    </div>
                    <div className="col-span-5">
                      {item.eventDate && (
                        <p className="font-paragraph text-sm text-primary uppercase tracking-wider mb-2">
                          {format(new Date(item.eventDate), 'MMMM yyyy')}
                        </p>
                      )}
                      <h2 className="font-heading text-3xl text-foreground mb-4">
                        {item.milestoneTitle}
                      </h2>
                      {item.description && (
                        <p className="font-paragraph text-lg text-foreground leading-relaxed mb-4">
                          {item.description}
                        </p>
                      )}
                      {item.impactDetails && (
                        <p className="font-paragraph text-base text-secondary leading-relaxed">
                          {item.impactDetails}
                        </p>
                      )}
                      {item.callToActionUrl && (
                        <a
                          href={item.callToActionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 font-paragraph text-base text-primary hover:underline"
                        >
                          Learn More →
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-5">
                      {item.eventDate && (
                        <p className="font-paragraph text-sm text-primary uppercase tracking-wider mb-2">
                          {format(new Date(item.eventDate), 'MMMM yyyy')}
                        </p>
                      )}
                      <h2 className="font-heading text-3xl text-foreground mb-4">
                        {item.milestoneTitle}
                      </h2>
                      {item.description && (
                        <p className="font-paragraph text-lg text-foreground leading-relaxed mb-4">
                          {item.description}
                        </p>
                      )}
                      {item.impactDetails && (
                        <p className="font-paragraph text-base text-secondary leading-relaxed">
                          {item.impactDetails}
                        </p>
                      )}
                      {item.callToActionUrl && (
                        <a
                          href={item.callToActionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 font-paragraph text-base text-primary hover:underline"
                        >
                          Learn More →
                        </a>
                      )}
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <div className="relative">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        {index < timeline.length - 1 && (
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-light-grey"></div>
                        )}
                      </div>
                    </div>
                    <div className="col-span-5">
                      {item.milestoneImage && (
                        <Image
                          src={item.milestoneImage}
                          alt={item.milestoneTitle || 'Milestone image'}
                          width={500}
                          className="w-full rounded-lg"
                        />
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {timeline.length === 0 && (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-foreground">
                Timeline updates coming soon. Check back for our latest milestones and impact stories.
              </p>
            </div>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
