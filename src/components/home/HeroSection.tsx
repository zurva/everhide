import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import heroBanner1 from "@/assets/home-banner-1.webp";
import heroBanner2 from "@/assets/home-banner-2.webp";
import heroBanner3 from "@/assets/home-banner-3.webp";
import heroBanner4 from "@/assets/home-banner-4.webp";
import heroBanner5 from "@/assets/home-banner-5.webp";
import heroBannerMobile from "@/assets/home-banner-mobile.webp";

const slides: { src: string; position: string }[] = [
  { src: heroBanner1, position: "right bottom" },
  { src: heroBanner2, position: "right bottom" },
  { src: heroBanner3, position: "right bottom" },
  { src: heroBanner4, position: "right bottom" },
  { src: heroBanner5, position: "right bottom" },
];

const mobileSlides: { src: string; position: string }[] = [
  { src: heroBannerMobile, position: "center" },
];

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    setActive(0);
    // Preload all slides so transitions are instant
    slides.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const activeSlides = isMobile ? mobileSlides : slides;
  const activeIndex = isMobile ? 0 : active % slides.length;

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden pt-16 lg:pt-24">
      {/* Rotating background images */}
      {activeSlides.map(({ src, position }, i) => (
        <div
          key={i}
          className={`home-banner-image absolute inset-0 bg-cover bg-no-repeat bg-secondary transition-opacity duration-1000 ${
            activeIndex === i ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
          aria-hidden="true"
        />
      ))}

      {/* Keep contrast behind the copy without dimming the product imagery. */}
      <div className="home-banner-overlay absolute inset-0" />

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
          {activeSlides.length > 1 && (
            <div className="flex gap-2 pt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === i ? "w-8 bg-primary" : "w-4 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
