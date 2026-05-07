import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const CATALOG_URL = "/everhide-catalog.pdf";

interface CatalogCTAProps {
  heading?: string;
  description?: string;
  variant?: "section" | "compact";
  className?: string;
}

export const DownloadCatalogButton = ({
  size = "lg",
  variant = "default",
  className = "",
  label = "Download Catalog",
}: {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  className?: string;
  label?: string;
}) => (
  <a href={CATALOG_URL} download target="_blank" rel="noopener noreferrer">
    <Button size={size} variant={variant} className={className}>
      <Download className="mr-2 h-5 w-5" />
      {label}
    </Button>
  </a>
);

const CatalogCTA = ({
  heading = "Explore Our Product Range Before Requesting a Quote",
  description = "Browse the complete EVERHIDE Global product catalog with detailed specifications, materials, and bulk options before reaching out.",
  variant = "section",
  className = "",
}: CatalogCTAProps) => {
  if (variant === "compact") {
    return (
      <div className={`bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-card ${className}`}>
        <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
          <FileText className="w-7 h-7 text-primary" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-heading font-semibold text-lg md:text-xl mb-1">{heading}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <DownloadCatalogButton />
      </div>
    );
  }

  return (
    <section className={`section-padding bg-secondary text-secondary-foreground ${className}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              Product Catalog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
            <p className="text-secondary-foreground/80 text-lg">{description}</p>
          </div>
          <DownloadCatalogButton />
        </div>
      </div>
    </section>
  );
};

export default CatalogCTA;
