import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import shieldLogo from "@/assets/everhide-shield-logo.jpeg";
import textLogo from "@/assets/everhide-text-logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container-custom py-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-6">
              <span className="hidden md:inline text-muted-foreground">Call Us Anytime</span>
              <a href="tel:+923226609155" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+92 322 6609155</span>
              </a>
              <a href="mailto:owner@everhideglobal.com" className="hidden sm:flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>owner@everhideglobal.com</span>
              </a>
            </div>
            <span className="text-muted-foreground hidden lg:block">Exporter & Product Development Partner</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-1">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={shieldLogo} alt="EVERHIDE Logo" className="h-12 md:h-14 w-auto" />
            <img src={textLogo} alt="EVERHIDE" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-heading font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-300 group ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      isActive ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Get a Quote Button */}
            <Link to="/contact">
              <Button className="hidden sm:flex">
                Get a Quote
              </Button>
            </Link>

            {/* Menu Button (mobile/tablet) */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        {isMenuOpen && (
          <nav className="mt-4 pb-4 border-t pt-4 animate-slide-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-heading font-semibold uppercase tracking-wider text-sm px-3 py-3 rounded-md border-l-4 transition-all ${
                      isActive
                        ? "text-primary border-primary bg-accent"
                        : "text-foreground border-transparent hover:text-primary hover:bg-accent hover:border-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="sm:hidden">
                <Button className="w-full mt-2">Get a Quote</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
