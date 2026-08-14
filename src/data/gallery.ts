export type GalleryItem = {
  id: number;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square";
};

export const galleryItems: GalleryItem[] = [
  { id: 1, type: "image", src: "/images/gallery-01.jpg", alt: "Shiva Resort atmosphere", aspect: "portrait" },
  { id: 2, type: "image", src: "/images/gallery-02.jpg", alt: "Resort surroundings", aspect: "portrait" },
  { id: 3, type: "image", src: "/images/gallery-03.jpg", alt: "Evening at the resort", aspect: "portrait" },
  { id: 4, type: "image", src: "/images/gallery-04.jpg", alt: "Nature views", aspect: "portrait" },
  { id: 5, type: "image", src: "/images/gallery-05.jpg", alt: "Resort details", aspect: "portrait" },
  { id: 6, type: "image", src: "/images/gallery-06.jpg", alt: "Outdoor spaces", aspect: "portrait" },
  { id: 7, type: "image", src: "/images/gallery-07.jpg", alt: "Resort ambience", aspect: "portrait" },
  { id: 8, type: "image", src: "/images/gallery-08.jpg", alt: "Jaspur escape", aspect: "portrait" },
];

export default galleryItems;
