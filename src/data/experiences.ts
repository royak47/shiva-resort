/**
 * Experiences — visual storytelling tiles.
 * Only include what aligns with the resort’s actual offering (dine, relax, celebrate, nature).
 */

export type Experience = {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Nature Escape",
    description: "Surrounded by the calm of Jaspur’s open landscapes.",
    image: "/images/exp-nature.jpg",
  },
  {
    id: 2,
    title: "Dine Together",
    description: "Flavourful meals shared under open skies and warm lights.",
    image: "/images/exp-dining.jpg",
  },
  {
    id: 3,
    title: "Celebrate",
    description: "Birthdays, gatherings and special moments made memorable.",
    image: "/images/exp-celebrate.jpg",
  },
  {
    id: 4,
    title: "Relax & Unwind",
    description: "Quiet corners and evenings designed for slowing down.",
    image: "/images/exp-relax.jpg",
  },
];

export default experiences;
