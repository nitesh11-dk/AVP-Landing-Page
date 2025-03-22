"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

const Gallery = () => {
  const cards = galleryData.map((card, index) => (
    <Card  key={card.src} card={card} index={index} />
  ));

  return (
    <section id="gallery" className="w-full h-full py-20 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8 text-center">
          Our Dance Gallery
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
          Take a glimpse into our vibrant dance community and studio life
        </p>
        <Carousel items={cards} />
      </div>
    </section>
  );
};

const GalleryContent = ({ images }) => {
  return (
    <div className="bg-neutral-900/80 p-8 md:p-14 rounded-3xl mb-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative h-[250px] rounded-lg overflow-hidden group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white text-sm p-4">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const galleryData = [
  {
    category: "Studio Space",
    title: "Our Professional Dance Studio",
    src: "/gallery/studio-1.png",
    content: <GalleryContent images={[
      { src: "/gallery/studio-1.png", alt: "AVP Dance Studio" },
      { src: "/gallery/studio-2.png", alt: "Practice Area" },
      { src: "/gallery/studio-3.png", alt: "Studio Space" },
      { src: "/gallery/studio-4.png", alt: "Dance Floor" },
      { src: "/gallery/studio-1.png", alt: "Mirror Wall" },
      { src: "/gallery/studio-2.png", alt: "Training Area" }
    ]} />,
  },
  {
    category: "Community",
    title: "Our Dance Family",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=3270&auto=format&fit=crop",
    content: <GalleryContent images={[
      { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=3270&auto=format&fit=crop", alt: "Dance Community" },
      { src: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2960&auto=format&fit=crop", alt: "Group Photo" },
      { src: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=2960&auto=format&fit=crop", alt: "Team Spirit" },
      { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=3270&auto=format&fit=crop", alt: "Dance Family" },
      { src: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2960&auto=format&fit=crop", alt: "Community Event" },
      { src: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=2960&auto=format&fit=crop", alt: "Dance Together" }
    ]} />,
  },
  {
    category: "Hip Hop Classes",
    title: "Learning & Growing Together",
    src: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2574&auto=format&fit=crop",
    content: <GalleryContent images={[
      { src: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2574&auto=format&fit=crop", alt: "Hip Hop Workshop" },
      { src: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2670&auto=format&fit=crop", alt: "Dance Practice" },
      { src: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=2670&auto=format&fit=crop", alt: "Group Session" },
      { src: "https://images.unsplash.com/photo-1601931935821-5fbe71157695?q=80&w=2627&auto=format&fit=crop", alt: "Dance Moves" },
      { src: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2670&auto=format&fit=crop", alt: "Dance Class" },
      { src: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2574&auto=format&fit=crop", alt: "Training Session" }
    ]} />,
  },
  {
    category: "Behind The Scenes",
    title: "Life at AVP Dance",
    src: "https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?q=80&w=3270&auto=format&fit=crop",
    content: <GalleryContent images={[
      { src: "https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?q=80&w=3270&auto=format&fit=crop", alt: "Practice Session" },
      { src: "https://images.unsplash.com/photo-1546427660-eb346c344ba5?q=80&w=2960&auto=format&fit=crop", alt: "Backstage" },
      { src: "https://images.unsplash.com/photo-1559671216-bda69517c47f?q=80&w=2960&auto=format&fit=crop", alt: "Preparation" },
      { src: "https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?q=80&w=3270&auto=format&fit=crop", alt: "Dance Life" },
      { src: "https://images.unsplash.com/photo-1546427660-eb346c344ba5?q=80&w=2960&auto=format&fit=crop", alt: "Behind Scenes" },
      { src: "https://images.unsplash.com/photo-1559671216-bda69517c47f?q=80&w=2960&auto=format&fit=crop", alt: "Studio Life" }
    ]} />,
  },
  {
    category: "Performances",
    title: "Showcasing Our Talent",
    src: "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?q=80&w=2670&auto=format&fit=crop",
    content: <GalleryContent images={[
      { src: "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?q=80&w=2670&auto=format&fit=crop", alt: "Stage Performance" },
      { src: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2670&auto=format&fit=crop", alt: "Dance Show" },
      { src: "https://images.unsplash.com/photo-1516801318564-d990fb53b39a?q=80&w=2670&auto=format&fit=crop", alt: "Dance Battle" },
      { src: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=2670&auto=format&fit=crop", alt: "Street Dance" },
      { src: "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?q=80&w=2670&auto=format&fit=crop", alt: "Competition" },
      { src: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2670&auto=format&fit=crop", alt: "Dance Event" }
    ]} />,
  },
  {
    category: "Social Media",
    title: "Follow Us on Instagram",
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=3024&auto=format&fit=crop",
    content: <GalleryContent images={[
      { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=3024&auto=format&fit=crop", alt: "Instagram Story" },
      { src: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2960&auto=format&fit=crop", alt: "Dance Reel" },
      { src: "https://images.unsplash.com/photo-1554189097-ffe88e998a2b?q=80&w=2960&auto=format&fit=crop", alt: "Social Post" },
      { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=3024&auto=format&fit=crop", alt: "Instagram Feed" },
      { src: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2960&auto=format&fit=crop", alt: "Dance Video" },
      { src: "https://images.unsplash.com/photo-1554189097-ffe88e998a2b?q=80&w=2960&auto=format&fit=crop", alt: "Social Media" }
    ]} />,
  },
 
 
];

export default Gallery;
