import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Contact Us
          </h1>
          <p className="font-paragraph text-lg text-foreground text-center mb-16 max-w-3xl mx-auto">
            Have questions or want to learn more about our work? We'd love to hear from you. 
            Reach out and we'll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7">
              {submitted ? (
                <div className="bg-background border border-primary rounded-lg p-12 text-center">
                  <h2 className="font-heading text-4xl text-primary mb-4">
                    Thank You!
                  </h2>
                  <p className="font-paragraph text-lg text-foreground mb-2">
                    Your message has been received.
                  </p>
                  <p className="font-paragraph text-base text-secondary">
                    We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-background border border-light-grey rounded-lg p-8">
                  <h2 className="font-heading text-3xl text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  <div className="mb-6">
                    <Label htmlFor="name" className="font-paragraph text-base text-foreground mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-paragraph"
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="email" className="font-paragraph text-base text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-paragraph"
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="phone" className="font-paragraph text-base text-foreground mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="font-paragraph"
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="subject" className="font-paragraph text-base text-foreground mb-2 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="font-paragraph"
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="message" className="font-paragraph text-base text-foreground mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="font-paragraph"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph py-6 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            <div className="col-span-5">
              <div className="bg-background border border-light-grey rounded-lg p-8 mb-6">
                <h3 className="font-heading text-2xl text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-paragraph text-base text-foreground font-medium mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@masonatlasfoundation.org"
                        className="font-paragraph text-base text-secondary hover:text-primary transition-colors"
                      >
                        info@masonatlasfoundation.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-paragraph text-base text-foreground font-medium mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="font-paragraph text-base text-secondary hover:text-primary transition-colors"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-paragraph text-base text-foreground font-medium mb-1">
                        Address
                      </p>
                      <p className="font-paragraph text-base text-secondary">
                        123 Hope Street<br />
                        Suite 100<br />
                        Anytown, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-light-grey rounded-lg p-8">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2">
                  <p className="font-paragraph text-base text-foreground">
                    <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                  </p>
                  <p className="font-paragraph text-base text-foreground">
                    <strong>Saturday - Sunday:</strong> Closed
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
