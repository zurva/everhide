import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import heroBanner from "@/assets/home-banner-1.webp";
import heroBannerMobile from "@/assets/home-banner-1-mobile.webp";

const HeroSection = () => {
  return () => clearInterval(id);
  }, []);

  return (
    <section className="home-hero relative bg-secondary overflow-hidden" aria-label="EVERHIDE leather gloves">
      <picture className="home-hero-image" aria-hidden="true">
        <source media="(max-width: 1023px)" srcSet={heroBannerMobile} />
        <img src={heroBanner} alt="" width="1920" height="1080" className="h-full w-full object-cover" fetchPriority="high" decoding="async" />
      </picture>

      {/* One continuous image with a responsive text-legibility overlay. */}
      <div className="home-hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="home-hero-content relative z-10 w-full">
        <div className="home-hero-copy text-left">
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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
