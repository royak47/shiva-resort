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
    alt: "Floral entrance archway at Shiva Resort",
    aspect: "portrait",
  },
  {
    id: 2,
    type: "video",
    src: "/videos/reel-01.mp4",
    poster: "/images/reel-01.jpg",
    alt: "Resort atmosphere reel",
    aspect: "portrait",
  },
  {
    id: 3,
    type: "image",
    src: "/images/gallery-02.jpg",
    alt: "Chandelier under the celebration tent",
    aspect: "square",
  },
  {
    id: 4,
    type: "image",
    src: "/images/gallery-03.jpg",
    alt: "Elegant outdoor dining setup",
    aspect: "landscape",
  },
  {
    id: 5,
    type: "video",
    src: "/videos/reel-02.mp4",
    poster: "/images/reel-02.jpg",
    alt: "Dining ambience reel",
    aspect: "portrait",
  },
  {
    id: 6,
    type: "image",
    src: "/images/gallery-04.jpg",
    alt: "Signature thali at Shiva Restaurant",
    aspect: "landscape",
  },
  {
    id: 7,
    type: "image",
    src: "/images/gallery-05.jpg",
    alt: "Restaurant interior ceiling detail",
    aspect: "square",
  },
  {
    id: 8,
    type: "image",
    src: "/images/gallery-06.jpg",
    alt: "Wall art gallery corridor",
    aspect: "landscape",
  },
];

export default galleryItems;
