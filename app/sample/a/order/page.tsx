"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { products, Product } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";

export default function OrderPage() {
  const { items, addItem, removeItem, updateQuantity, clearCart, getTotalPrice } =
    useCartStore();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed successfully! We'll contact you shortly.");
    clearCart();
    setShowCheckout(false);
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
              Quick & Easy
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5E6D3] mt-3 mb-4">
              Order Online
            </h1>
            <p className="text-[#F5E6D3]/70 text-lg max-w-2xl mx-auto">
              Select your favorites and we'll have them ready for pickup
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <FadeInView>
              <h2 className="text-2xl font-bold text-[#F5E6D3] mb-6">
                Select Items
              </h2>
            </FadeInView>
            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {products.map((product) => (
                <StaggerItem key={product.id}>
                  <div className="flex gap-4 p-4 rounded-xl bg-[#1f1510]/50 hover:bg-[#1f1510]/70 transition-colors">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-[#F5E6D3] text-sm truncate">
                            {product.name}
                          </h3>
                          <span className="inline-block mt-1 px-2 py-0.5 bg-[#faba21]/20 text-[#faba21] text-xs rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <span className="text-[#faba21] font-bold text-sm whitespace-nowrap">
                          {product.price} ETB
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="mt-2 w-full"
                        onClick={() => handleAddToCart(product)}
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <FadeInView>
                <div className="p-6 rounded-2xl bg-[#1f1510]/50">
                  <div className="flex items-center gap-3 mb-6">
                    <ShoppingBag className="w-6 h-6 text-[#faba21]" />
                    <h2 className="text-xl font-bold text-[#F5E6D3]">Your Order</h2>
                  </div>

                  {items.length === 0 ? (
                    <p className="text-[#F5E6D3]/60 text-center py-8">
                      Your cart is empty
                    </p>
                  ) : (
                    <>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-3 pb-4 border-b border-[#faba21]/10"
                          >
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-[#F5E6D3] truncate">
                                {item.name}
                              </h4>
                              <p className="text-[#faba21] text-sm">
                                {item.price} ETB
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-7 h-7 rounded-full bg-[#1A1A1A] text-[#F5E6D3] flex items-center justify-center hover:bg-[#faba21] hover:text-[#1A1A1A] transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-[#F5E6D3] w-6 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-7 h-7 rounded-full bg-[#1A1A1A] text-[#F5E6D3] flex items-center justify-center hover:bg-[#faba21] hover:text-[#1A1A1A] transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="w-7 h-7 rounded-full text-red-400 flex items-center justify-center hover:bg-red-400/10 transition-colors ml-1"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#faba21]/20">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[#F5E6D3]/70">Total</span>
                          <span className="text-2xl font-bold text-[#faba21]">
                            {formatPrice(getTotalPrice())}
                          </span>
                        </div>

                        {!showCheckout ? (
                          <Button
                            size="lg"
                            className="w-full"
                            onClick={() => setShowCheckout(true)}
                          >
                            Proceed to Checkout
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        ) : (
                          <form onSubmit={handleCheckout} className="space-y-4">
                            <Input
                              placeholder="Your Name"
                              required
                              className="bg-[#1A1A1A] border-[#faba21]/30 text-[#F5E6D3]"
                            />
                            <Input
                              placeholder="Phone Number"
                              required
                              className="bg-[#1A1A1A] border-[#faba21]/30 text-[#F5E6D3]"
                            />
                            <Textarea
                              placeholder="Special instructions (optional)"
                              className="bg-[#1A1A1A] border-[#faba21]/30 text-[#F5E6D3]"
                              rows={2}
                            />
                            <Button type="submit" size="lg" className="w-full">
                              Place Order
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              className="w-full text-[#F5E6D3]/60"
                              onClick={() => setShowCheckout(false)}
                            >
                              Back
                            </Button>
                          </form>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
