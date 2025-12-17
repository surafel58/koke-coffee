"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Motion";
import { galleryImages } from "@/lib/data";

const categories = [
  { id: "all", label: "All" },
  { id: "interior", label: "Interior" },
  { id: "coffee", label: "Coffee" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
              Our Space
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5E6D3] mb-4">
              Gallery
            </h1>
            <p className="text-[#F5E6D3]/80 text-lg max-w-2xl mx-auto">
              Take a peek inside our warm, art-filled coffee haven
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[#5c4431]/10 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#d79a1b] text-[#5c4431] shadow-lg"
                    : "bg-[#F5E6D3] text-[#5c4431]/70 hover:text-[#5c4431] hover:bg-[#d79a1b]/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer key={activeCategory} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <StaggerItem key={image.id}>
                <motion.div
                  layout
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5c4431]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-[#d79a1b] text-[#5c4431] text-xs font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-[#F5E6D3] font-medium">{image.alt}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#5c4431]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-[#F5E6D3] hover:text-[#d79a1b] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 bg-[#d79a1b] text-[#5c4431] text-sm font-medium rounded-full mb-2">
                  {selectedImage.category}
                </span>
                <p className="text-[#F5E6D3] text-lg">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-[#d79a1b]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5c4431] mb-4">
              Come Experience It Yourself
            </h2>
            <p className="text-[#5c4431]/80 mb-6">
              Photos don't do it justice. Visit us and immerse yourself in our
              cozy atmosphere.
            </p>
            <a
              href={`https://www.tiktok.com/@kokecoffee1`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5c4431] text-[#F5E6D3] hover:bg-[#3D3D3D] transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              See More on TikTok
            </a>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
