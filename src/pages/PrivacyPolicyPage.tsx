import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import LegalDocument from "@/components/LegalDocument";
import { privacyDoc } from "@/lib/legalContent";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy – EVERHIDE Global Leather Gloves Exporter"
        description="Learn how EVERHIDE Global, Pakistan-based leather gloves exporter, collects, uses, and protects your information when you request quotes, catalogs, or OEM manufacturing."
        keywords="EVERHIDE privacy policy, leather gloves exporter data protection, B2B gloves supplier privacy"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy – EVERHIDE Global",
          description:
            "How EVERHIDE Global collects, uses, and protects personal information from business customers and website visitors.",
          url: "https://everhideglobal.com/privacy",
        }}
      />
      <PageBanner
        title="Privacy Policy"
        subtitle="How EVERHIDE Global collects, uses, and protects your information."
      />
      <LegalDocument doc={privacyDoc} />
    </Layout>
  );
};

export default PrivacyPolicyPage;
