"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function StickyBookingBar() {
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasWhatsApp = Boolean(siteConfig.contact.whatsapp);

  const whatsappHref = hasWhatsApp
    ? `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        siteConfig.booking.whatsappMessage
      )}`
    : siteConfig.social.instagram;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-deep/95 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3">
        {hasPhone ? (
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex flex-col items-center gap-1 py-3 text-cream/80 transition active:bg-white/5"
          >
            <Phone size={18} />
            <span className="text-[10px] tracking-wide">Call</span>
          </a>
        ) : (
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-3 text-cream/80 transition active:bg-white/5"
          >
            <Phone size={18} />
            <span className="text-[10px] tracking-wide">Contact</span>
          </a>
        )}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-white/10 py-3 text-gold transition active:bg-white/5"
        >
          <MessageCircle size={18} />
          <span className="text-[10px] tracking-wide">WhatsApp</span>
        </a>
        <a
          href="#booking"
          className="flex flex-col items-center gap-1 py-3 text-cream/80 transition active:bg-white/5"
        >
          <Calendar size={18} />
          <span className="text-[10px] tracking-wide">Book Now</span>
        </a>
      </div>
    </div>
  );
}
