import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import heroBanner1 from "@/assets/home-banner-1.webp";
import heroBanner2 from "@/assets/home-banner-2.webp";
import heroBanner3 from "@/assets/home-banner-3.webp";
import heroBanner4 from "@/assets/home-banner-4.webp";
import heroBanner5 from "@/assets/home-banner-5.webp";
import mobileBanner1 from "@/assets/home-banner-1-mobile.webp";
import mobileBanner2 from "@/assets/home-banner-2-mobile.webp";
import mobileBanner3 from "@/assets/home-banner-3-mobile.webp";
import mobileBanner4 from "@/assets/home-banner-4-mobile.webp";
import mobileBanner5 from "@/assets/home-banner-5-mobile.webp";

const slides = [
  { src: heroBanner1, mobile: mobileBanner1 },
  { src: heroBanner2, mobile: mobileBanner2 },
  { src: heroBanner3, mobile: mobileBanner3 },
  { src: heroBanner4, mobile: mobileBanner4 },
  { src: heroBanner5, mobile: mobileBanner5 },
];

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
    // Preload all slides so transitions are instant
    slides.forEach(({ src, mobile }) => {
      const img = new Image();
      img.src = window.matchMedia("(max-width: 1023px)").matches ? mobile : src;
    });
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="home-hero relative bg-secondary overflow-hidden" aria-label="EVERHIDE leather gloves">
      {/* Rotating background images */}
      {slides.map(({ src, mobile }, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
            active === i ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <picture className="home-hero-image">
            <source media="(max-width: 1023px)" srcSet={mobile} />
            <img src={src} alt="" width="1920" height="1080" className="h-full w-full object-contain" fetchPriority={i === 0 ? "high" : "auto"} decoding="async" />
          </picture>
        </div>
      ))}

      {/* One continuous image with a responsive text-legibility overlay. */}
      <div className="home-hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="home-hero-content relative z-10 w-full">
        <div className="home-hero-copy text-left animate-slide-up">
          <div className="inline-block">
            <span className="home-hero-eyebrow bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Premium Leather Goods Exporter
            </span>
          </div>

          <h1 className="home-hero-title font-bold text-secondary-foreground leading-tight">
            Quality Leather Gloves
            <span className="block text-primary">For Global Markets</span>
          </h1>

          <p className="home-hero-description text-secondary-foreground/85">
            We export premium leather gloves and accessories, produced through our ISO-certified manufacturing partners, for wholesalers, importers, and distributors worldwide.
          </p>

          <div className="home-hero-actions flex flex-wrap gap-3">
            <Link to="/contact">
              <Button size="lg" className="text-base">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-base bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                View Products
              </Button>
            </Link>
            <a href="/company-profile.pdf" download target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                <Building2 className="mr-2 h-5 w-5" />
                Company Profile
              </Button>
            </a>
          </div>

          {/* Slide indicators */}
          <div className="home-hero-indicators flex gap-2">
            {slides.map((_, i) => (
              <Button
                variant="ghost"
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-pressed={active === i}
                className={`h-6 p-0 rounded-none transition-all motion-reduce:transition-none ${
                  active === i ? "w-8" : "w-4"
                }`}
              >
                <span className={`h-1.5 w-full rounded-full ${active === i ? "bg-primary" : "bg-secondary-foreground/40"}`} />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
