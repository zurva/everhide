import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/PageBanner";
import CatalogCTA from "@/components/CatalogCTA";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Linkedin, Clock, Instagram, Facebook } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Generate email body for contact form
  const generateContactEmailBody = () => {
    return `Hello Everhide Team,\n\n` +
      `Contact Details:\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n\n` +
      `Product Interest: ${formData.product || "General Inquiry"}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Looking forward to your response.\n\n` +
      `Best regards,\n${formData.name}`;
  };

  const handleMailtoSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const recipient = "owner@everhideglobal.com";
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.product || "General"}`);
    const body = encodeURIComponent(generateContactEmailBody());
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleGmailSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const recipient = "owner@everhideglobal.com";
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.product || "General"}`);
    const body = encodeURIComponent(generateContactEmailBody());
    window.open(`https://mail.google.com/mail/?view=cm&to=${recipient}&su=${subject}&body=${body}`, "_blank");
  };

  const isFormValid = formData.name && formData.company && formData.email && formData.product && formData.message;

  const contactInfo = [
    {
      icon: MapPin,
      title: "Business Address",
      content: "TajBagh Beri Gali, House 17, Harbanspura, Lahore, Pakistan",
      link: "https://maps.google.com/?q=TajBagh+Beri+Gali+Harbanspura+Lahore+Pakistan",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+92 322 6609155",
      link: "tel:+923226609155",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "owner@everhideglobal.com",
      link: "mailto:owner@everhideglobal.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "24/7",
      link: null,
    },
    {
      icon: Clock,
      title: "Lead Time",
      content: "15–25 days after order confirmation",
      link: null,
    },
  ];

  return (
    <Layout>
      <SEO
        title="Contact EVERHIDE Global – Bulk Leather Gloves Inquiry"
        description="Contact EVERHIDE Global for bulk leather gloves quotes, private label production and B2B export inquiries. Based in Lahore, Pakistan."
        keywords="contact leather gloves exporter, bulk gloves quote Pakistan, private label gloves inquiry"
      />
      {/* Hero Section */}
      <PageBanner
        title="Contact Us"
        subtitle="Ready to discuss your requirements? Get in touch with our team for quotes, samples, or any inquiries."
      />

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <CatalogCTA
            variant="compact"
            heading="Before reaching out, you can review our catalog for product details"
            description="Skim the full EVERHIDE Global product line, specs, and bulk options to make your inquiry faster and more accurate."
            className="mb-12"
          />
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help you find the perfect leather products for your business. 
                  Contact us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t">
                <h4 className="font-semibold mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/923226609155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/everhideglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/everhideglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1CJRGC9feZ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                <h2 className="text-2xl font-bold mb-6">Send Us an Inquiry</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product">Product Interest *</Label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a product</option>
                      <option value="eh-mbg-001">EH-MBG-001 – Everhide Premium Professional Racing Gauntlet Motorbike Leather Gloves</option>
                      <option value="eh-mbg-002">EH-MBG-002 – Everhide Premium Professional Racing Gauntlet Motorcycle Gloves with Palm Slider Armor</option>
                      <option value="eh-mbg-003">EH-MBG-003 – Everhide Premium Cowhide Sport Motorcycle Gloves with Carbon Knuckle Protection</option>
                      <option value="eh-mbg-004">EH-MBG-004 – Everhide Premium Motorbike Winter/Autumn Riding Gloves</option>
                      <option value="eh-mbg-005">EH-MBG-005 – Everhide Premium Short Cuff Leather Motorcycle Gloves with Dual TPU Knuckle & Palm Slider Protection</option>
                      <option value="eh-mbg-006">EH-MBG-006 – Everhide Premium Summer Motorcycle Gloves with Air Mesh Panels & Molded Knuckle Protection</option>
                      <option value="eh-mbg-007">EH-MBG-007 – Everhide Premium Perforated All Season Short Cuff Leather Motorcycle Gloves</option>
                      <option value="eh-mbg-008">EH-MBG-008 – Everhide Premium Waterproof Motorbike Winter / All-Weather Riding Gloves</option>
                      <option value="eh-mbg-009">EH-MBG-009 – Everhide Premium Fabric Cycling & Biker Gloves with Rubber Knuckle Protection</option>
                      <option value="eh-fbg-010">EH-FBG-010 – Everhide Performance Fabric Cycling & Light Motorcycle Gloves with Soft Shell Construction</option>
                      <option value="eh-dg-001">EH-DG-001 – Unisex Black Leather Dressing Gloves – Genuine Cowhide Winter Gloves</option>
                      <option value="eh-dg-002">EH-DG-002 – Lady's Brown Leather Dressing Gloves – Genuine Cowhide Winter Gloves</option>
                      <option value="eh-dg-003">EH-DG-003 – Dressing Gloves – Genuine Leather Winter Gloves</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements, quantities, specifications..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      type="button" 
                      size="lg" 
                      className="w-full" 
                      disabled={!isFormValid}
                      onClick={handleGmailSubmit}
                    >
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                      </svg>
                      Open in Gmail
                    </Button>
                    <Button 
                      type="button" 
                      size="lg" 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" 
                      disabled={!isFormValid}
                      onClick={handleMailtoSubmit}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Email Client
                    </Button>
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Gmail opens in a new tab • Email Client uses your default app
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted">
        <div className="container-custom py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">EVERHIDE Global Headquarters</h3>
                <p className="text-sm text-muted-foreground">TajBagh Beri Gali, House 17, Harbanspura, Lahore, Pakistan</p>
              </div>
            </div>
            <Button asChild className="shrink-0">
              <a
                href="https://maps.app.goo.gl/n1YCkpeBk3i5GFX58"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" />
                View on Google Maps
              </a>
            </Button>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg ring-1 ring-border">
            <iframe
              title="EVERHIDE Global - TajBagh Beri Gali, House 17, Harbanspura, Lahore"
              src="https://maps.google.com/maps?q=31.5839086,74.4017376&z=17&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
