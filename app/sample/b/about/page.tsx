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
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5E6D3] mb-4">
              About Koke Coffee
            </h1>
            <p className="text-[#F5E6D3]/80 text-lg max-w-2xl mx-auto">
              Modern Afro-Minimalism. Timeless Ethiopian Tradition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <Image
                    src="/koke_coffee_interior.png"
                    alt="Koke Coffee interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
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
              <span className="text-[#d79a1b] font-medium">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5c4431] mt-2 mb-6">
                Clean Luxury. Rooted in Tradition.
              </h2>
              <div className="space-y-4 text-[#5c4431]/70">
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
      <section className="py-16 bg-[#d79a1b]">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#5c4431] flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-[#d79a1b]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#5c4431] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#5c4431]/70 text-sm">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F5E6D3]">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <span className="text-[#d79a1b] font-medium">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5c4431] mt-2">
              Our Values
            </h2>
          </FadeInView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-3xl bg-white hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-[#d79a1b] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#5c4431]/70">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Ethiopian Coffee Tradition */}
      <section className="py-24 bg-[#5c4431]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <span className="inline-block px-4 py-1 bg-[#d79a1b] text-[#5c4431] rounded-full text-sm font-medium mb-4">
              The Tradition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6D3] mb-6">
              Ethiopian Coffee Ceremony
            </h2>
            <p className="text-[#F5E6D3]/80 text-lg mb-12 max-w-2xl mx-auto">
              Experience the ancient ritual that has brought communities together for
              centuries. Our traditional jebena coffee ceremony honors the birthplace
              of coffee with every aromatic pour.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {["Roasting", "Grinding", "Brewing"].map((step, index) => (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d79a1b] text-[#5c4431] flex items-center justify-center font-bold text-2xl">
                    {index + 1}
                  </div>
                  <h4 className="text-[#F5E6D3] font-semibold text-lg">{step}</h4>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
