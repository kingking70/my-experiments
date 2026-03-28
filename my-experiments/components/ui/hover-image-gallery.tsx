"use client";
import { useState } from "react";

interface HoverImageGalleryProps {
  images: string[];
}

export function HoverImageGallery({ images }: HoverImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    const imageIndex = Math.floor((x / rect.width) * images.length);
    setCurrentImageIndex(Math.max(0, Math.min(images.length - 1, imageIndex)));
  };

  return (
    <div className="relative group">
      <div
        className="relative w-full h-[420px] overflow-hidden rounded-lg shadow-lg cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          src={images[currentImageIndex]}
          alt={`Gallery image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-150 ease-out"
        />

        {isHovering && (
          <div
            className="absolute pointer-events-none z-20 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: mousePosition.x, top: mousePosition.y }}
          >
            <div className="bg-white/20 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/30 w-10 h-10 flex items-center justify-center gap-1">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
