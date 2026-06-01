import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Download, FileText } from "lucide-react";
import logo from "@/assets/everhide-logo.jpeg";
import CatalogDownloadModal from "@/components/CatalogDownloadModal";

const Footer = () => {
  const [catalogOpen, setCatalogOpen] = useState(false);
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  const productLinks = [
    { name: "Biker Gloves", path: "/products?category=biker" },
    { name: "Dressing Gloves", path: "/products?category=dressing" },
    { name: "Boxing Gloves", path: "/products?category=boxing" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="EVERHIDE" className="h-12 w-auto bg-white p-2 rounded" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              EverHide Global is a Pakistan-based export and product development partner specializing in premium leather gloves for international B2B markets, serving brands, distributors, and importers across the US, Europe, and beyond.
            </p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setCatalogOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors border border-primary/30 hover:border-primary px-4 py-2 rounded-md"
              >
                <Download className="h-4 w-4" />
                Download Product Catalog
              </button>
              <a
                href="/company-profile.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-secondary-foreground hover:text-primary transition-colors border border-secondary-foreground/30 hover:border-primary px-4 py-2 rounded-md"
              >
                <FileText className="h-4 w-4" />
                Download Company Profile
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Pakistan</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+923226609155"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+92 322 6609155</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:owner@everhideglobal.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>owner@everhideglobal.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923226609155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>+92 322 6609155</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/everhideglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Linkedin className="h-4 w-4 flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/everhideglobal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Instagram className="h-4 w-4 flex-shrink-0" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1CJRGC9feZ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Facebook className="h-4 w-4 flex-shrink-0" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted-foreground/20">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EVER<span className="text-primary">HIDE</span>. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      <CatalogDownloadModal open={catalogOpen} onOpenChange={setCatalogOpen} />
    </footer>
  );
};

export default Footer;
