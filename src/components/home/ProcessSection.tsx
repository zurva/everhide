import { ClipboardList, FileCheck, Factory, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Order Placement",
    description: "Share your vision with us – including product specifications, materials, designs, colors, sizes, and quantity requirements. Our team will work closely with you to understand your exact needs.",
    step: "01",
  },
  {
    icon: FileCheck,
    title: "Quotation & Sampling",
    description: "Receive competitive pricing and sample products for quality approval",
    step: "02",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Production begins with regular updates via images and videos",
    step: "03",
  },
  {
    icon: Truck,
    title: "Shipping",
    description: "Quality inspection, packaging, and delivery to your destination",
    step: "04",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title text-secondary-foreground">Easy Work Process</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our streamlined process ensures smooth collaboration from inquiry to delivery
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-muted-foreground/20" />
              )}
              
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-24 h-24 mx-auto bg-muted-foreground/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
