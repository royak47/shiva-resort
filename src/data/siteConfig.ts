export const siteConfig = {
  name: "Shiva Resort UK18",
  shortName: "Shiva Resort",
  tagline: "An Experience Worth Remembering",
  description:
    "Shiva Resort & Restaurant in Jaspur, Uttarakhand — dine, relax and celebrate amidst nature. A premium escape for families, couples and celebrations.",
  location: {
    line1: "Jaspur - Kasampur Rd",
    line2: "Jaspur Patti Uttam, Uttarakhand",
    full: "Jaspur - Kasampur Rd, Jaspur Patti Uttam, Uttarakhand",
    mapQuery: "Shiva Resort Jaspur Patti Uttam Uttarakhand",
    // Replace with exact Google Maps embed URL or coordinates when available
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jaspur+Patti+Uttam+Uttarakhand",
  },
  contact: {
    // Add real numbers only when verified from the owner / Instagram bio
    phone: "", // e.g. "+91XXXXXXXXXX"
    whatsapp: "", // e.g. "91XXXXXXXXXX" (no +)
    email: "",
    instagram: "https://www.instagram.com/shiva_resort_uk18/",
    instagramHandle: "@shiva_resort_uk18",
  },
  social: {
    instagram: "https://www.instagram.com/shiva_resort_uk18/",
  },
  booking: {
    // Primary booking CTA — can point to WhatsApp, phone, or booking form
    primaryLabel: "Book Your Stay",
    whatsappMessage: "Hi Shiva Resort, I would like to book a stay / inquire about availability.",
  },
  seo: {
    title: "Shiva Resort UK18 | Luxury Resort in Jaspur, Uttarakhand",
    description:
      "Experience Shiva Resort in Jaspur, Uttarakhand. Dine, relax and celebrate in a nature-surrounded escape. Book your stay for an unforgettable getaway.",
    ogImage: "/images/og-cover.jpg",
  },
};

export type SiteConfig = typeof siteConfig;
