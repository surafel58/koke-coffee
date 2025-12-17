"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Coffee, Leaf, Cake } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, Product } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { toast } from "sonner";

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "coffee", label: "Coffee", icon: Coffee },
  { id: "tea", label: "Tea & Others", icon: Leaf },
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
    <div className="bg-[#1A1A1A] min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80"
            alt="Coffee beans"
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
              Our Selection
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5E6D3] mt-3 mb-4">
              The Menu
            </h1>
            <p className="text-[#F5E6D3]/70 text-lg max-w-2xl mx-auto">
              Premium Ethiopian coffee and carefully curated pastries, crafted with love
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-[#1A1A1A]/95 backdrop-blur-md py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-[#faba21] text-[#1A1A1A]"
                    : "bg-[#1f1510] text-[#F5E6D3]/70 hover:text-[#faba21] hover:bg-[#1f1510]/80"
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
                  className="group rounded-xl overflow-hidden bg-[#1f1510]/50 hover:bg-[#1f1510]/70 transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60" />
                    <Badge className="absolute top-4 left-4" variant="dark">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-[#F5E6D3] group-hover:text-[#faba21] transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-[#faba21] font-bold text-lg whitespace-nowrap">
                        {product.price} ETB
                      </span>
                    </div>
                    <p className="text-[#F5E6D3]/60 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full group/btn"
                    >
                      <Plus className="w-4 h-4 mr-2 group-hover/btn:rotate-90 transition-transform" />
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
