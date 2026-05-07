import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProcessSection from "@/components/home/ProcessSection";
import CatalogCTA from "@/components/CatalogCTA";

import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EVERHIDE Global",
    url: "https://everhideglobal.com",
    logo: "https://everhideglobal.com/favicon.ico",
    description:
      "Pakistan-based B2B exporter of premium leather gloves, partnering with ISO-certified manufacturing partners to serve international wholesalers, distributors, and private label brands.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "TajBagh Beri Gali, House 17, Harbanspura",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-322-6609155",
      email: "owner@everhideglobal.com",
      contactType: "sales",
      areaServed: ["US", "EU", "GB", "AU", "CA"],
    },
    sameAs: [
      "https://www.linkedin.com/company/everhideglobal/",
      "https://www.instagram.com/everhideglobal/",
      "https://www.facebook.com/share/1CJRGC9feZ/",
    ],
  };

  return (
    <Layout>
      <SEO
        title="EVERHIDE Global – Pakistan Leather Gloves Exporter"
        description="B2B exporter of premium leather gloves from Pakistan. We partner with ISO-certified manufacturing partners for bulk and private label production for global brands, distributors and importers."
        keywords="Pakistan leather gloves exporter, bulk leather gloves supplier, private label leather gloves, B2B leather gloves exporter, riding gloves exporter, OEM leather gloves"
        jsonLd={orgSchema}
      />
      <HeroSection />
      <WelcomeSection />
      <CategoriesSection />
      <FeaturedProducts />
      <CatalogCTA />
      <ProcessSection />
      
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
