import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { BaseCrudService } from '@/integrations';
import { NewsArticles } from '@/entities';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsArticles | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    loadArticle();
  }, [id]);

  const loadArticle = async () => {
    try {
      setLoading(true);
      const data = await BaseCrudService.getById<NewsArticles>('newsarticles', id!);
      if (data) {
        setArticle(data);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error loading article:', error);
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

  if (notFound || !article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-[100rem] mx-auto px-8 py-24 text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Article Not Found</h1>
          <Link to="/news">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph">
              Back to News
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
      
      <article className="max-w-[100rem] mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/news" className="inline-flex items-center gap-2 font-paragraph text-base text-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to News
          </Link>

          <div className="max-w-4xl mx-auto">
            {article.featuredImage && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <Image
                  src={article.featuredImage}
                  alt={article.title || 'Article image'}
                  width={800}
                  className="w-full"
                />
              </div>
            )}

            <div className="mb-6">
              {article.publicationDate && (
                <p className="font-paragraph text-sm text-secondary mb-2">
                  {format(new Date(article.publicationDate), 'MMMM d, yyyy')}
                </p>
              )}
              <h1 className="font-heading text-5xl text-foreground mb-4">
                {article.title}
              </h1>
              {article.author && (
                <p className="font-paragraph text-base text-secondary">
                  By {article.author}
                </p>
              )}
            </div>

            {article.summary && (
              <div className="bg-background border-l-4 border-primary pl-6 py-4 mb-8">
                <p className="font-paragraph text-lg text-foreground leading-relaxed italic">
                  {article.summary}
                </p>
              </div>
            )}

            {article.content && (
              <div className="prose prose-lg max-w-none">
                <p className="font-paragraph text-lg text-foreground leading-relaxed whitespace-pre-wrap">
                  {article.content}
                </p>
              </div>
            )}

            {article.sourceUrl && (
              <div className="mt-8 pt-8 border-t border-light-grey">
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-paragraph text-base text-primary hover:underline"
                >
                  Read Original Source →
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </article>

      <Footer />
    </div>
  );
}
