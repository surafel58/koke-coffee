"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Heart, Users, Award } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Motion";

const stats = [
  { icon: Coffee, value: "10,000+", label: "Cups Served Daily" },
  { icon: Users, value: "5,000+", label: "Happy Customers" },
  { icon: Award, value: "100%", label: "Ethiopian Beans" },
  { icon: Heart, value: "2+", label: "Years of Excellence" },
];

const values = [
  {
    title: "Intention",
    description:
      "Every element is deliberate—from bean selection to interior design. Nothing is accidental.",
  },
  {
    title: "Refinement",
    description:
      "We elevate the coffee experience through meticulous attention to craft and presentation.",
  },
  {
    title: "Presence",
    description:
      "Our space invites you to slow down. Coffee is not consumed here—it's experienced.",
  },
  {
    title: "Roots",
    description:
      "Ethiopian coffee tradition is our foundation. We honor it by reimagining it for today.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80"
            alt="Coffee shop interior"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#faba21] uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5E6D3] mt-3 mb-4">
              About Koke Coffee
            </h1>
            <p className="text-[#F5E6D3]/70 text-lg max-w-2xl mx-auto">
              Modern Afro-Minimalism. Timeless Ethiopian Tradition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/koke_coffee_interior.png"
                    alt="Koke Coffee interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-[#1A1A1A]">
                  <Image
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80"
                    alt="Ethiopian coffee beans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <span className="text-[#faba21] uppercase tracking-wider text-sm">
                Our Philosophy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6D3] mt-3 mb-6">
                Clean Luxury. Rooted in Tradition.
              </h2>
              <div className="space-y-4 text-[#F5E6D3]/70">
                <p>
                  Koke Coffee exists at the intersection of heritage and contemporary
                  design. We've created a sanctuary where the ancient Ethiopian coffee
                  ritual meets minimalist aesthetics.
                </p>
                <p>
                  Our Jemo-1 location features curated murals and intentional spaces—
                  not busy or rustic, but refined and purposeful. This is coffee
                  elevated to an experience.
                </p>
                <p>
                  Single-origin beans. Deliberate preparation. An atmosphere designed
                  for those who understand that the best things require presence.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-b from-[#1f1510]/50 to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#faba21]/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-[#faba21]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#faba21] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#F5E6D3]/60 text-sm">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <span className="text-[#faba21] uppercase tracking-wider text-sm">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6D3] mt-3">
              Our Values
            </h2>
          </FadeInView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-2xl bg-[#1f1510]/50 hover:bg-[#1f1510]/70 transition-colors">
                  <h3 className="text-xl font-semibold text-[#faba21] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#F5E6D3]/70">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Ethiopian Coffee Tradition */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80"
            alt="Coffee beans"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <span className="text-[#faba21] uppercase tracking-wider text-sm">
              The Tradition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6D3] mt-3 mb-6">
              Ethiopian Coffee Ceremony
            </h2>
            <p className="text-[#F5E6D3]/70 text-lg mb-8 max-w-2xl mx-auto">
              Experience the ancient ritual that has brought communities together for
              centuries. Our traditional jebena coffee ceremony honors the birthplace
              of coffee with every aromatic pour.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {["Roasting", "Grinding", "Brewing"].map((step, index) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#faba21] text-[#1A1A1A] flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <h4 className="text-[#F5E6D3] font-semibold">{step}</h4>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
