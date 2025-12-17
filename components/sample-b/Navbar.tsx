"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag, Coffee } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/sample/b", label: "Home" },
  { href: "/sample/b/menu", label: "Menu" },
  { href: "/sample/b/about", label: "About" },
  { href: "/sample/b/contact", label: "Contact" },
  { href: "/sample/b/order", label: "Order" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5E6D3]/95 backdrop-blur-md border-b border-[#5c4431]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/sample/b" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#d79a1b] flex items-center justify-center">
              <Coffee className="w-5 h-5 text-[#5c4431]" />
            </div>
            <span className="text-3xl font-semibold text-[#5c4431] tracking-wide font-serif">
              Koke <span className="text-[#d79a1b]">Coffee</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#5c4431]/80 hover:text-[#d79a1b] transition-colors text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/sample/b/order"
              className="relative p-2 text-[#5c4431] hover:text-[#d79a1b] transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#d79a1b] text-[#5c4431] text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#5c4431] hover:text-[#d79a1b] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F5E6D3] border-t border-[#5c4431]/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-[#5c4431]/80 hover:text-[#d79a1b] transition-colors text-lg font-medium border-b border-[#5c4431]/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
