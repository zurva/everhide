import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ images, initialIndex = 0, isOpen, onClose }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-black/95 border-none"
        onKeyDown={handleKeyDown}
      >
        <div className="relative flex items-center justify-center min-h-[50vh] max-h-[90vh]">
          {/* Close button */}
          <button
            type="button"
            aria-label="Close"
            className="absolute top-3 right-3 z-20 text-white hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            onClick={onClose}
          >
            <X className="h-10 w-10 md:h-12 md:w-12" strokeWidth={3.5} />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-12 w-12 md:h-16 md:w-16" strokeWidth={3.5} />
            </button>
          )}

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain"
          />

          {/* Next button */}
          {images.length > 1 && (
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              onClick={handleNext}
            >
              <ChevronRight className="h-12 w-12 md:h-16 md:w-16" strokeWidth={3.5} />
            </button>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
