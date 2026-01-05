import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { BaseCrudService } from '@/integrations';
import { Programs } from '@/entities';
import { ArrowLeft } from 'lucide-react';

export default function ProgramDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [program, setProgram] = useState<Programs | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    loadProgram();
  }, [id]);

  const loadProgram = async () => {
    try {
      setLoading(true);
      const data = await BaseCrudService.getById<Programs>('programs', id!);
      if (data) {
        setProgram(data);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error loading program:', error);
      setNotFound(true);
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

  if (notFound || !program) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-[100rem] mx-auto px-8 py-24 text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Program Not Found</h1>
          <Link to="/programs">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph">
              Back to Programs
            </Button>
          </Link>
        </div>
        <Footer />
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
          <Link to="/programs" className="inline-flex items-center gap-2 font-paragraph text-base text-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Programs
          </Link>

          <div className="grid grid-cols-12 gap-12 mb-12">
            <div className="col-span-6">
              <Image
                src={program.programImage || 'https://static.wixstatic.com/media/dcf233_9b461face2a8455babcdae723fccff4e~mv2.png?originWidth=576&originHeight=448'}
                alt={program.programTitle || 'Program image'}
                width={600}
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="col-span-6 flex flex-col justify-center">
              {program.programCategory && (
                <p className="font-paragraph text-sm text-primary uppercase tracking-wider mb-2">
                  {program.programCategory}
                </p>
              )}
              <h1 className="font-heading text-5xl text-foreground mb-6">
                {program.programTitle}
              </h1>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                {program.programDescription}
              </p>
            </div>
          </div>

          {program.callToActionLink && (
            <div className="text-center mt-12">
              <a href={program.callToActionLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph px-12 py-6 text-lg">
                  Take Action
                </Button>
              </a>
            </div>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
