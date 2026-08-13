"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function BookingCTA() {
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasWhatsApp = Boolean(siteConfig.contact.whatsapp);

  const whatsappHref = hasWhatsApp
    ? `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        siteConfig.booking.whatsappMessage
      )}`
    : siteConfig.social.instagram;

  return (
    <section id="booking" className="bg-cream py-24 text-deep md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-[11px] tracking-[0.3em] uppercase text-gold">
            Begin Here
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium leading-tight tracking-wide md:text-5xl lg:text-6xl">
            Your Next Escape
            <br />
            Starts Here
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-deep/70">
            Reach out to reserve your stay, plan a celebration, or simply ask a
            question. We’re ready to welcome you.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-deep px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-cream transition hover:bg-forest sm:w-auto"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            {hasPhone ? (
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-deep/20 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-deep transition hover:bg-deep/5 sm:w-auto"
              >
                <Phone size={16} />
                Call Now
              </a>
            ) : (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-deep/20 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-deep transition hover:bg-deep/5 sm:w-auto"
              >
                Instagram DM
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
