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
    <div className="bg-[#F5E6D3]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/koke_coffee_interior.png"
            alt="Koke Coffee Interior"
            fill
            className="object-cover"
            priority
          />
          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5c4431]/40 via-transparent to-[#5c4431]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5c4431]/30 via-transparent to-[#5c4431]/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#5c4431]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12"
            >
              <span className="inline-block px-4 py-1 bg-[#d79a1b] text-[#5c4431] rounded-full text-sm font-medium mb-6">
                Welcome to Koke Coffee
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5E6D3] mb-6 leading-tight">
                The Art of{" "}
                <span className="text-[#d79a1b]">Ethiopian Coffee</span>
              </h1>
              <p className="text-xl text-[#F5E6D3]/80 mb-10">
                {siteConfig.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sample/b/menu">
                  <Button
                    size="xl"
                    className="bg-[#d79a1b] text-[#5c4431] hover:bg-[#faba21]"
                  >
                    View Our Menu
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/sample/b/order">
                  <Button
                    size="xl"
                    className="bg-transparent border-2 border-[#F5E6D3] text-[#F5E6D3] hover:bg-[#F5E6D3] hover:text-[#5c4431]"
                  >
                    Order Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <span className="text-[#d79a1b] font-medium">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5c4431] mt-2">
              The Koke Experience
            </h2>
          </FadeInView>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="text-center p-8 rounded-3xl bg-[#F5E6D3]/50 hover:bg-[#d79a1b]/10 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d79a1b] flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-[#5c4431]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#5c4431] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#5c4431]/70">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#F5E6D3]">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <span className="text-[#d79a1b] font-medium">Our Selection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5c4431] mt-2">
              Popular Favorites
            </h2>
          </FadeInView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <Link href="/sample/b/menu">
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-[#5c4431] group-hover:text-[#d79a1b] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[#d79a1b] font-bold mt-1">
                        {product.price} ETB
                      </p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInView className="text-center mt-12">
            <Link href="/sample/b/menu">
              <Button
                size="lg"
                className="bg-[#5c4431] text-[#F5E6D3] hover:bg-[#3D3D3D]"
              >
                View Full Menu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView className="order-2 lg:order-1">
              <span className="text-[#d79a1b] font-medium">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5c4431] mt-2 mb-6">
                Modern Afro-Minimalism
              </h2>
              <p className="text-[#5c4431]/70 mb-6 leading-relaxed">
                Koke Coffee is where centuries-old Ethiopian coffee tradition meets
                contemporary design. Our curated space features striking murals and
                clean lines—a sanctuary for those who appreciate refined simplicity.
              </p>
              <p className="text-[#5c4431]/70 mb-8 leading-relaxed">
                Every cup is a ritual. Single-origin beans from Ethiopia's highlands,
                prepared with intention, served in an atmosphere designed for presence.
              </p>
              <Link href="/sample/b/about">
                <Button className="bg-[#d79a1b] text-[#5c4431] hover:bg-[#faba21]">
                  Learn More About Us
                </Button>
              </Link>
            </FadeInView>

            <FadeInView delay={0.2} className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <Image
                    src="/koke_coffee_interior.png"
                    alt="Koke Coffee interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80"
                    alt="Ethiopian coffee beans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#d79a1b]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-5xl font-bold text-[#5c4431] mb-6">
              Ready for Your Coffee?
            </h2>
            <p className="text-xl text-[#5c4431]/80 mb-8">
              Order online and pick up at your convenience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sample/b/order">
                <Button
                  size="lg"
                  className="bg-[#5c4431] text-[#F5E6D3] hover:bg-[#3D3D3D]"
                >
                  Order Now
                </Button>
              </Link>
              <Link href="/sample/b/contact">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-[#5c4431] text-[#5c4431] hover:bg-[#5c4431] hover:text-[#F5E6D3]"
                >
                  Find Us
                </Button>
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
