import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { BaseCrudService } from '@/integrations';
import { NewsArticles } from '@/entities';
import { format } from 'date-fns';

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticles[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);
  const limit = 9;

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async (currentSkip = 0) => {
    try {
      setLoading(true);
      const result = await BaseCrudService.getAll<NewsArticles>('newsarticles', {}, { limit, skip: currentSkip });
      if (currentSkip === 0) {
        setArticles(result.items);
      } else {
        setArticles(prev => [...prev, ...result.items]);
      }
      setHasNext(result.hasNext);
      setSkip(result.nextSkip || 0);
    } catch (error) {
      console.error('Error loading articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    loadArticles(skip);
  };

  if (loading && articles.length === 0) {
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
            News & Insights
          </h1>
          <p className="font-paragraph text-lg text-foreground text-center mb-16 max-w-3xl mx-auto">
            Stay informed about pediatric cancer research, advocacy, and stories of hope. 
            Read our latest articles and op-eds on the fight against childhood cancer.
          </p>

          <div className="grid grid-cols-12 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="col-span-4"
              >
                <Link to={`/news/${article._id}`} className="block group">
                  <div className="bg-background border border-light-grey rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    {article.featuredImage && (
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={article.featuredImage}
                          alt={article.title || 'Article image'}
                          width={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {article.publicationDate && (
                        <p className="font-paragraph text-sm text-secondary mb-2">
                          {format(new Date(article.publicationDate), 'MMMM d, yyyy')}
                        </p>
                      )}
                      <h2 className="font-heading text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      {article.summary && (
                        <p className="font-paragraph text-base text-foreground leading-relaxed mb-4 line-clamp-3">
                          {article.summary}
                        </p>
                      )}
                      {article.author && (
                        <p className="font-paragraph text-sm text-secondary">
                          By {article.author}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-foreground">
                No articles available at this time. Check back soon for updates.
              </p>
            </div>
          )}

          {hasNext && (
            <div className="text-center mt-12">
              <Button
                onClick={loadMore}
                disabled={loading}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph px-12 py-6"
              >
                {loading ? 'Loading...' : 'Load More Articles'}
              </Button>
            </div>
          )}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
