import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ehMbg001Main from "@/assets/eh-mbg-001-main.webp";
import ehMbg002Main from "@/assets/eh-mbg-002-main.webp";
import ehMbg003Main from "@/assets/eh-mbg-003-main.webp";
import ehMbg004Main from "@/assets/eh-mbg-004-main.webp";
import ehMbg005Main from "@/assets/eh-mbg-005-main.webp";
import ehMbg006Main from "@/assets/eh-mbg-006-main.webp";
import ehMbg007Main from "@/assets/eh-mbg-007-main.webp";
import ehMbg008Main from "@/assets/eh-mbg-008-main.webp";
import ehMbg009Main from "@/assets/eh-mbg-009-main.webp";
import ehFbg010Main from "@/assets/eh-fbg-010-main.webp";
import ehDg001Main from "@/assets/eh-dg-001-main.webp";
import ehDg002Main from "@/assets/eh-dg-002-main.webp";
import ehDg003Main from "@/assets/eh-dg-003-main.webp";
import ehBg001Main from "@/assets/eh-bg-001-main.webp";
import ehBg002Main from "@/assets/eh-bg-002-main.jpeg";

const products = [
  {
    id: "1",
    name: "Everhide Premium Professional Racing Gauntlet Motorbike Leather Gloves",
    category: "Biker Gloves",
    image: ehMbg001Main,
    productCode: "EH-MBG-001",
  },
  {
    id: "2",
    name: "Everhide Premium Professional Racing Gauntlet Motorcycle Gloves with Palm Slider Armor",
    category: "Biker Gloves",
    image: ehMbg002Main,
    productCode: "EH-MBG-002",
  },
  {
    id: "3",
    name: "Everhide Premium Cowhide Sport Motorcycle Gloves with Carbon Knuckle Protection",
    category: "Biker Gloves",
    image: ehMbg003Main,
    productCode: "EH-MBG-003",
  },
  {
    id: "4",
    name: "Everhide Premium Motorbike Winter/Autumn Riding Gloves",
    category: "Biker Gloves",
    image: ehMbg004Main,
    productCode: "EH-MBG-004",
  },
  {
    id: "5",
    name: "Everhide Premium Short Cuff Leather Motorcycle Gloves with Dual TPU Knuckle & Palm Slider Protection",
    category: "Biker Gloves",
    image: ehMbg005Main,
    productCode: "EH-MBG-005",
  },
  {
    id: "6",
    name: "Everhide Premium Summer Motorcycle Gloves with Air Mesh Panels & Molded Knuckle Protection",
    category: "Biker Gloves",
    image: ehMbg006Main,
    productCode: "EH-MBG-006",
  },
  {
    id: "7",
    name: "Everhide Premium Perforated All Season Short Cuff Leather Motorcycle Gloves",
    category: "Biker Gloves",
    image: ehMbg007Main,
    productCode: "EH-MBG-007",
  },
  {
    id: "8",
    name: "Everhide Premium Waterproof Motorbike Winter / All-Weather Riding Gloves",
    category: "Biker Gloves",
    image: ehMbg008Main,
    productCode: "EH-MBG-008",
  },
  {
    id: "9",
    name: "Everhide Premium Fabric Cycling & Biker Gloves with Rubber Knuckle Protection",
    category: "Biker Gloves",
    image: ehMbg009Main,
    productCode: "EH-MBG-009",
  },
  {
    id: "10",
    name: "Everhide Performance Fabric Cycling & Light Motorcycle Gloves with Soft Shell Construction",
    category: "Biker Gloves",
    image: ehFbg010Main,
    productCode: "EH-FBG-010",
  },
  {
    id: "11",
    name: "Unisex Black Leather Dressing Gloves – Genuine Cowhide Winter Gloves",
    category: "Dressing Gloves",
    image: ehDg001Main,
    productCode: "EH-DG-001",
  },
  {
    id: "12",
    name: "Lady's Brown Leather Dressing Gloves – Genuine Cowhide Winter Gloves",
    category: "Dressing Gloves",
    image: ehDg002Main,
    productCode: "EH-DG-002",
  },
  {
    id: "13",
    name: "Dressing Gloves – Genuine Leather Winter Gloves",
    category: "Dressing Gloves",
    image: ehDg003Main,
    productCode: "EH-DG-003",
  },
  {
    id: "14",
    name: "Everhide Premium Professional Cowhide Leather Boxing Gloves",
    category: "Boxing Gloves",
    image: ehBg001Main,
    productCode: "EH-BG-001",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="accent-line mb-4" />
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              Our flagship leather goods crafted for global B2B partners
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card card-hover flex flex-col h-full"
            >
              <div className="aspect-square overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.category} by EVERHIDE Global`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">
                    {product.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-mono">
                    {product.productCode}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg mt-1 mb-4 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>
                <Link to={`/products/${product.id}`} className="mt-auto">
                  <Button size="sm" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
