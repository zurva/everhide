import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import LegalDocument from "@/components/LegalDocument";
import { termsDoc } from "@/lib/legalContent";

const TermsOfServicePage = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service – EVERHIDE Global Leather Gloves Exporter"
        description="Terms governing use of everhideglobal.com and business with EVERHIDE Global: quotations, samples, wholesale supply, OEM and private-label leather gloves manufacturing."
        keywords="EVERHIDE terms of service, leather gloves wholesale terms, OEM gloves manufacturing terms"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service – EVERHIDE Global",
          description:
            "Terms of Service for using the EVERHIDE Global website and engaging in wholesale, OEM, and private-label glove manufacturing business.",
          url: "https://everhideglobal.com/terms",
        }}
      />
      <PageBanner
        title="Terms of Service"
        subtitle="The terms governing our website, quotations, and wholesale & OEM supply."
      />
      <LegalDocument doc={termsDoc} />
    </Layout>
  );
};

export default TermsOfServicePage;
