"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Coffee, Leaf, Cake } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Motion";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { toast } from "sonner";

const categories = [
  { id: "all", label: "All Items", icon: null },
  { id: "coffee", label: "Coffee", icon: Coffee },
  { id: "tea", label: "Tea & More", icon: Leaf },
  { id: "pastry", label: "Pastries", icon: Cake },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const addItem = useCartStore((state) => state.addItem);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
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
              Our Selection
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5E6D3] mb-4">
              The Menu
            </h1>
            <p className="text-[#F5E6D3]/80 text-lg max-w-2xl mx-auto">
              Discover our premium Ethiopian coffee and delicious treats
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
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-[#d79a1b] text-[#5c4431] shadow-lg"
                    : "bg-[#F5E6D3] text-[#5c4431]/70 hover:text-[#5c4431] hover:bg-[#d79a1b]/20"
                }`}
              >
                {category.icon && <category.icon className="w-4 h-4" />}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer key={activeCategory} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <motion.div
                  layout
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#d79a1b] text-[#5c4431] text-xs font-medium rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-[#5c4431] group-hover:text-[#d79a1b] transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-[#d79a1b] font-bold text-lg whitespace-nowrap">
                        {product.price} ETB
                      </span>
                    </div>
                    <p className="text-[#5c4431]/60 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-[#5c4431] text-[#F5E6D3] hover:bg-[#d79a1b] hover:text-[#5c4431]"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Order
                    </Button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
