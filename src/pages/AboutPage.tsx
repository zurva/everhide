import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/PageBanner";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Users, Globe, Factory } from "lucide-react";
import icon from "@/assets/everhide-icon.jpeg";
import heroGloves from "@/assets/about-our-story.png";

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality, using only the finest materials and craftsmanship.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our priority. We work closely with clients to meet their unique needs.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving businesses across 50+ countries with reliable shipping and documentation.",
    },
    {
      icon: Factory,
      title: "Innovation",
      description: "Continuously improving our processes and products to stay ahead of market trends.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="About EVERHIDE Global – Pakistan Leather Gloves Exporter"
        description="EVERHIDE Global is a Pakistan-based export & product development partner for premium leather gloves. Bulk and private label for international B2B markets."
        keywords="about EVERHIDE, leather gloves manufacturer Pakistan, B2B leather exporter, private label gloves"
      />
      {/* Hero Section */}
      <PageBanner
        title={<>About EVER<span className="text-primary">HIDE</span></>}
        subtitle="A legacy of excellence in leather goods manufacturing, serving global markets with premium quality products."
      />

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={heroGloves}
                alt="Manufacturing Excellence"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-sm font-semibold leading-tight">Backed by Years of Manufacturing Experience</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="accent-line" />
              <h2 className="section-title">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                EVER<span className="text-primary">HIDE</span> Global is a Pakistan-based export and product development partner specializing in
                premium leather gloves for international B2B markets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with brands, distributors, and importers across the United States, Europe, and other global regions,
                supporting bulk production, OEM, and private label manufacturing with a strong focus on consistency and reliability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our production is carried out through a trusted network of experienced manufacturing partners, allowing us to
                maintain close control over quality, materials, and production timelines. This structure ensures consistent
                product standards and reliable performance across repeat bulk orders.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in leather gloves, including riding, boxing, and fashion gloves, with ongoing product development
                tailored to market demands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                EVER<span className="text-primary">HIDE</span> Global is built on clear communication, practical product development, and
                dependable export handling, positioning us as a long-term supply partner, not just a transactional supplier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-card">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver well-developed leather products, reliable production, and long-term value for our global partners.
              </p>
            </div>

            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-card">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in leather goods manufacturing, recognized for our quality, 
                innovation, and commitment to customer success in every market we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-accent rounded-2xl flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom text-center">
          <img src={icon} alt="EVERHIDE" className="w-20 h-20 mx-auto mb-6 bg-white p-2 rounded-lg" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With EVER<span className="text-primary">HIDE</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Ready to source premium leather goods for your business? Let's discuss how we can help you succeed.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
