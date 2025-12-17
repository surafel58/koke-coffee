"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/shared/Motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
              Quick & Easy
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F5E6D3] mb-4">
              Order Online
            </h1>
            <p className="text-[#F5E6D3]/80 text-lg max-w-2xl mx-auto">
              Pick your favorites and we'll have them ready for you
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <FadeInView>
              <h2 className="text-2xl font-bold text-[#5c4431] mb-6">
                Select Your Items
              </h2>
            </FadeInView>
            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {products.map((product) => (
                <StaggerItem key={product.id}>
                  <div className="flex gap-4 p-4 rounded-2xl bg-white hover:shadow-lg transition-shadow">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
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
                          <h3 className="font-semibold text-[#5c4431] text-sm truncate">
                            {product.name}
                          </h3>
                          <span className="inline-block px-2 py-0.5 bg-[#d79a1b]/20 text-[#5c4431] text-xs rounded-full mt-1">
                            {product.category}
                          </span>
                        </div>
                        <span className="text-[#d79a1b] font-bold text-sm whitespace-nowrap">
                          {product.price} ETB
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="mt-2 w-full bg-[#5c4431] text-[#F5E6D3] hover:bg-[#d79a1b] hover:text-[#5c4431]"
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
                <div className="p-6 rounded-3xl bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#d79a1b] flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-[#5c4431]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#5c4431]">Your Order</h2>
                  </div>

                  {items.length === 0 ? (
                    <p className="text-[#5c4431]/60 text-center py-8">
                      Your cart is empty
                    </p>
                  ) : (
                    <>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-3 pb-4 border-b border-[#5c4431]/10"
                          >
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-[#5c4431] truncate">
                                {item.name}
                              </h4>
                              <p className="text-[#d79a1b] text-sm font-medium">
                                {item.price} ETB
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-7 h-7 rounded-full bg-[#F5E6D3] text-[#5c4431] flex items-center justify-center hover:bg-[#d79a1b] transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-[#5c4431] w-6 text-center font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-7 h-7 rounded-full bg-[#F5E6D3] text-[#5c4431] flex items-center justify-center hover:bg-[#d79a1b] transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="w-7 h-7 rounded-full text-red-500 flex items-center justify-center hover:bg-red-50 transition-colors ml-1"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#5c4431]/10">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[#5c4431]/70">Total</span>
                          <span className="text-2xl font-bold text-[#d79a1b]">
                            {formatPrice(getTotalPrice())}
                          </span>
                        </div>

                        {!showCheckout ? (
                          <Button
                            size="lg"
                            className="w-full bg-[#d79a1b] text-[#5c4431] hover:bg-[#faba21]"
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
                              className="bg-[#F5E6D3]/50 border-[#5c4431]/20 text-[#5c4431]"
                            />
                            <Input
                              placeholder="Phone Number"
                              required
                              className="bg-[#F5E6D3]/50 border-[#5c4431]/20 text-[#5c4431]"
                            />
                            <Textarea
                              placeholder="Special instructions (optional)"
                              className="bg-[#F5E6D3]/50 border-[#5c4431]/20 text-[#5c4431]"
                              rows={2}
                            />
                            <Button
                              type="submit"
                              size="lg"
                              className="w-full bg-[#d79a1b] text-[#5c4431] hover:bg-[#faba21]"
                            >
                              Place Order
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              className="w-full text-[#5c4431]/60"
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
