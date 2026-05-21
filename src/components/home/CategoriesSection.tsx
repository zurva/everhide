import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ehMbg001Main from "@/assets/eh-mbg-001-main.webp";
import ehDg001Main from "@/assets/eh-dg-001-main.webp";
import ehBg001Main from "@/assets/eh-bg-001-main.webp";

const categories = [
  {
    name: "Biker Gloves",
    description: "Professional racing & riding gloves with TPU armor and gauntlet protection",
    image: ehMbg001Main,
    link: "/products?category=biker",
  },
  {
    name: "Dressing Gloves",
    description: "Premium genuine leather winter dressing gloves with faux-fur lining",
    image: ehDg001Main,
    link: "/products?category=dressing",
  },
  {
    name: "Boxing Gloves",
    description: "Premium cowhide leather boxing gloves for professional training, sparring, and combat sports",
    image: ehBg001Main,
    link: "/products?category=boxing",
  },
];

const CategoriesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="accent-line mx-auto mb-4" />
          <h2 className="section-title">Product Categories</h2>
          <p className="section-subtitle mx-auto">
            Explore our range of premium leather products designed for global markets
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group bg-card rounded-xl overflow-hidden shadow-card card-hover"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.name} - premium leather gloves category`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;