import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-light-grey mt-24">
      <div className="max-w-[100rem] mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <h3 className="font-heading text-2xl text-primary mb-4">
              Mason Atlas Foundation
            </h3>
            <p className="font-paragraph text-base text-foreground">
              Honoring a life, supporting a cause
            </p>
          </div>
          
          <div className="col-span-4">
            <h4 className="font-heading text-xl text-foreground mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/terms"
                className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                to="/privacy"
                className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          
          <div className="col-span-4">
            <h4 className="font-heading text-xl text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-light-grey text-center">
          <p className="font-paragraph text-sm text-secondary">
            © {new Date().getFullYear()} Mason Atlas Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
