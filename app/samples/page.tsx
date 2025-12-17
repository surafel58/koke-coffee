"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const samples = [
  {
    id: "a",
    name: "Dark Luxury",
    description: "Minimalist sophistication with refined gold accents",
    colors: {
      primary: "#1A1A1A",
      secondary: "#D4A853",
      accent: "#2C1810",
      text: "#F5E6D3",
    },
  },
  {
    id: "b",
    name: "Warm & Refined",
    description: "Elevated warmth honoring Ethiopian tradition",
    colors: {
      primary: "#F5E6D3",
      secondary: "#d79a1b",
      accent: "#5c4431",
      text: "#5c4431",
    },
  },
];

export default function SamplesPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex flex-col items-center justify-center px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#F5E6D3] mb-3 tracking-tight">
          Koke Coffee
        </h1>
        <p className="text-[#D4A853] text-lg">
          Select a design style
        </p>
      </motion.div>

      {/* Sample Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl w-full">
        {samples.map((sample, index) => (
          <motion.div
            key={sample.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <Link href={`/sample/${sample.id}`} className="block group">
              <div
                className="relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: sample.colors.primary }}
              >
                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: sample.colors.secondary }}
                />

                {/* Content */}
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: sample.colors.secondary }}
                    >
                      {sample.name}
                    </h3>
                    <ArrowRight
                      className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      style={{ color: sample.colors.secondary }}
                    />
                  </div>
                  <p
                    className="text-sm opacity-70"
                    style={{ color: sample.colors.text }}
                  >
                    {sample.description}
                  </p>
                </div>

                {/* Color swatches */}
                <div className="flex gap-2 mt-6">
                  <div
                    className="w-6 h-6 rounded-full border border-white/20"
                    style={{ backgroundColor: sample.colors.primary }}
                  />
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: sample.colors.secondary }}
                  />
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: sample.colors.accent }}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-[#F5E6D3]/40 text-sm mt-12"
      >
        Each includes Home, Menu, About, Contact & Order
      </motion.p>
    </div>
  );
}
