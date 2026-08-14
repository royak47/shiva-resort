/**
 * Gallery items — mix of photos and vertical/landscape videos.
 * Place assets in /public/images and /public/videos
 */

export type GalleryItem = {
  id: number;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square";
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/gallery-01.jpg",
    alt: "Shiva Resort exterior",
    aspect: "landscape",
  },
  {
    id: 2,
    type: "video",
    src: "/videos/gallery-01.mp4",
    poster: "/images/gallery-01-poster.jpg",
    alt: "Resort atmosphere reel",
    aspect: "portrait",
  },
  {
    id: 3,
    type: "image",
    src: "/images/gallery-02.jpg",
    alt: "Dining at Shiva Resort",
    aspect: "square",
  },
  {
    id: 4,
    type: "image",
    src: "/images/gallery-03.jpg",
    alt: "Evening lights",
    aspect: "landscape",
  },
  {
    id: 5,
    type: "video",
    src: "/videos/gallery-02.mp4",
    poster: "/images/gallery-02-poster.jpg",
    alt: "Celebration moments",
    aspect: "portrait",
  },
  {
    id: 6,
    type: "image",
    src: "/images/gallery-04.jpg",
    alt: "Nature surroundings",
    aspect: "landscape",
  },
  {
    id: 7,
    type: "image",
    src: "/images/gallery-05.jpg",
    alt: "Room interior",
    aspect: "square",
  },
  {
    id: 8,
    type: "image",
    src: "/images/gallery-06.jpg",
    alt: "Open air seating",
    aspect: "landscape",
  },
];

export default galleryItems;
