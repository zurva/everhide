import { Hand, Settings, ShieldCheck, Package, Tag, Boxes } from "lucide-react";

const reasons = [
  {
    icon: Hand,
    title: "Premium Leather",
    description: "Premium-grade leather selected for durability, comfort, and performance",
  },
  {
    icon: Settings,
    title: "Reliable Production Partners",
    description: "We partner with experienced, ISO-certified manufacturing partners",
  },
  {
    icon: ShieldCheck,
    title: "Strict Quality Control",
    description: "Multi-stage inspection system",
  },
  {
    icon: Package,
    title: "Export Packaging",
    description: "Safe international shipping",
  },
  {
    icon: Tag,
    title: "OEM & Private Label",
    description: "Custom branding & development",
  },
  {
    icon: Boxes,
    title: "Low MOQ Flexibility",
    description: "Flexible order quantities for growing brands",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title">
            Why Choose <span className="text-primary">EVERHIDE</span>?
          </h2>
          <p className="section-subtitle mx-auto">
            As an export partner, we combine premium materials, ISO-certified manufacturing partnerships, and strict quality control systems to deliver leather gloves that meet international performance and reliability standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 bg-card p-6 rounded-xl shadow-card">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
