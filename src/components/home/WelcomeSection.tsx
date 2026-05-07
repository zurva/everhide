import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Factory } from "lucide-react";

const WelcomeSection = () => {
  const highlights = [
    { icon: Factory, label: "Trusted Manufacturing Partners" },
    { icon: Globe, label: "Global Export" },
    { icon: Award, label: "Premium Quality" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title">
            Welcome to EVER<span className="text-primary">HIDE</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            EVER<span className="text-primary">HIDE</span> Global is a Pakistan-based export company that partners with ISO-certified manufacturing partners, specializing in premium leather gloves for international B2B buyers across the United States, Europe, and global markets.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our product range includes motorcycle gloves, boxing gloves, and leather dressing gloves, developed using high-grade materials and produced by our experienced manufacturing partners to meet international standards of durability, performance, and consistency.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We provide reliable sourcing, strict quality control, and complete export coordination, ensuring every order meets buyer expectations,from sampling to bulk production and final delivery.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With a focus on long-term partnerships, transparent communication, and flexible order quantities, EVER<span className="text-primary">HIDE</span> Global supports brands, wholesalers, and distributors looking for a dependable leather gloves supply partner.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 mb-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          <Link to="/about">
            <Button variant="outline">
              Discover More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
