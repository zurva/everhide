import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBannerGloves3 from "@/assets/hero-banner-gloves-3.jpg";
import heroBannerBoxing1 from "@/assets/hero-banner-boxing-1.jpg";
import heroBannerBoxing2 from "@/assets/hero-banner-boxing-2.jpg";
import heroBannerMobile from "@/assets/hero-banner-mobile.jpg";

const desktopSlides: { src: string; position: string }[] = [
  { src: heroBanner1, position: "center" },
  { src: heroBannerBoxing1, position: "right center" },
  { src: heroBannerGloves3, position: "center" },
  { src: heroBannerBoxing2, position: "right center" },
];
const mobileSlides = [{ src: heroBannerMobile, position: "right bottom" }];

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const isMobile = useIsMobile();
  const slides = useMemo(() => (isMobile ? mobileSlides : desktopSlides), [isMobile]);

  useEffect(() => {
    setActive(0);
    // Preload all slides so transitions are instant
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 2000);
    return () => clearInterval(id);
  }, [slides]);

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden pt-16 lg:pt-24">
      {/* Rotating background images */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-contain md:bg-cover bg-right bg-bottom md:bg-center bg-no-repeat bg-secondary transition-opacity duration-1000 ${
            active === i ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden="true"
        />
      ))}

      {/* Gradient for text legibility — stronger top fade on mobile, left-to-right on desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/60 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl text-left space-y-6 animate-slide-up">
          <div className="inline-block">
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Premium Leather Goods Exporter
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Quality Leather Gloves
            <span className="block text-primary">For Global Markets</span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 max-w-lg">
            We export premium leather gloves and accessories, produced through our ISO-certified manufacturing partners, for wholesalers, importers, and distributors worldwide.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/contact">
              <Button size="lg" className="text-base">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-base bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                View Products
              </Button>
            </Link>
            <a href="/company-profile.pdf" download target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                <Building2 className="mr-2 h-5 w-5" />
                Company Profile
              </Button>
            </a>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 pt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  active === i ? "w-8 bg-primary" : "w-4 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
