import Link from "next/link";
import { Coffee, MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/sample/a" className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-[#faba21]" />
              <span className="text-3xl font-semibold text-[#F5E6D3] tracking-widest font-serif">
                Koke
              </span>
            </Link>
            <p className="text-[#F5E6D3]/60 text-base leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#faba21] font-extrabold text-xl mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/sample/a/menu", label: "Our Menu" },
                { href: "/sample/a/about", label: "About Us" },
                { href: "/sample/a/gallery", label: "Gallery" },
                { href: "/sample/a/order", label: "Order Online" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F5E6D3]/60 hover:text-[#faba21] transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#faba21] font-extrabold text-xl mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#F5E6D3]/60 text-base">
                <MapPin className="w-5 h-5 text-[#faba21] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block">{siteConfig.location}</span>
                  <span className="block text-[#faba21]">{siteConfig.locationAmharic}</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-[#F5E6D3]/60 text-base">
                <Phone className="w-5 h-5 text-[#faba21] flex-shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-[#F5E6D3]/60 text-base">
                <Mail className="w-5 h-5 text-[#faba21] flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[#faba21] font-extrabold text-xl mb-5">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#F5E6D3]/60 text-base">
                <Clock className="w-5 h-5 text-[#faba21] mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: {siteConfig.hours.weekdays}</p>
                  <p>Sat - Sun: {siteConfig.hours.weekends}</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#faba21] hover:text-[#d79a1b] transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                Follow us on TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#F5E6D3]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F5E6D3]/40 text-base">
            © {new Date().getFullYear()} Koke Coffee. All rights reserved.
          </p>
          <Link
            href="/samples"
            className="text-[#faba21] hover:text-[#d79a1b] transition-colors text-base"
          >
            ← View Other Samples
          </Link>
        </div>
      </div>
    </footer>
  );
}
