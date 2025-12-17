"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Leaf, Heart } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Motion";
import { Button } from "@/components/ui/button";
import { products, siteConfig } from "@/lib/data";

const featuredProducts = products.slice(0, 4);

const features = [
  {
    icon: Coffee,
    title: "Single-Origin Excellence",
    description: "Premium beans from Ethiopia's finest highland regions",
  },
  {
    icon: Leaf,
    title: "The Ceremony Reimagined",
    description: "Ancient rituals refined for the modern connoisseur",
  },
  {
    icon: Heart,
    title: "Designed Experience",
    description: "Where minimalist aesthetics meet rich tradition",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/koke_coffee_interior.png"
            alt="Koke Coffee Interior"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#faba21] uppercase tracking-[0.3em] text-sm mb-6">
              Welcome to
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5E6D3] mb-6 tracking-tight">
              KOKE <span className="text-[#faba21]">COFFEE</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F5E6D3]/70 max-w-2xl mx-auto mb-10">
              {siteConfig.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sample/a/menu">
                <Button size="xl" className="group">
                  Explore Menu
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/sample/a/order">
                <Button size="xl" variant="outline">
                  Order Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#faba21]/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#faba21] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-[#1A1A1A] to-[#1f1510]">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <span className="text-[#faba21] uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6D3] mt-3">
              The Koke Experience
            </h2>
          </FadeInView>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="text-center p-8 rounded-2xl bg-[#1A1A1A]/50 hover:bg-[#1f1510]/50 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#faba21]/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-[#faba21]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F5E6D3] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#F5E6D3]/60">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <span className="text-[#faba21] uppercase tracking-wider text-sm">
              Our Selection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6D3] mt-3">
              Featured Menu
            </h2>
          </FadeInView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <Link href={`/sample/a/menu`}>
                  <div className="group rounded-xl overflow-hidden bg-[#1f1510]/50 hover:bg-[#1f1510]/70 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[#F5E6D3] group-hover:text-[#faba21] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[#faba21] font-bold mt-1">
                        {product.price} ETB
                      </p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInView className="text-center mt-12">
            <Link href="/sample/a/menu">
              <Button variant="outline" size="lg">
                View Full Menu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80"
            alt="Coffee beans"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-5xl font-bold text-[#F5E6D3] mb-6">
              Visit Us Today
            </h2>
            <p className="text-xl text-[#F5E6D3]/70 mb-8">
              Experience the art of Ethiopian coffee in our stunning minimalist space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sample/a/contact">
                <Button size="lg">Find Our Location</Button>
              </Link>
              <Link href="/sample/a/about">
                <Button size="lg" variant="outline">
                  Our Story
                </Button>
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
