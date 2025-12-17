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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-[#1A1A1A] min-h-screen">
      {/* Hero */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#faba21] uppercase tracking-wider text-sm">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5E6D3] mt-3 mb-4">
              Contact Us
            </h1>
            <p className="text-[#F5E6D3]/70 text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Visit us or send us a message.
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
                  <h2 className="text-2xl font-bold text-[#F5E6D3] mb-6">
                    Visit Our Coffee Shop
                  </h2>
                  <p className="text-[#F5E6D3]/70 mb-8">
                    Experience the warmth of Ethiopian hospitality and the finest coffee
                    in our art-filled space.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1f1510]/50">
                    <div className="w-12 h-12 rounded-full bg-[#faba21]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#faba21]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#F5E6D3] text-lg mb-1">Location</h3>
                      <p className="text-[#F5E6D3]/60">{siteConfig.location}</p>
                      <p className="text-[#faba21] font-medium">{siteConfig.locationAmharic}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1f1510]/50">
                    <div className="w-12 h-12 rounded-full bg-[#faba21]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#faba21]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#F5E6D3] text-lg mb-1">Phone</h3>
                      <p className="text-[#F5E6D3]/60">{siteConfig.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1f1510]/50">
                    <div className="w-12 h-12 rounded-full bg-[#faba21]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#faba21]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#F5E6D3] text-lg mb-1">Email</h3>
                      <p className="text-[#F5E6D3]/60">{siteConfig.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1f1510]/50">
                    <div className="w-12 h-12 rounded-full bg-[#faba21]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#faba21]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#F5E6D3] text-lg mb-1">Hours</h3>
                      <p className="text-[#F5E6D3]/60">
                        Mon - Fri: {siteConfig.hours.weekdays}
                      </p>
                      <p className="text-[#F5E6D3]/60">
                        Sat - Sun: {siteConfig.hours.weekends}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="pt-4">
                  <h3 className="font-semibold text-[#F5E6D3] mb-4">Follow Us</h3>
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#faba21] text-[#1A1A1A] hover:bg-[#d79a1b] transition-colors"
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
              <div className="p-8 rounded-2xl bg-[#1f1510]/50">
                <h2 className="text-2xl font-bold text-[#F5E6D3] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#F5E6D3]/80 mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        required
                        className="bg-[#1A1A1A] border-[#faba21]/30 text-[#F5E6D3] placeholder:text-[#F5E6D3]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#F5E6D3]/80 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-[#1A1A1A] border-[#faba21]/30 text-[#F5E6D3] placeholder:text-[#F5E6D3]/40"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#F5E6D3]/80 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      placeholder="How can we help?"
                      required
                      className="bg-[#1A1A1A] border-[#faba21]/30 text-[#F5E6D3] placeholder:text-[#F5E6D3]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#F5E6D3]/80 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message..."
                      required
                      rows={5}
                      className="bg-[#1A1A1A] border-[#faba21]/30 text-[#F5E6D3] placeholder:text-[#F5E6D3]/40"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
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
            <div className="rounded-2xl overflow-hidden border border-[#faba21]/20 h-[400px] bg-[#1f1510]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.1411996950706!2d38.7059543109045!3d8.959134291062318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b81003e38fb69%3A0xeb06370177179540!2sJemo%201!5e0!3m2!1sen!2sus!4v1765993651785!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, height: "100%" }}
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
