import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
    availability: '',
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
        interests: '',
        availability: '',
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
            Get Involved
          </h1>
          <p className="font-paragraph text-lg text-foreground text-center mb-16 max-w-3xl mx-auto">
            Join our community of dedicated volunteers making a difference in the lives of children 
            and families affected by pediatric cancer. Your time and talents can create meaningful change.
          </p>

          <div className="grid grid-cols-12 gap-12 mb-16">
            <div className="col-span-6">
              <h2 className="font-heading text-4xl text-foreground mb-6">
                Volunteer Opportunities
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Event Support:</strong> Help organize and run 
                  fundraising events and awareness campaigns.
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Family Assistance:</strong> Provide direct support 
                  to families through meal preparation, transportation, or companionship.
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Administrative Support:</strong> Assist with office 
                  tasks, data entry, and communications.
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Fundraising:</strong> Help develop and implement 
                  fundraising strategies and campaigns.
                </li>
                <li className="font-paragraph text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Advocacy:</strong> Raise awareness about pediatric 
                  cancer in your community.
                </li>
              </ul>
            </div>
            
            <div className="col-span-6">
              <div className="bg-background border border-light-grey rounded-lg p-8">
                <h2 className="font-heading text-3xl text-foreground mb-6">
                  Volunteer Registration
                </h2>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <p className="font-paragraph text-lg text-primary mb-4">
                      Thank you for your interest in volunteering!
                    </p>
                    <p className="font-paragraph text-base text-foreground">
                      We'll be in touch soon with more information.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
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
                    
                    <div>
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
                    
                    <div>
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
                    
                    <div>
                      <Label htmlFor="interests" className="font-paragraph text-base text-foreground mb-2 block">
                        Areas of Interest *
                      </Label>
                      <Input
                        id="interests"
                        name="interests"
                        type="text"
                        value={formData.interests}
                        onChange={handleChange}
                        placeholder="e.g., Event Support, Family Assistance"
                        required
                        className="font-paragraph"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="availability" className="font-paragraph text-base text-foreground mb-2 block">
                        Availability
                      </Label>
                      <Input
                        id="availability"
                        name="availability"
                        type="text"
                        value={formData.availability}
                        onChange={handleChange}
                        placeholder="e.g., Weekends, Evenings"
                        className="font-paragraph"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="font-paragraph text-base text-foreground mb-2 block">
                        Tell Us About Yourself
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="font-paragraph"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph"
                    >
                      Submit Application
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
