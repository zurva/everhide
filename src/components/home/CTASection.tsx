import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Order?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Contact us today for competitive pricing and samples. We're here to help you grow your business.
            </p>
          </div>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-base"
            >
              Get a Quote Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
