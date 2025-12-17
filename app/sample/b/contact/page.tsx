"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FadeInView } from "@/components/shared/Motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/data";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-[#F5E6D3] min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-[#5c4431]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-[#d79a1b] text-[#5c4431] rounded-full text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5E6D3] mb-4">
              Contact Us
            </h1>
            <p className="text-[#F5E6D3]/80 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Visit us or send a message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <FadeInView>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#5c4431] mb-6">
                    Visit Our Coffee Shop
                  </h2>
                  <p className="text-[#5c4431]/70 mb-8">
                    Step into our warm, art-filled space and experience the
                    best of Ethiopian coffee culture.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white">
                    <div className="w-12 h-12 rounded-full bg-[#d79a1b] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#5c4431]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#5c4431] text-lg mb-1">Location</h3>
                      <p className="text-[#5c4431]/70">{siteConfig.location}</p>
                      <p className="text-[#d79a1b] font-medium">{siteConfig.locationAmharic}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white">
                    <div className="w-12 h-12 rounded-full bg-[#d79a1b] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#5c4431]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#5c4431] text-lg mb-1">Phone</h3>
                      <p className="text-[#5c4431]/70">{siteConfig.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white">
                    <div className="w-12 h-12 rounded-full bg-[#d79a1b] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#5c4431]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#5c4431] text-lg mb-1">Email</h3>
                      <p className="text-[#5c4431]/70">{siteConfig.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white">
                    <div className="w-12 h-12 rounded-full bg-[#d79a1b] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#5c4431]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#5c4431] text-lg mb-1">Hours</h3>
                      <p className="text-[#5c4431]/70">
                        Mon - Fri: {siteConfig.hours.weekdays}
                      </p>
                      <p className="text-[#5c4431]/70">
                        Sat - Sun: {siteConfig.hours.weekends}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="pt-4">
                  <h3 className="font-semibold text-[#5c4431] mb-4">Follow Us</h3>
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5c4431] text-[#F5E6D3] hover:bg-[#d79a1b] hover:text-[#5c4431] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    @kokecoffee1
                  </a>
                </div>
              </div>
            </FadeInView>

            {/* Contact Form */}
            <FadeInView delay={0.2}>
              <div className="p-8 rounded-3xl bg-white shadow-sm">
                <h2 className="text-2xl font-bold text-[#5c4431] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#5c4431] mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        required
                        className="bg-[#F5E6D3]/50 border-[#5c4431]/20 text-[#5c4431]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#5c4431] mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-[#F5E6D3]/50 border-[#5c4431]/20 text-[#5c4431]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#5c4431] mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      placeholder="How can we help?"
                      required
                      className="bg-[#F5E6D3]/50 border-[#5c4431]/20 text-[#5c4431]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#5c4431] mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message..."
                      required
                      rows={5}
                      className="bg-[#F5E6D3]/50 border-[#5c4431]/20 text-[#5c4431]"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#d79a1b] text-[#5c4431] hover:bg-[#faba21]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInView>
            <div className="rounded-3xl overflow-hidden h-[400px] bg-white shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDM4wrA0MicwMC4wIkU!5e0!3m2!1sen!2set!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
