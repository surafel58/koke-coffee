"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Coffee, Sparkles } from "lucide-react";

const samples = [
  {
    id: "a",
    name: "Dark Luxury",
    description:
      "Gallery-style, sophisticated design with deep black backgrounds and rich gold accents. Perfect for a premium, art-focused coffee experience.",
    colors: {
      primary: "#1A1A1A",
      secondary: "#D4A853",
      text: "#F5E6D3",
    },
    features: ["Elegant serif typography", "Gallery-like atmosphere", "High-end feel"],
  },
  {
    id: "b",
    name: "Warm & Earthy",
    description:
      "Cozy, inviting design with warm amber and cream tones. Captures the traditional Ethiopian coffee house atmosphere.",
    colors: {
      primary: "#E8A54B",
      secondary: "#5C4033",
      text: "#1A1A1A",
    },
    features: ["Friendly typography", "Welcoming atmosphere", "Rustic-modern feel"],
  },
];

export default function SamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#2C1810]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-16 pb-8 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Coffee className="w-10 h-10 text-[#D4A853]" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5E6D3]">
            Koke Coffee
          </h1>
        </div>
        <p className="text-[#D4A853] text-lg max-w-xl mx-auto px-4">
          Where African Heritage Meets Coffee Excellence
        </p>
      </motion.header>

      {/* Sample Selection */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F5E6D3] mb-3">
            Choose Your Design Sample
          </h2>
          <p className="text-[#F5E6D3]/70 text-lg">
            Select a design style to preview the full website experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {samples.map((sample, index) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            >
              <Link href={`/sample/${sample.id}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl border border-[#D4A853]/30 bg-[#1A1A1A]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#D4A853] hover:shadow-[0_0_30px_rgba(212,168,83,0.2)]">
                  {/* Color Preview */}
                  <div
                    className="h-48 relative"
                    style={{ backgroundColor: sample.colors.primary }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div
                          className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center"
                          style={{ backgroundColor: sample.colors.secondary }}
                        >
                          <Sparkles
                            className="w-8 h-8"
                            style={{ color: sample.colors.text }}
                          />
                        </div>
                        <span
                          className="text-2xl font-bold"
                          style={{ color: sample.colors.secondary }}
                        >
                          Sample {sample.id.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#D4A853] mb-2 group-hover:text-[#E8A54B] transition-colors">
                      {sample.name}
                    </h3>
                    <p className="text-[#F5E6D3]/80 text-base mb-4">
                      {sample.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {sample.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-sm px-3 py-1.5 rounded-full bg-[#D4A853]/10 text-[#D4A853] border border-[#D4A853]/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-base text-[#F5E6D3]/50">
                        Click to preview
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#D4A853] flex items-center justify-center group-hover:bg-[#E8A54B] transition-colors">
                        <svg
                          className="w-5 h-5 text-[#1A1A1A] transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center text-[#F5E6D3]/50 text-base mt-12"
        >
          Each sample includes: Home, Menu, About, Contact, Gallery & Order Online pages
        </motion.p>
      </div>
    </div>
  );
}
