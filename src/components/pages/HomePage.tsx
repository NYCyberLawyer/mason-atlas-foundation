// HPI 1.6-G
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Heart, Calendar, Users, Sparkles, ChevronRight, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

// --- Types & Interfaces ---

interface Program {
  title: string;
  description: string;
  link: string;
  action: string;
}

interface NewsItem {
  title: string;
  date: string;
  summary: string;
  category: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

// --- Static Data (Simulating CMS Content for New Sections) ---

const PROGRAMS: Program[] = [
  { 
    title: "Get Help", 
    description: "Navigating a diagnosis is overwhelming. We provide guidance, resources, and a compassionate hand to hold for families in need.", 
    link: "/get-help",
    action: "Find Support"
  },
  { 
    title: "Get Involved", 
    description: "Your time and heart can transform lives. Join our dedicated community of volunteers and advocates making a real difference.", 
    link: "/volunteer",
    action: "Volunteer"
  },
  { 
    title: "Future Initiatives", 
    description: "We are actively developing new therapeutic art and music programs to bring joy and expression to children in treatment.", 
    link: "/programs",
    action: "Learn More"
  }
];

const NEWS: NewsItem[] = [
  { 
    title: "The Urgent Need for Pediatric Research", 
    date: "October 24, 2023", 
    summary: "Why we must bridge the funding gap for childhood cancer research now.",
    category: "Op-Ed"
  },
  { 
    title: "A Garden of Hope: Annual Gala", 
    date: "September 15, 2023", 
    summary: "Celebrating the resilience of our families and the generosity of our donors.",
    category: "Events"
  },
  { 
    title: "Mason's Light: One Year Later", 
    date: "August 02, 2023", 
    summary: "Reflecting on the enduring impact of a beautiful life well-lived.",
    category: "Foundation News"
  }
];

const TIMELINE: TimelineEvent[] = [
  { year: "2021", title: "The Inspiration", description: "Mason's courageous battle inspires a movement of love and support." },
  { year: "2022", title: "Foundation Established", description: "Officially launching our mission to aid families and fund research." },
  { year: "2023", title: "First Grants Awarded", description: "Providing direct financial assistance to 50 families in need." },
  { year: "2024", title: "Expanding Horizons", description: "Launching nationwide support networks and research partnerships." }
];

// --- Utility Components ---

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Add a small delay via setTimeout if needed, or rely on CSS transition-delay
                setTimeout(() => {
                  element.classList.add('is-visible');
                }, delay);
                observer.unobserve(element); 
            }
        }, { threshold: 0.15 });

        observer.observe(element);
        return () => observer.disconnect();
    }, [delay]);

    return <div ref={ref} className={`${className || ''} animate-reveal`}>{children}</div>;
};

// --- Main Component ---

export default function HomePage() {
  // State from original code
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Scroll hooks for parallax
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  
  // Smooth spring for progress bar
  const scaleX = useSpring(useTransform(scrollY, [0, 5000], [0, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreedToTerms) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setAgreedToTerms(false);
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-clip selection:bg-soft-gold/30">
      <style>{`
        .animate-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .animate-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .rainbow-gradient-text {
          background: linear-gradient(90deg, #7B68EE, #BDB76B, #7B68EE);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 8s linear infinite;
        }
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      `}</style>
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-soft-gold to-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://static.wixstatic.com/media/dcf233_31671caffdcd41abb3563084171d4bfd~mv2.png?originWidth=1920&originHeight=1024"
            alt="Serene sky with subtle rainbow"
            width={1920}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-background" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[120rem] mx-auto px-8 text-center">
          <AnimatedElement>
            <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl text-foreground mb-6 tracking-tight">
              Mason Atlas <br />
              <span className="text-primary italic">Foundation</span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-soft-gold" />
              <p className="font-paragraph text-xl md:text-2xl text-foreground/80 tracking-wide uppercase">{"Honoring a Life, Supporting a Cause"}</p>
              <div className="h-[1px] w-12 bg-soft-gold" />
            </div>
          </AnimatedElement>

          <AnimatedElement delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Link to="/donate">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 py-8 text-lg font-paragraph transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20">
                  Donate Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-10 py-8 text-lg font-paragraph backdrop-blur-sm">
                  Our Story
                </Button>
              </Link>
            </div>
          </AnimatedElement>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-foreground/40"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-foreground/0 via-foreground/40 to-foreground/0" />
        </motion.div>
      </section>
      {/* --- MISSION SECTION --- */}
      <section className="relative py-32 w-full bg-background">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <AnimatedElement>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://static.wixstatic.com/media/dcf233_e64576d26f0744d6b2bbda1b643d819f~mv2.avif"
                    width={800}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    originWidth={417}
                    originHeight={485}
                    focalPointX={59.352517985611506}
                    focalPointY={45.97938144329897} />
                  <div className="absolute inset-0 border-[1px] border-white/20 m-4 rounded-xl pointer-events-none" />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-soft-gold/10 rounded-full blur-3xl -z-10" />
              </AnimatedElement>
            </div>

            <div className="lg:col-span-7 lg:pl-12">
              <AnimatedElement delay={200}>
                <span className="font-paragraph text-primary tracking-widest uppercase text-sm font-semibold mb-4 block">
                  Our Mission
                </span>
                <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-8 leading-[1.1]">
                  A Sanctuary of <span className="italic text-soft-gold">Hope</span> & <br />
                  Remembrance
                </h2>
                <div className="space-y-6 font-paragraph text-lg text-foreground/80 leading-relaxed">
                  <p>
                    The Mason Atlas Foundation was created in loving memory of Mason Atlas, 
                    a brave and beautiful child who touched countless lives during his battle 
                    with pediatric brain cancer. Mason's spirit, symbolized by butterflies and 
                    rainbows, continues to inspire hope and transformation.
                  </p>
                  <p>
                    Our foundation is dedicated to supporting families affected by pediatric 
                    cancer, funding critical research, and creating a community of hope and healing. 
                    Through Mason's legacy, we strive to make a meaningful difference in the lives 
                    of children and families facing similar challenges.
                  </p>
                </div>
                
                <div className="mt-12 flex items-center gap-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/5 rounded-full text-primary">
                      <Heart className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-xl">Family Support</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-soft-gold/10 rounded-full text-soft-gold">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-xl">Research Funding</span>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
      {/* --- PROGRAMS SECTION --- */}
      <section className="py-32 w-full bg-white relative overflow-hidden">
        {/* Subtle Rainbow Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-soft-gold/40 to-primary/20" />
        
        <div className="max-w-[100rem] mx-auto px-8 relative z-10">
          <AnimatedElement>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-heading text-5xl text-foreground mb-6">Our Programs</h2>
              <p className="font-paragraph text-xl text-secondary">
                Building a future where every child has the chance to thrive, and every family has a place to turn.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((program, index) => (
              <AnimatedElement key={index} delay={index * 150}>
                <Link to={program.link} className="group block h-full">
                  <div className="h-full p-10 bg-background rounded-xl border border-transparent hover:border-soft-gold/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col">
                    <div className="mb-6 p-4 bg-primary/5 w-fit rounded-full group-hover:bg-primary/10 transition-colors">
                      {index === 0 ? <Users className="w-8 h-8 text-primary" /> : 
                       index === 1 ? <Heart className="w-8 h-8 text-primary" /> : 
                       <Sparkles className="w-8 h-8 text-primary" />}
                    </div>
                    <h3 className="font-heading text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="font-paragraph text-foreground/70 mb-8 flex-grow leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex items-center text-primary font-medium tracking-wide uppercase text-sm group-hover:gap-2 transition-all">
                      {program.action} <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
      {/* --- IMPACT TIMELINE SECTION --- */}
      <section className="py-32 w-full bg-background relative">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sticky Header */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <AnimatedElement>
                  <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-8">
                    Our Progress <br />
                    <span className="text-soft-gold">& Impact</span>
                  </h2>
                  <p className="font-paragraph text-lg text-foreground/70 mb-8">
                    From a single spark of hope to a growing movement. Witness the milestones of our journey together.
                  </p>
                  <Link to="/impact">
                    <Button variant="outline" className="rounded-full px-8 border-foreground/20 hover:bg-foreground/5">
                      View Full Report
                    </Button>
                  </Link>
                </AnimatedElement>
              </div>
            </div>

            {/* Timeline Content */}
            <div className="lg:col-span-8 relative">
              <div className="absolute left-0 top-4 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-soft-gold/50 to-transparent hidden md:block" />
              
              <div className="space-y-16">
                {TIMELINE.map((event, index) => (
                  <AnimatedElement key={index} delay={index * 100}>
                    <div className="relative md:pl-12 group">
                      {/* Timeline Dot */}
                      <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-background border-2 border-primary hidden md:block group-hover:scale-150 group-hover:bg-primary transition-all duration-300" />
                      
                      <div className="flex flex-col md:flex-row gap-6 items-baseline">
                        <span className="font-heading text-4xl text-primary/40 group-hover:text-primary transition-colors duration-300">
                          {event.year}
                        </span>
                        <div>
                          <h3 className="font-heading text-3xl text-foreground mb-3">
                            {event.title}
                          </h3>
                          <p className="font-paragraph text-lg text-foreground/70">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- NEWS SECTION --- */}
      <section className="py-32 w-full bg-white">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <AnimatedElement>
              <h2 className="font-heading text-5xl text-foreground">Latest News</h2>
            </AnimatedElement>
            <AnimatedElement delay={100}>
              <Link to="/news" className="hidden md:flex items-center text-primary hover:text-primary/80 transition-colors font-paragraph text-lg">
                View All Articles <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {NEWS.map((item, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <article className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-6 aspect-[16/10]">
                    <Image
                      src="https://static.wixstatic.com/media/dcf233_a3f4286b5efd457e914f0964f5474c4e~mv2.png?originWidth=576&originHeight=320"
                      alt={item.title}
                      width={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold tracking-wider uppercase text-soft-gold">
                      {item.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-secondary/40" />
                    <span className="text-xs text-secondary font-paragraph">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-foreground/70 line-clamp-2">
                    {item.summary}
                  </p>
                </article>
              </AnimatedElement>
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
            <Link to="/news">
              <Button variant="ghost" className="text-primary">View All News</Button>
            </Link>
          </div>
        </div>
      </section>
      {/* --- NEWSLETTER & CTA SECTION --- */}
      <section className="py-32 w-full bg-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-gold/5 rounded-full blur-3xl" />

        <div className="max-w-[100rem] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Newsletter Form */}
            <AnimatedElement>
              <div className="glass-panel p-10 md:p-14 rounded-3xl shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="font-heading text-3xl text-foreground">Stay Connected</h2>
                </div>
                <p className="font-paragraph text-lg text-foreground/70 mb-8">
                  Join our mailing list to receive updates about our programs, events, and the impact of your support.
                </p>
                
                <form onSubmit={handleEmailSignup} className="space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full font-paragraph bg-white/50 border-foreground/10 focus:border-primary h-12"
                    />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      required
                      className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor="terms" className="font-paragraph text-sm text-foreground/70 leading-relaxed cursor-pointer">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:underline decoration-1 underline-offset-2">
                        Terms of Use
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary hover:underline decoration-1 underline-offset-2">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={!email || !agreedToTerms}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph h-12 text-lg transition-all"
                  >
                    {submitted ? 'Thank you for subscribing!' : 'Subscribe'}
                  </Button>
                </form>
              </div>
            </AnimatedElement>

            {/* Final CTA */}
            <AnimatedElement delay={200}>
              <div className="text-center lg:text-left">
                <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-8">
                  Make a Difference <br />
                  <span className="rainbow-gradient-text">Today</span>
                </h2>
                <p className="font-paragraph text-xl text-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Your generous donation helps us support families, fund critical research, and honor Mason's legacy of love. Every contribution brings us closer to a cure.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Link to="/donate">
                    <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 py-8 text-xl font-paragraph shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                      Donate Now
                    </Button>
                  </Link>
                  <div className="flex items-center gap-4 justify-center">
                    <Image
                      src="https://static.wixstatic.com/media/dcf233_28aa3539b12d41379003ea05a1d792e5~mv2.png?originWidth=128&originHeight=128"
                      alt="QR Code"
                      width={80}
                      className="w-20 h-20 opacity-80 mix-blend-multiply"
                    />
                    <span className="font-paragraph text-sm text-foreground/60 max-w-[100px] text-left">
                      Scan to give instantly
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedElement>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}