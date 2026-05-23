import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/PageBanner";
import CatalogCTA from "@/components/CatalogCTA";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
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
import ehBg003Main from "@/assets/eh-bg-003-main.jpg";
import ehBg004Main from "@/assets/eh-bg-004-main.jpg";

const allProducts = [
  {
    id: "1",
    productCode: "EH-MBG-001",
    name: "Everhide Premium Professional Racing Gauntlet Motorbike Leather Gloves",
    category: "biker",
    categoryLabel: "Biker Gloves",
    image: ehMbg001Main,
    description:
      "Premium long-cuff sport racing gloves crafted from 100% genuine cowhide leather (0.7–0.8mm) with hard-shell TPU knuckle armor, finger protectors, palm slider, and extended gauntlet cuff for professional riders.",
  },
  {
    id: "2",
    productCode: "EH-MBG-002",
    name: "Everhide Premium Professional Racing Gauntlet Motorcycle Gloves with Palm Slider Armor",
    category: "biker",
    categoryLabel: "Biker Gloves",
    image: ehMbg002Main,
    description:
      "Race-level gauntlet gloves in 100% genuine cowhide leather (0.7–0.8mm) with TPU molded knuckle armor, hard palm slider, reinforced finger pods, air vents, and long protective cuff for advanced rider safety.",
  },
  {
    id: "3",
    productCode: "EH-MBG-003",
    name: "Everhide Premium Cowhide Sport Motorcycle Gloves with Carbon Knuckle Protection",
    category: "biker",
    categoryLabel: "Biker Gloves",
    image: ehMbg003Main,
    description:
      "Sport riding gloves in 100% genuine cowhide leather (0.7–0.9mm) with carbon laminated knuckle armor, polyester mesh ventilation, perforated airflow panels, pre-curved fingers, and touchscreen-compatible fabric.",
  },
  {
    id: "4",
    productCode: "EH-MBG-004",
    name: "Everhide Premium Motorbike Winter/Autumn Riding Gloves",
    category: "biker",
    categoryLabel: "Biker Gloves",
    image: ehMbg004Main,
    description:
      "Premium winter/autumn riding gloves in 100% genuine cowhide leather (0.7–0.8mm) with TPU molded knuckle armor, gauntlet cuff, poly-foam polyester lining, Amara palm grip, perforated air vents, and touchscreen-compatible fabric.",
  },
  {
    id: "5",
    productCode: "EH-MBG-005",
    name: "Everhide Premium Short Cuff Leather Motorcycle Gloves with Dual TPU Knuckle & Palm Slider Protection",
    category: "biker",
    categoryLabel: "Biker Gloves",
    image: ehMbg005Main,
    description:
      "Short cuff sport gloves in 100% genuine cowhide leather (0.7–0.8mm) with 4-way stretch fabric, dual TPU knuckle armor, hard palm slider, reflective piping, wrist padding, and touchscreen-compatible grip zones.",
  },
  {
    id: "6",
    productCode: "EH-MBG-006",
    name: "Everhide Premium Summer Motorcycle Gloves with Air Mesh Panels & Molded Knuckle Protection",
    category: "biker",
    categoryLabel: "Biker Gloves",
    image: ehMbg006Main,
    description:
      "Lightweight summer riding gloves built from leather, breathable air mesh, Amara, and neoprene with molded knuckle protection, leather finger vents, foam-padded lining, neoprene Velcro closure, and touchscreen-compatible finger & thumb.",
  },
  {
    id: "7",
    productCode: "EH-MBG-007",
    name: "Everhide Premium Perforated All Season Short Cuff Leather Motorcycle Gloves",
    category: "biker",
    categoryLabel: "Biker Gloves",
    image: ehMbg007Main,
    description:
      "Summer short-cuff gloves in 100% genuine cowhide leather (0.6–0.7mm) with full perforated backhand, laminated rubber knuckle protection, rubber laminated finger tips, soft padded palm, thin half lining, Velcro wrist closure, and touchscreen-compatible fabric.",
  },
  {
    id: "8",
    productCode: "EH-MBG-008",
    name: "Everhide Premium Waterproof Motorbike Winter / All-Weather Riding Gloves",
    category: "biker",
    categoryLabel: "Biker Gloves",
    image: ehMbg008Main,
    description:
      "All-weather gauntlet gloves in 100% genuine cowhide leather (0.7–0.8mm) with 600D polyester and soft-shell panels, Hipora breathable waterproof membrane, heavy poly-fill insulation, molded knuckle/finger/palm protection, dual Velcro closure, and touchscreen support.",
  },
  {
    id: "9",
    productCode: "EH-MBG-009",
    name: "Everhide Premium Fabric Cycling & Biker Gloves with Rubber Knuckle Protection",
    category: "biker",
    categoryLabel: "Biker Gloves",
    image: ehMbg009Main,
    description:
      "Multi-purpose summer cycling & biker gloves built from 4-way stretch fabric, Amara, neoprene, and leather reinforcements with rubber molded knuckle and finger protection, full Amara palm, stretch fabric between fingers, polyester foam lining, Velcro wrist closure, and touchscreen support.",
  },
  {
    id: "10",
    productCode: "EH-FBG-010",
    name: "Everhide Performance Fabric Cycling & Light Motorcycle Gloves with Soft Shell Construction",
    category: "biker",
    categoryLabel: "Biker Gloves",
    image: ehFbg010Main,
    description:
      "Lightweight multi-purpose cycling & light motorcycle gloves built from soft shell fabric with Amara palm reinforcement, soft foam palm & knuckle padding, stretch fabric between fingers, heat transfer printed design, adjustable Velcro wrist strap, and touchscreen-compatible finger & thumb. Available in sizes XS to 3XL.",
  },
  {
    id: "11",
    productCode: "EH-DG-001",
    name: "Unisex Black Leather Dressing Gloves – Genuine Cowhide Winter Gloves",
    category: "dressing",
    categoryLabel: "Dressing Gloves",
    image: ehDg001Main,
    description:
      "Premium unisex winter dressing gloves in 100% genuine super-soft cowhide leather (0.6–0.7mm) with elegant stitched detailing, soft foam insulation lining, adjustable leather strap with button & buckle closure, and touchscreen-compatible fingertips. Available in 11 colors and sizes XS to 3XL.",
  },
  {
    id: "12",
    productCode: "EH-DG-002",
    name: "Lady's Brown Leather Dressing Gloves – Genuine Cowhide Winter Gloves",
    category: "dressing",
    categoryLabel: "Dressing Gloves",
    image: ehDg002Main,
    description:
      "Premium ladies' winter dressing gloves in genuine soft leather (0.6–0.7mm) with decorative stitched backhand lines, elegant 3-button cuff detailing, elasticized wrist fit, warm foam lining, and touchscreen-compatible finger. Available in sizes XS to 2XL.",
  },
  {
    id: "13",
    productCode: "EH-DG-003",
    name: "Dressing Gloves – Genuine Leather Winter Gloves",
    category: "dressing",
    categoryLabel: "Dressing Gloves",
    image: ehDg003Main,
    description:
      "Premium winter dressing gloves in 100% genuine cowhide leather (0.5–0.6mm) with elegant backhand stitching, faux-fur inner lining, wider extended fur cuff, elasticized wrist, and touchscreen-compatible finger and thumb. Available in 11 colors and sizes S to 3XL.",
  },
  {
    id: "14",
    productCode: "EH-BG-001",
    name: "Everhide Premium Professional Cowhide Leather Boxing Gloves",
    category: "boxing",
    categoryLabel: "Boxing Gloves",
    image: ehBg001Main,
    description:
      "Made from 100% genuine premium cowhide leather, designed for professional training, sparring, and boxing performance with hand mold latex padding, moisture-wicking lining, extended wrist support, and durable hook & loop closure. Available in 10oz–16oz and multiple color combinations.",
  },
  {
    id: "15",
    productCode: "EH-BG-002",
    name: "Everhide Premium Professional Cowhide Leather Boxing Gloves",
    category: "boxing",
    categoryLabel: "Boxing Gloves",
    image: ehBg002Main,
    description:
      "Premium cowhide leather boxing gloves for professional training, sparring, and fitness workouts. Hand mold latex padding, moisture-wicking lining, ergonomic pre-curved fist, extended wrist support, and quilted rear-panel styling with glossy finish. Available in 10oz–16oz.",
  },
  {
    id: "16",
    productCode: "EH-BG-003",
    name: "Everhide Professional Cowhide Leather Training & Sparring Boxing Gloves",
    category: "boxing",
    categoryLabel: "Boxing Gloves",
    image: ehBg003Main,
    description:
      "Professional cowhide leather boxing gloves for training, sparring, and combat fitness. Hand mold latex padding, moisture-wicking lining, ergonomic pre-curved fist, extended wrist support, palm ventilation, and glossy finish. Available in 10oz–16oz and multiple color combinations.",
  },
];

const categories = [
  { value: "all", label: "All Products" },
  { value: "biker", label: "Biker Gloves" },
  { value: "dressing", label: "Dressing Gloves" },
  { value: "boxing", label: "Boxing Gloves" },
];

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.productCode?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <SEO
        title="Leather Gloves Catalog – Biker & Dressing | EVERHIDE Global"
        description="Browse premium leather gloves from EVERHIDE Global: biker, racing, dressing and fashion gloves. Bulk and private label production from Pakistan."
        keywords="leather gloves catalog, biker gloves wholesale, dressing gloves exporter, bulk leather gloves Pakistan"
      />
      {/* Hero Section */}
      <PageBanner
        title="Our Products"
        subtitle="Explore our range of premium leather gloves across our Biker and Dressing categories, designed for global B2B markets."
      />

      {/* Filters & Products */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <CatalogCTA
            variant="compact"
            heading="View Full Catalog for Detailed Specifications & Bulk Options"
            description="Get the complete product line with materials, sizing, MOQ, and customization details in one PDF."
            className="mb-10"
          />

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant={activeCategory === cat.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat.value)}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-xl overflow-hidden shadow-card card-hover flex flex-col h-full"
              >
                <div className="aspect-square overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.categoryLabel} by EVERHIDE Global`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-primary font-medium uppercase tracking-wide">
                      {product.categoryLabel}
                    </span>
                    {product.productCode && (
                      <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-mono">
                        {product.productCode}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                    {product.description}
                  </p>
                  <Link to={`/products/${product.id}`} className="mt-auto">
                    <Button size="sm" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
