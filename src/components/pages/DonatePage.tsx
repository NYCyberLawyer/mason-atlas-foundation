import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function DonatePage() {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = ['25', '50', '100', '250', '500'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setAmount('');
      setCustomAmount('');
      setDonationType('one-time');
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const selectedAmount = customAmount || amount;

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
            Make a Donation
          </h1>
          <p className="font-paragraph text-lg text-foreground text-center mb-16 max-w-3xl mx-auto">
            Your generous contribution helps us support families, fund critical research, 
            and honor Mason's legacy. Every donation makes a meaningful difference.
          </p>

          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-7">
              {submitted ? (
                <div className="bg-background border border-primary rounded-lg p-12 text-center">
                  <h2 className="font-heading text-4xl text-primary mb-4">
                    Thank You!
                  </h2>
                  <p className="font-paragraph text-lg text-foreground mb-2">
                    Your generous donation of ${selectedAmount} has been received.
                  </p>
                  <p className="font-paragraph text-base text-secondary">
                    You will receive a confirmation email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-background border border-light-grey rounded-lg p-8">
                  <h2 className="font-heading text-3xl text-foreground mb-6">
                    Donation Details
                  </h2>

                  <div className="mb-8">
                    <Label className="font-paragraph text-base text-foreground mb-4 block">
                      Donation Type
                    </Label>
                    <RadioGroup value={donationType} onValueChange={setDonationType}>
                      <div className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="font-paragraph text-base text-foreground cursor-pointer">
                          One-time Donation
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="font-paragraph text-base text-foreground cursor-pointer">
                          Monthly Donation
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mb-6">
                    <Label className="font-paragraph text-base text-foreground mb-4 block">
                      Select Amount
                    </Label>
                    <div className="grid grid-cols-5 gap-3 mb-4">
                      {presetAmounts.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => {
                            setAmount(preset);
                            setCustomAmount('');
                          }}
                          className={`py-3 px-4 rounded-lg border font-paragraph text-base transition-colors ${
                            amount === preset && !customAmount
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'bg-background text-foreground border-light-grey hover:border-primary'
                          }`}
                        >
                          ${preset}
                        </button>
                      ))}
                    </div>
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount('');
                      }}
                      min="1"
                      className="font-paragraph"
                    />
                  </div>

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
                    <Label htmlFor="message" className="font-paragraph text-base text-foreground mb-2 block">
                      Message (Optional)
                    </Label>
                    <Input
                      id="message"
                      name="message"
                      type="text"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="In memory of..."
                      className="font-paragraph"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!selectedAmount || !formData.name || !formData.email}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph py-6 text-lg"
                  >
                    Donate ${selectedAmount || '0'}
                  </Button>
                </form>
              )}
            </div>

            <div className="col-span-5">
              <div className="bg-background border border-light-grey rounded-lg p-8 mb-6">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Your Impact
                </h3>
                <ul className="space-y-4">
                  <li className="font-paragraph text-base text-foreground leading-relaxed">
                    <strong className="text-primary">$25</strong> provides comfort items for a child in treatment
                  </li>
                  <li className="font-paragraph text-base text-foreground leading-relaxed">
                    <strong className="text-primary">$50</strong> covers transportation costs for a family
                  </li>
                  <li className="font-paragraph text-base text-foreground leading-relaxed">
                    <strong className="text-primary">$100</strong> funds one day of research
                  </li>
                  <li className="font-paragraph text-base text-foreground leading-relaxed">
                    <strong className="text-primary">$250</strong> provides emergency financial assistance
                  </li>
                  <li className="font-paragraph text-base text-foreground leading-relaxed">
                    <strong className="text-primary">$500</strong> supports a family for one month
                  </li>
                </ul>
              </div>

              <div className="bg-background border border-light-grey rounded-lg p-8">
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  Tax Deductible
                </h3>
                <p className="font-paragraph text-base text-foreground leading-relaxed">
                  The Mason Atlas Foundation is a registered 501(c)(3) nonprofit organization. 
                  Your donation is tax-deductible to the fullest extent allowed by law. 
                  You will receive a receipt for your records.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
