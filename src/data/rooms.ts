/**
 * Room data — keep editable.
 * Replace images with real photos from the resort.
 * Do not invent prices or specific amenities until confirmed.
 */

export type Room = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  amenities: string[];
  view?: string;
  ctaView: string;
  ctaBook: string;
};

export const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe Room",
    shortDescription: "Comfortable stay with modern essentials.",
    description:
      "Thoughtfully designed rooms for restful nights after a day of dining and celebration. Soft lighting, clean finishes and a calm atmosphere.",
    image: "/images/room-01.jpg",
    amenities: ["Air conditioning", "Private bathroom", "Wi-Fi", "Hot water"],
    view: "Garden / Courtyard",
    ctaView: "#rooms",
    ctaBook: "#booking",
  },
  {
    id: 2,
    name: "Family Suite",
    shortDescription: "Spacious layout ideal for families.",
    description:
      "Extra space for families and small groups. Perfect for longer stays and celebrations at the resort.",
    image: "/images/room-02.jpg",
    amenities: ["Air conditioning", "Private bathroom", "Wi-Fi", "Hot water", "Extra seating"],
    view: "Open surroundings",
    ctaView: "#rooms",
    ctaBook: "#booking",
  },
  {
    id: 3,
    name: "Premium Room",
    shortDescription: "Elevated comfort for a special escape.",
    description:
      "A more refined option for couples and guests seeking a quieter, elevated stay experience at Shiva Resort.",
    image: "/images/room-03.jpg",
    amenities: ["Air conditioning", "Private bathroom", "Wi-Fi", "Hot water", "Premium bedding"],
    view: "Nature views",
    ctaView: "#rooms",
    ctaBook: "#booking",
  },
];

export default rooms;
