import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-background border-b border-light-grey"
    >
      <div className="max-w-[100rem] mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="font-heading text-3xl text-primary">
            Mason Atlas Foundation
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/mission"
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              Our Mission
            </Link>
            <Link
              to="/programs"
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              Our Programs
            </Link>
            <Link
              to="/progress"
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              Our Progress
            </Link>
            <Link
              to="/news"
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              News
            </Link>
            <Link
              to="/donate"
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              Donate
            </Link>
            <Link
              to="/contact"
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
