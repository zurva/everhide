import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  ZoomIn,
  Package,
  Palette,
  Ruler,
  Shield,
  Clock,
  Truck,
  MessageSquare
} from "lucide-react";
import ImageLightbox from "@/components/ui/image-lightbox";
import SizeChartDialog from "@/components/ui/size-chart";
import { getColorSwatch } from "@/lib/colorSwatch";
import ehMbg001Main from "@/assets/eh-mbg-001-main.webp";
import ehMbg001_1 from "@/assets/eh-mbg-001-1.png";
import ehMbg001_2 from "@/assets/eh-mbg-001-2.png";
import ehMbg001_3 from "@/assets/eh-mbg-001-3.png";
import ehMbg001_4 from "@/assets/eh-mbg-001-4.png";
import ehMbg001_5 from "@/assets/eh-mbg-001-5.png";
import ehMbg001_6 from "@/assets/eh-mbg-001-6.png";
import ehMbg001_7 from "@/assets/eh-mbg-001-7.png";
import ehMbg002Main from "@/assets/eh-mbg-002-main.webp";
import ehMbg002_1 from "@/assets/eh-mbg-002-1.png";
import ehMbg002_2 from "@/assets/eh-mbg-002-2.png";
import ehMbg002_3 from "@/assets/eh-mbg-002-3.png";
import ehMbg002_4 from "@/assets/eh-mbg-002-4.png";
import ehMbg002_5 from "@/assets/eh-mbg-002-5.png";
import ehMbg002_6 from "@/assets/eh-mbg-002-6.png";
import ehMbg002_7 from "@/assets/eh-mbg-002-7.png";
import ehMbg003Main from "@/assets/eh-mbg-003-main.webp";
import ehMbg003_1 from "@/assets/eh-mbg-003-1.png";
import ehMbg003_2 from "@/assets/eh-mbg-003-2.png";
import ehMbg003_3 from "@/assets/eh-mbg-003-3.png";
import ehMbg003_4 from "@/assets/eh-mbg-003-4.png";
import ehMbg003_5 from "@/assets/eh-mbg-003-5.png";
import ehMbg003_6 from "@/assets/eh-mbg-003-6.png";
import ehMbg003_7 from "@/assets/eh-mbg-003-7.png";
import ehMbg004Main from "@/assets/eh-mbg-004-main.webp";
import ehMbg004_1 from "@/assets/eh-mbg-004-1.png";
import ehMbg004_2 from "@/assets/eh-mbg-004-2.png";
import ehMbg004_3 from "@/assets/eh-mbg-004-3.png";
import ehMbg004_4 from "@/assets/eh-mbg-004-4.png";
import ehMbg004_5 from "@/assets/eh-mbg-004-5.png";
import ehMbg004_6 from "@/assets/eh-mbg-004-6.png";
import ehMbg004_7 from "@/assets/eh-mbg-004-7.png";
import ehMbg005Main from "@/assets/eh-mbg-005-main.webp";
import ehMbg005_1 from "@/assets/eh-mbg-005-1.png";
import ehMbg005_2 from "@/assets/eh-mbg-005-2.png";
import ehMbg005_3 from "@/assets/eh-mbg-005-3.png";
import ehMbg005_4 from "@/assets/eh-mbg-005-4.png";
import ehMbg005_5 from "@/assets/eh-mbg-005-5.png";
import ehMbg005_6 from "@/assets/eh-mbg-005-6.png";
import ehMbg005_7 from "@/assets/eh-mbg-005-7.png";
import ehMbg006Main from "@/assets/eh-mbg-006-main.webp";
import ehMbg006_1 from "@/assets/eh-mbg-006-1.png";
import ehMbg006_2 from "@/assets/eh-mbg-006-2.png";
import ehMbg006_3 from "@/assets/eh-mbg-006-3.png";
import ehMbg006_4 from "@/assets/eh-mbg-006-4.png";
import ehMbg006_5 from "@/assets/eh-mbg-006-5.png";
import ehMbg006_6 from "@/assets/eh-mbg-006-6.png";
import ehMbg006_7 from "@/assets/eh-mbg-006-7.png";
import ehMbg007Main from "@/assets/eh-mbg-007-main.webp";
import ehMbg007_1 from "@/assets/eh-mbg-007-1.png";
import ehMbg007_2 from "@/assets/eh-mbg-007-2.png";
import ehMbg007_3 from "@/assets/eh-mbg-007-3.png";
import ehMbg007_4 from "@/assets/eh-mbg-007-4.png";
import ehMbg007_5 from "@/assets/eh-mbg-007-5.png";
import ehMbg007_6 from "@/assets/eh-mbg-007-6.png";
import ehMbg007_7 from "@/assets/eh-mbg-007-7.png";
import ehMbg008Main from "@/assets/eh-mbg-008-main.webp";
import ehMbg008_1 from "@/assets/eh-mbg-008-1.png";
import ehMbg008_2 from "@/assets/eh-mbg-008-2.png";
import ehMbg008_3 from "@/assets/eh-mbg-008-3.png";
import ehMbg008_4 from "@/assets/eh-mbg-008-4.png";
import ehMbg008_5 from "@/assets/eh-mbg-008-5.png";
import ehMbg008_6 from "@/assets/eh-mbg-008-6.png";
import ehMbg008_7 from "@/assets/eh-mbg-008-7.png";
import ehMbg009Main from "@/assets/eh-mbg-009-main.webp";
import ehMbg009_1 from "@/assets/eh-mbg-009-1.png";
import ehMbg009_2 from "@/assets/eh-mbg-009-2.png";
import ehMbg009_3 from "@/assets/eh-mbg-009-3.png";
import ehMbg009_4 from "@/assets/eh-mbg-009-4.png";
import ehMbg009_5 from "@/assets/eh-mbg-009-5.png";
import ehMbg009_6 from "@/assets/eh-mbg-009-6.png";
import ehMbg009_7 from "@/assets/eh-mbg-009-7.png";
import ehFbg010Main from "@/assets/eh-fbg-010-main.webp";
import ehFbg010_1 from "@/assets/eh-fbg-010-1.png";
import ehFbg010_2 from "@/assets/eh-fbg-010-2.png";
import ehFbg010_3 from "@/assets/eh-fbg-010-3.png";
import ehFbg010_4 from "@/assets/eh-fbg-010-4.png";
import ehFbg010_5 from "@/assets/eh-fbg-010-5.png";
import ehFbg010_6 from "@/assets/eh-fbg-010-6.png";
import ehFbg010_7 from "@/assets/eh-fbg-010-7.png";
import ehDg001Main from "@/assets/eh-dg-001-main.webp";
import ehDg001_1 from "@/assets/eh-dg-001-1.png";
import ehDg001_2 from "@/assets/eh-dg-001-2.png";
import ehDg001_3 from "@/assets/eh-dg-001-3.png";
import ehDg001_4 from "@/assets/eh-dg-001-4.png";
import ehDg001_5 from "@/assets/eh-dg-001-5.png";
import ehDg001_6 from "@/assets/eh-dg-001-6.png";
import ehDg001_7 from "@/assets/eh-dg-001-7.png";
import ehDg002Main from "@/assets/eh-dg-002-main.webp";
import ehDg002_1 from "@/assets/eh-dg-002-1.png";
import ehDg002_2 from "@/assets/eh-dg-002-2.png";
import ehDg002_3 from "@/assets/eh-dg-002-3.png";
import ehDg002_4 from "@/assets/eh-dg-002-4.png";
import ehDg002_5 from "@/assets/eh-dg-002-5.png";
import ehDg002_6 from "@/assets/eh-dg-002-6.png";
import ehDg003Main from "@/assets/eh-dg-003-main.webp";
import ehDg003_1 from "@/assets/eh-dg-003-1.png";
import ehDg003_2 from "@/assets/eh-dg-003-2.png";
import ehDg003_3 from "@/assets/eh-dg-003-3.png";
import ehDg003_4 from "@/assets/eh-dg-003-4.png";
import ehDg003_5 from "@/assets/eh-dg-003-5.png";
import ehDg003_6 from "@/assets/eh-dg-003-6.png";
import ehDg003_7 from "@/assets/eh-dg-003-7.png";
import ehBg001Main from "@/assets/eh-bg-001-main.webp";
import ehBg001_1 from "@/assets/eh-bg-001-1.png";
import ehBg001_2 from "@/assets/eh-bg-001-2.png";
import ehBg001_3 from "@/assets/eh-bg-001-3.png";
import ehBg001_4 from "@/assets/eh-bg-001-4.png";
import ehBg001_5 from "@/assets/eh-bg-001-5.png";
import ehBg002Main from "@/assets/eh-bg-002-main.jpeg";
import ehBg002_1 from "@/assets/eh-bg-002-1.jpeg";
import ehBg002_2 from "@/assets/eh-bg-002-2.jpeg";
import ehBg002_3 from "@/assets/eh-bg-002-3.jpeg";
import ehBg002_4 from "@/assets/eh-bg-002-4.jpeg";
import ehBg002_5 from "@/assets/eh-bg-002-5.jpeg";
import ehBg003Main from "@/assets/eh-bg-003-main.jpg";
import ehBg003_1 from "@/assets/eh-bg-003-1.jpg";
import ehBg003_2 from "@/assets/eh-bg-003-2.jpg";
import ehBg003_3 from "@/assets/eh-bg-003-3.jpg";
import ehBg003_4 from "@/assets/eh-bg-003-4.jpg";
import ehBg003_5 from "@/assets/eh-bg-003-5.jpg";
import ehBg004Main from "@/assets/eh-bg-004-main.jpg";
import ehBg004_1 from "@/assets/eh-bg-004-1.jpg";
import ehBg004_2 from "@/assets/eh-bg-004-2.jpg";
import ehBg004_3 from "@/assets/eh-bg-004-3.jpg";
import ehBg004_4 from "@/assets/eh-bg-004-4.jpg";
import ehBg004_5 from "@/assets/eh-bg-004-5.jpg";
import ehBg005Main from "@/assets/eh-bg-005-main.jpg";
import ehBg005_1 from "@/assets/eh-bg-005-1.jpg";
import ehBg005_2 from "@/assets/eh-bg-005-2.jpg";
import ehBg005_3 from "@/assets/eh-bg-005-3.jpg";
import ehBg005_4 from "@/assets/eh-bg-005-4.jpg";
import ehBg005_5 from "@/assets/eh-bg-005-5.jpg";

const productsData: Record<string, {
  name: string;
  productCode?: string;
  category: string;
  images: string[];
  description: string;
  material: string;
  colors: string[];
  sizes: string[];
  moq?: string;
  price?: string;
  priceTable?: { quantity: string; price: string }[];
  features: string[];
  applications: string[];
  overview: {
    intro?: string;
    materialBuild?: string;
    cleaningCare: string;
    handling: string;
    warning: string;
    additionalInfo: string;
  };
  specifications: {
    feature?: string;
    type?: string;
    weight?: string;
    thickness: string;
    certification: string;
    packaging: string;
    leadTime: string;
  };
}> = {
  "1": {
    name: "Everhide Premium Professional Racing Gauntlet Motorbike Leather Gloves",
    productCode: "EH-MBG-001",
    category: "Biker Gloves",
    images: [ehMbg001Main, ehMbg001_1, ehMbg001_2, ehMbg001_3, ehMbg001_4, ehMbg001_5, ehMbg001_6, ehMbg001_7],
    description: "Made from 100% genuine premium soft cowhide leather with a thickness of 0.7–0.8mm, designed for professional riders who demand superior protection, durability, and performance.\n\n• Front: Genuine soft cowhide leather with TPU molded knuckle armor\n• Back: Hard-shell TPU knuckle protection with reinforced finger guards\n• Leather Thickness: 0.7–0.8mm premium-grade cowhide\n• Liner: Thin poly-foam lining, 100% polyester for comfort and flexibility\n• Stretch Panels: Leather stretch panels under knuckles and thumb for enhanced mobility\n• Cuff: Extended protective gauntlet cuff with impact padding\n• Wrist Fit: Adjustable Velcro wrist closure for secure and precise fit\n• Palm Grip: Synthetic printed Amara reinforcement at palm for improved anti-slip grip\n• Air Vents: Air ventilation system at fingers for breathability\n• Touch Points: Touchscreen-compatible fabric at index finger and thumb\n• Logo Branding: Everhide logo branding at wrist area, front and back (branding customizable on buyer request)\n• Color Options: Available in different color combinations\n\nStandard Color Combinations:\nBlack / Red / White\nBlack / Orange / White\nBlack / Blue / White\nBlack / Grey / White\nOther colors can be implemented on the request of buyer\n\nSpecial Finishes & Custom Options:\nFull Black (All Black Racing Edition)\nCustom racing color combinations\nOEM private label production available\nCustom logo printing and embossing available for bulk orders\n\n• Sizes: From Small (S) to 3XL\n• Custom Orders: Special sizes possible at extra cost\n• Usage: Professional-grade hand protection for high-speed riding and racing\n• Origin: Made in Pakistan",
    material: "100% Genuine Cowhide Leather, TPU Hard-Shell Armor, Synthetic Printed Amara, Poly-foam Polyester Lining",
    colors: [
      "Black / Red / White",
      "Black / Orange / White",
      "Black / Blue / White",
      "Black / Grey / White",
      "Full Black (All Black Racing Edition)",
      "Custom racing color combinations (on request)",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "100% genuine soft cowhide leather construction",
      "Premium leather thickness 0.7–0.8mm",
      "Hard-shell TPU knuckle protection",
      "Reinforced finger protection system",
      "Leather stretch panels for flexibility",
      "Synthetic printed Amara palm reinforcement",
      "Touchscreen-compatible finger & thumb",
      "Adjustable Velcro wrist closure",
      "Extended protective gauntlet cuff",
      "Breathable air vents at fingers",
      "Ergonomic pre-curved finger design",
      "Double-stitched reinforced seams",
      "Polyester foam comfort lining",
      "Available in multiple color combinations",
      "Sizes from S to 3XL",
      "Custom sizes available",
    ],
    applications: [
      "Professional motorcycle racing",
      "High-speed sport riding",
      "Track day performance riding",
      "Winter/Autumn motorcycle riding",
      "Premium rider gear retail",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Premium Racing Gauntlet Leather Motorbike Gloves are engineered for professional riders and performance enthusiasts. Manufactured from 100% genuine cowhide leather, these gloves combine racing-level impact protection with ergonomic comfort. Featuring hard-shell knuckle armor, reinforced palm grip, and extended gauntlet coverage, they provide maximum safety and control during high-speed rides.\n\nDesigned for export markets and bulk buyers, Everhide gloves deliver durability, comfort, and customizable branding solutions for international B2B customers.",
      materialBuild: "Leather Thickness: 0.7–0.8mm | Material: Genuine Cowhide Leather | Palm: Synthetic Printed Amara | Lining: Poly-foam insulated polyester | Closure: Velcro adjustable wrist strap | Knuckle Guard: TPU molded hard-shell armor | Finger Protection: Reinforced TPU vents | Touch Points: Smartphone-compatible fabric",
      cleaningCare: "Wipe gently with a soft dry cloth. Do not machine wash. Avoid chemical cleaning. Keep away from direct heat or moisture. Store in a cool and dry place.",
      handling: "All Everhide gloves are carefully inspected before shipping to ensure export-grade quality standards. After extended use, inspect gloves for any cuts, tears, or seam damage before reuse.",
      warning: "These gloves are designed for motorcycle riding protection. They should not be used in environments where there is risk of entanglement in industrial machinery. Always use appropriate safety gear based on riding conditions.",
      additionalInfo: "Everhide Premium Racing Gauntlet Leather Motorbike Gloves are engineered for professional riders and performance enthusiasts. Manufactured from 100% genuine cowhide leather, these gloves combine racing-level impact protection with ergonomic comfort. Featuring hard-shell knuckle armor, reinforced palm grip, and extended gauntlet coverage, they provide maximum safety and control during high-speed rides. Designed for export markets and bulk buyers, Everhide gloves deliver durability, comfort, and customizable branding solutions for international B2B customers.",
    },
    specifications: {
      feature: "Long Cuff Motorcycle Racing Gloves",
      type: "Sport / Performance Riding Gloves",
      thickness: "0.7–0.8mm Genuine Cowhide Leather",
      certification: "All-Season (Sport Riding) | Hard TPU Knuckle + Finger Protectors + Palm Slider | Long Gauntlet Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "2": {
    name: "Everhide Premium Professional Racing Gauntlet Motorcycle Gloves with Palm Slider Armor",
    productCode: "EH-MBG-002",
    category: "Biker Gloves",
    images: [ehMbg002Main, ehMbg002_1, ehMbg002_2, ehMbg002_3, ehMbg002_4, ehMbg002_5, ehMbg002_6, ehMbg002_7],
    description: "Made from 100% genuine premium soft cowhide leather with a thickness of 0.7–0.8mm, engineered for professional riders seeking advanced protection, durability, and race-level performance.\n\n• Front: Genuine soft cowhide leather construction\n• Back: Reinforced backhand protection with molded armor panel\n• Leather Thickness: 0.7–0.8mm premium-grade cowhide\n• Liner: Thin poly-foam lining, 100% polyester for comfort and flexibility\n• Stretch Panels: Leather stretch panels under knuckles and thumb for enhanced mobility\n• Knuckle Protection: TPU molded knuckle protection at gauntlet\n• Palm Protection: Hard protective palm slider for impact and abrasion resistance\n• Finger Protection: Reinforced finger pods with air vents and leather tips\n• Air Vents: Ventilation system at fingers for breathability\n• Wrist Fit: Adjustable Velcro wrist closure for secure and snug fit\n• Palm Grip: Synthetic printed Amara reinforcement at palm for improved anti-slip grip\n• Touch Points: Touchscreen-compatible fabric at index finger and thumb\n• Logo Branding: Everhide logo branding at wrist area, front and back (custom branding available for OEM orders)\n• Color Options: Available in different color combinations\n\nStandard Color Combinations:\nBlack / Grey / White\nBlack / Red / White\nBlack / Blue / White\nFull Black Edition\nOther colors can be implemented on the request of buyer.\n\n• Sizes: From Small (S) to 3XL\n• Custom Orders: Special sizes and OEM customization possible at extra cost\n• Origin: Made in Pakistan",
    material: "100% Genuine Cowhide Leather, TPU Molded Knuckle Armor, Hard Palm Slider, Synthetic Printed Amara, Poly-foam Polyester Lining",
    colors: [
      "Black / Grey / White",
      "Black / Red / White",
      "Black / Blue / White",
      "Full Black Edition",
      "Custom colors (on buyer request)",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "100% genuine soft cowhide leather construction",
      "Premium leather thickness 0.7–0.8mm",
      "TPU molded knuckle protection at gauntlet",
      "Hard protective palm slider armor",
      "Reinforced finger pods with air vents and leather tips",
      "Reinforced backhand armor panel",
      "Leather stretch panels under knuckles and thumb",
      "Synthetic printed Amara palm reinforcement",
      "Touchscreen-compatible index finger & thumb",
      "Adjustable Velcro wrist closure",
      "Ventilation system at fingers for breathability",
      "Poly-foam 100% polyester comfort lining",
      "Long gauntlet cuff for wrist coverage",
      "Available in multiple color combinations",
      "Sizes from S to 3XL",
      "OEM custom branding & sizes available",
    ],
    applications: [
      "Professional motorcycle racing",
      "High-speed sport and track riding",
      "Performance street riding",
      "Track day and circuit use",
      "Premium rider gear retail",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Premium Professional Racing Gauntlet Motorcycle Gloves with Palm Slider Armor are engineered for professional riders demanding maximum impact protection and race-level performance. Built from 100% genuine cowhide leather and reinforced with TPU molded knuckle armor and a hard palm slider, these gloves deliver superior abrasion resistance and crash protection.\n\nDesigned for export markets and bulk buyers, they combine durability, ergonomic comfort, and customizable OEM branding for international B2B customers.",
      materialBuild: "Leather Thickness: 0.7–0.8mm | Material: Genuine Cowhide Leather | Palm: Synthetic Printed Amara with Hard Palm Slider | Lining: Poly-foam 100% polyester | Closure: Velcro adjustable wrist strap | Knuckle Guard: TPU molded armor | Finger Protection: Reinforced finger pods with air vents | Touch Points: Smartphone-compatible fabric",
      cleaningCare: "Wipe gently with a soft dry cloth. Do not machine wash. Avoid chemical cleaning. Keep away from direct heat or moisture. Store in a cool and dry place.",
      handling: "All Everhide gloves are carefully inspected before shipping to ensure export-grade quality standards. After extended use, inspect gloves for any cuts, tears, or seam damage before reuse.",
      warning: "These gloves are designed for motorcycle riding protection. They should not be used in environments where there is risk of entanglement in industrial machinery. Always use appropriate safety gear based on riding conditions.",
      additionalInfo: "Everhide Premium Professional Racing Gauntlet Motorcycle Gloves with Palm Slider Armor are engineered for professional riders demanding maximum impact protection and race-level performance. Built from 100% genuine cowhide leather and reinforced with TPU molded knuckle armor and a hard palm slider, these gloves deliver superior abrasion resistance and crash protection. Designed for export markets and bulk buyers, they combine durability, ergonomic comfort, and customizable OEM branding for international B2B customers.",
    },
    specifications: {
      feature: "Long Cuff Motorcycle Racing Gloves",
      type: "Sport / Racing Riding Gloves",
      thickness: "0.7–0.8mm Genuine Cowhide Leather",
      certification: "All-Season (Performance Riding) | Hard Knuckle Protector + Finger Armor + Palm & Wrist Protection | Long Gauntlet Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "3": {
    name: "Everhide Premium Cowhide Sport Motorcycle Gloves with Carbon Knuckle Protection",
    productCode: "EH-MBG-003",
    category: "Biker Gloves",
    images: [ehMbg003Main, ehMbg003_1, ehMbg003_2, ehMbg003_3, ehMbg003_4, ehMbg003_5, ehMbg003_6, ehMbg003_7],
    description: "Made from 100% genuine premium cowhide leather with a thickness of 0.7–0.9mm, designed for sport riding, daily commuting, and warm-weather motorcycle use.\n\n• Front: Genuine cowhide leather with perforation panels for airflow\n• Back: Polyester mesh outer shell combined with leather reinforcement\n• Leather Thickness: 0.7–0.9mm premium-grade cowhide\n• Knuckle Protection: Carbon laminated knuckle protector for impact resistance\n• Finger Design: Pre-curved fingers for natural riding position\n• Ventilation: Molded air vents at fingers and perforated leather panels\n• Liner: Thin polyester lining for comfort\n• Wrist Fit: Adjustable Velcro wrist flap for secure fit\n• Touch Points: Touchscreen-compatible fabric for smartphone use\n• Stitching: Blue contrast thread stitching and piping (custom colors available)\n• Logo Branding: Branding at wrist area (custom OEM branding available)\n• Color Options: Available in different color combinations\n\nStandard Color Combinations:\nBlack / Orange\nBlack / Red\nBlack / Blue\nBlack / Grey\nBlack / Yellow\nSpecial Finishes & Custom Options are available on the request of the buyer.\n\n• Sizes: XS to 3XL\n• Custom Orders: Special sizes and color customization possible for bulk orders\n• Origin: Made in Pakistan",
    material: "100% Genuine Cowhide Leather + Polyester Mesh Panels, Carbon Laminated Knuckle Shell, Polyester Lining",
    colors: [
      "Black / Orange",
      "Black / Red",
      "Black / Blue",
      "Black / Grey",
      "Black / Yellow",
      "Custom colors (on buyer request)",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "100% genuine cowhide leather construction",
      "Premium leather thickness 0.7–0.9mm",
      "Carbon laminated knuckle protection",
      "Polyester mesh ventilation panels",
      "Perforated leather airflow design",
      "Molded air vents at fingers",
      "Pre-curved ergonomic finger construction",
      "Adjustable Velcro wrist closure",
      "Touchscreen-compatible finger fabric",
      "Thin polyester comfort lining",
      "Contrast stitching and piping (customizable)",
      "Available in multiple color combinations",
      "Sizes from XS to 3XL",
    ],
    applications: [
      "Sport motorcycle riding",
      "Summer and warm-weather riding",
      "Daily commuting",
      "Touring and travel",
      "Motorcycle gear retail",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Premium Leather Sport Motorcycle Gloves are manufactured from 100% genuine cowhide leather and designed for comfort-focused performance riding. These gloves combine breathable mesh construction with carbon knuckle protection to provide balanced airflow and reliable impact resistance during daily and sport riding.\n\nFeaturing ergonomic pre-curved fingers, molded air vents, and adjustable wrist closure, they ensure improved grip control and reduced hand fatigue. Designed for export markets and bulk buyers, Everhide gloves deliver durability, ventilation, and customizable design options suitable for international B2B distribution and private label production.",
      materialBuild: "Leather Thickness: 0.7–0.9mm | Material: Genuine Cowhide Leather + Polyester Mesh | Knuckle Guard: Carbon laminated protective shell | Ventilation: Mesh outer panel + molded finger vents | Lining: Thin polyester lining | Closure: Velcro adjustable wrist flap | Touch Points: Smartphone-compatible fabric",
      cleaningCare: "Wipe gently with a soft dry cloth. Avoid machine washing or chemical cleaning. Keep away from direct heat or moisture. Store in a cool and dry place. Do not expose to prolonged sunlight.",
      handling: "All Everhide gloves are carefully inspected before shipping to ensure premium export quality standards. After extended use or cleaning, examine the gloves thoroughly to confirm they remain free from cuts, tears, or stitching damage.",
      warning: "Gloves should not be worn in environments where there is risk of entanglement in machinery or mechanical parts. Always use appropriate protective gear according to your riding conditions.",
      additionalInfo: "Everhide Premium Leather Sport Motorcycle Gloves are manufactured from 100% genuine cowhide leather and designed for comfort-focused performance riding. These gloves combine breathable mesh construction with carbon knuckle protection to provide balanced airflow and reliable impact resistance during daily and sport riding. Featuring ergonomic pre-curved fingers, molded air vents, and adjustable wrist closure, they ensure improved grip control and reduced hand fatigue. Designed for export markets and bulk buyers, Everhide gloves deliver durability, ventilation, and customizable design options suitable for international B2B distribution and private label production.",
    },
    specifications: {
      feature: "Leather Motorcycle Riding Gloves",
      type: "Street / Sport Riding Gloves",
      thickness: "0.7–0.9mm Premium Cowhide Leather + Mesh Panels",
      certification: "Summer / Mild Weather | Carbon Fiber Knuckle Protection + Finger Impact Guards | Short Adjustable Velcro Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "4": {
    name: "Everhide Premium Motorbike Winter/Autumn Riding Gloves",
    productCode: "EH-MBG-004",
    category: "Biker Gloves",
    images: [ehMbg004Main, ehMbg004_1, ehMbg004_2, ehMbg004_3, ehMbg004_4, ehMbg004_5, ehMbg004_6, ehMbg004_7],
    description: "Made from 100% genuine premium cowhide leather, thickness 0.7–0.8mm, designed for superior comfort, safety, and long-lasting durability.\n\n• Front: Genuine soft cowhide leather construction\n• Back: Decorative stitching design at the back of the hand\n• Leather Thickness: 0.7–0.8mm premium-grade cowhide\n• Liner: Warm and comfortable thin poly-foam lining, 100% polyester\n• Cuff: Extended protective gauntlet cuff for added wrist safety\n• Wrist Fit: Adjustable Velcro wrist closure for a secure and snug fit\n• Touch Points: Touchscreen-compatible fabric at index finger and thumb\n• Palm Grip: Synthetic printed Amara material at palm for better anti-slip grip\n• Air Vents: Perforated air vents on fingers for enhanced breathability\n• Logo Branding: Everhide logo branding on wrist area, front and back (logo branding can be changed if the buyer wants)\n• Color Options: Available in different color combinations\n\nStandard Color Combinations:\nBlack / Orange\nBlack / Red\nBlack / Blue\nBlack / Grey\nBlack / Yellow\n\nSpecial Finishes & Custom Options:\nFull Black (All Black – Stealth Look)\nCamouflage Variations (on request)\nStonewashed Leather Finishes (available in all base colors)\nCustom color combinations and finishes can be developed on buyer request for bulk orders.\n\n• Sizes: From Small (S) to 3XL\n• Custom Orders: Special sizes and customization possible for an extra cost\n• Usage: Friendly and reliable hand cover during severe winter rides\n• Origin: Made in Pakistan",
    material: "100% Genuine Cowhide Leather + Carbon Fiber Knuckle Protection, Synthetic Printed Amara Palm, Poly-foam Polyester Lining",
    colors: [
      "Black / Orange",
      "Black / Red",
      "Black / Blue",
      "Black / Grey",
      "Black / Yellow",
      "Full Black (Stealth)",
      "Camouflage (on request)",
      "Stonewashed Finishes",
      "Custom colors (on buyer request)",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "100% genuine soft cowhide leather construction",
      "Premium leather thickness 0.7–0.8mm",
      "TPU molded knuckle protection on the gauntlet",
      "Breathable air vents at fingers",
      "Leather stretch panels under knuckles and thumb",
      "Synthetic printed Amara palm for superior grip",
      "Touchscreen-compatible finger and thumb",
      "Adjustable Velcro closure at wrist",
      "Ergonomic pre-curved finger design",
      "Durable double-stitched seams",
      "Skin-friendly polyester lining",
      "Color option: Black / Orange",
      "Sizes available from S to 3XL",
      "Custom sizes possible for extra cost",
    ],
    applications: [
      "Winter/Autumn motorcycle riding",
      "Bicycle riding and cycling",
      "Cold-weather outdoor activities",
      "Driving and travel",
      "Commuting in cold climates",
      "Professional rider gear retail",
      "B2B resale and wholesale markets",
    ],
    overview: {
      intro: "Everhide Premium Leather Motorbike Gloves are made from 100% genuine soft cowhide leather, designed specifically for winter riding conditions. These gloves deliver reliable warmth, strong grip control, and professional-grade protection for everyday riders and international bulk buyers. Combining rugged durability with modern functionality, Everhide gloves provide comfortable and secure hand coverage during severe cold-weather rides.",
      materialBuild: "Leather Thickness: 0.7–0.8mm | Material: Genuine Cowhide Leather | Palm: Synthetic Printed Amara | Lining: Poly-foam insulated polyester | Closure: Velcro adjustable wrist strap | Knuckle Guard: TPU molded armor | Touch Points: Smartphone-compatible fabric",
      cleaningCare: "Wipe gently with a soft dry cloth. Avoid machine washing or chemical cleaning. Keep away from direct heat or moisture. Store in a cool and dry place. Do not expose to prolonged sunlight.",
      handling: "All Everhide gloves are carefully inspected before shipping to ensure premium export quality. After extended use or cleaning, examine the gloves thoroughly to confirm they remain free from cuts, tears, or stitching damage.",
      warning: "Gloves should not be worn in environments where there is a risk of getting caught in machinery or mechanical parts. Always use appropriate protective gear according to your working or riding conditions.",
      additionalInfo: "Everhide Premium Leather Motorbike Gloves are made from 100% genuine soft cowhide leather, designed specifically for winter riding conditions. These gloves deliver reliable warmth, strong grip control, and professional-grade protection for everyday riders and international bulk buyers. Combining rugged durability with modern functionality, Everhide gloves provide comfortable and secure hand coverage during severe cold-weather rides.",
    },
    specifications: {
      feature: "Premium Leather Motorcycle Riding Gloves",
      type: "Racing / Sport Touring Gloves",
      thickness: "0.7–0.8mm Genuine Cowhide Leather + Carbon Fiber Knuckle Protection",
      certification: "All-Season / Moderate to Cold Weather | Hard Carbon Knuckle Armor + Reinforced Finger & Palm Protection | Extended Protective Cuff with Adjustable Wrist Strap",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "5": {
    name: "Everhide Premium Short Cuff Leather Motorcycle Gloves with Dual TPU Knuckle & Palm Slider Protection",
    productCode: "EH-MBG-005",
    category: "Biker Gloves",
    images: [ehMbg005Main, ehMbg005_1, ehMbg005_2, ehMbg005_3, ehMbg005_4, ehMbg005_5, ehMbg005_6, ehMbg005_7],
    description: "Manufactured from 100% genuine soft cowhide leather with a thickness of 0.7–0.8mm, designed for sport riding, daily performance use, and impact protection.\n\n• Front: Combination of genuine cowhide leather, 4-way stretch fabric, and synthetic Amara\n• Back: Reinforced leather shell with dual TPU knuckle protection\n• Leather Thickness: 0.7–0.8mm premium-grade cowhide\n• Lining: Thin polyester lining with foam padding for comfort\n• Stretch Panels: 4-way stretch fabric between fingers for relaxed fit and flexibility\n• Knuckle Protection: Dual TPU knuckle protectors with integrated air vents\n• Palm Protection: Hard palm slider for impact resistance\n• Grip Area: Synthetic printed Amara palm reinforcement for improved control\n• Wrist Protection: Leather bulky padding at wrist for impact absorption\n• Closure: Adjustable Velcro wrist strap for secure fit\n• Reflective Details: S/Lite reflective piping for visibility under light\n• Touch Points: Touchscreen-compatible fabric at finger and thumb\n• Logo Branding: Branding at wrist area (front & back – OEM customization available)\n• Color Options: Available in different color combinations\n\nStandard Color Combinations:\nBlack / Grey\nBlack / Red\nBlack / Blue\nBlack / Orange\nBlack / Yellow\n\nSpecial Finishes & Custom Options: Special colors can be made on the request of buyers\n\n• Sizes: S to 3XL\n• Custom Orders: Special sizes available at additional cost\n• Origin: Made in Pakistan",
    material: "100% Genuine Cowhide Leather + 4-Way Stretch Fabric + Synthetic Amara, Dual TPU Knuckle Protection, Foam-Padded Polyester Lining",
    colors: [
      "Black / Grey",
      "Black / Red",
      "Black / Blue",
      "Black / Orange",
      "Black / Yellow",
      "Custom colors (on buyer request)",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "100% genuine soft cowhide leather",
      "Leather thickness 0.7–0.8mm",
      "4-way stretch fabric outer shell",
      "Dual TPU knuckle protection",
      "Hard protective palm slider",
      "Air vents at fingers and under knuckle",
      "Synthetic printed Amara palm reinforcement",
      "Leather impact padding at wrist",
      "S/Lite reflective piping",
      "Pre-shaped ergonomic construction",
      "Adjustable Velcro wrist closure",
      "Touchscreen-compatible finger & thumb",
      "Foam padded polyester lining",
      "Available in multiple color combinations",
      "Sizes from S to 3XL",
      "Custom sizes available",
    ],
    applications: [
      "Sport motorcycle riding",
      "Daily commuting",
      "Touring and travel",
      "All-season moderate weather riding",
      "Motorcycle gear retail",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Premium Short Cuff Leather Motorcycle Gloves are engineered for riders who require a balance of flexibility, protection, and everyday performance. Manufactured from genuine soft cowhide leather combined with 4-way stretch fabric, these gloves provide enhanced comfort, airflow, and natural hand movement during riding. Equipped with dual TPU knuckle protection, hard palm slider, and reinforced wrist padding, they offer reliable impact resistance for sport and daily use. Designed for export markets and bulk buyers, Everhide gloves deliver durability, functional performance, and customizable branding solutions for international B2B distribution.",
      materialBuild: "Leather Thickness: 0.7–0.8mm | Material: Genuine Cowhide Leather + 4-Way Stretch Fabric + Synthetic Amara | Knuckle Guard: Dual TPU molded protectors | Palm: Synthetic printed Amara + Hard slider | Lining: Polyester with foam padding | Closure: Adjustable Velcro wrist strap | Reflective: S/Lite reflective piping",
      cleaningCare: "Wipe gently with a soft dry cloth. Avoid machine washing or chemical cleaning. Keep away from direct heat or moisture. Store in a cool and dry place. Do not expose to prolonged sunlight.",
      handling: "All Everhide gloves are carefully inspected before shipping to ensure premium export quality standards. After extended use or cleaning, inspect thoroughly to confirm they remain free from cuts, tears, or stitching damage.",
      warning: "Gloves should not be worn in environments where there is risk of entanglement in machinery or mechanical parts. Always use appropriate protective gear according to riding conditions.",
      additionalInfo: "Everhide Premium Short Cuff Leather Motorcycle Gloves are engineered for riders who require a balance of flexibility, protection, and everyday performance. Manufactured from genuine soft cowhide leather combined with 4-way stretch fabric, these gloves provide enhanced comfort, airflow, and natural hand movement during riding. Equipped with dual TPU knuckle protection, hard palm slider, and reinforced wrist padding, they offer reliable impact resistance for sport and daily use. Designed for export markets and bulk buyers, Everhide gloves deliver durability, functional performance, and customizable branding solutions for international B2B distribution.",
    },
    specifications: {
      feature: "Short Cuff Motorcycle Gloves",
      type: "Sport / Performance Riding Gloves",
      thickness: "0.7–0.8mm Genuine Cowhide Leather + 4-Way Stretch Fabric",
      certification: "All-Season (Moderate Weather) | TPU Knuckle + Palm Slider | Short Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "6": {
    name: "Everhide Premium Summer Motorcycle Gloves with Air Mesh Panels & Molded Knuckle Protection",
    productCode: "EH-MBG-006",
    category: "Biker Gloves",
    images: [ehMbg006Main, ehMbg006_1, ehMbg006_2, ehMbg006_3, ehMbg006_4, ehMbg006_5, ehMbg006_6, ehMbg006_7],
    description: "Manufactured using premium leather combined with breathable air mesh, Amara, and neoprene, these gloves are specially engineered for summer riding performance, enhanced airflow, and lightweight comfort.\n\n• Front: Combination of leather, air mesh panels, and molded knuckle protection\n• Back: Leather & air mesh construction for ventilation and flexibility\n• Palm: Synthetic printed Amara for improved grip and control\n• Lining: Thin polyester lining with foam padding\n• Ventilation: Air mesh panels across key areas for airflow during hot weather\n• Knuckle Protection: Molded knuckle protector at gauntlet area\n• Finger Protection: Leather air vents at fingers\n• Closure: Adjustable neoprene Velcro wrist strap\n• Fit: Relaxed ergonomic construction for riding comfort\n• Touch Points: Touchscreen-compatible fabric at finger & thumb\n• Logo Branding: Branding at wrist area (OEM customization available)\n• Color Options: Available in different color combinations\n\nStandard Color Combinations:\nBlack / Grey\nBlack / Red\nBlack / Blue\nBlack / Orange\nBlack / Yellow\n\nSpecial Finishes & Custom Options: Special colors can be made on the request of buyers\n\n• Sizes: S to 3XL\n• Custom Orders: Special sizes available at additional cost\n• Origin: Made in Pakistan",
    material: "Leather + Air Mesh + Amara + Neoprene, Molded Knuckle Protector, Foam-Padded Polyester Lining",
    colors: [
      "Black / Grey",
      "Black / Red",
      "Black / Blue",
      "Black / Orange",
      "Black / Yellow",
      "Custom colors (on buyer request)",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "Leather & breathable air mesh outer shell",
      "Molded knuckle protection",
      "Air mesh ventilation panels",
      "Leather finger air vents",
      "Synthetic printed Amara palm reinforcement",
      "Neoprene adjustable wrist closure",
      "Relaxed ergonomic fit",
      "Touchscreen-compatible finger & thumb",
      "Foam padded polyester lining",
      "Available in multiple color combinations",
      "Sizes from S to 3XL",
      "Custom sizes available",
    ],
    applications: [
      "Summer motorcycle riding",
      "Daily commuting",
      "Urban riding",
      "Touring in hot climates",
      "Motorcycle gear retail",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Premium Summer Motorcycle Gloves are designed specifically for warm-weather riding, offering maximum breathability, lightweight comfort, and essential protection.\n\nConstructed from a combination of leather, air mesh, and neoprene, these gloves provide excellent ventilation without compromising durability. The integrated molded knuckle protection enhances rider safety, while air mesh panels ensure continuous airflow during hot summer rides.\n\nDesigned for international B2B buyers and export markets, these gloves combine performance, comfort, and OEM customization capabilities for motorcycle gear distributors worldwide.",
      materialBuild: "Outer Shell: Leather + Air Mesh + Amara + Neoprene | Palm: Synthetic Printed Amara | Knuckle Guard: Molded Knuckle Protector | Lining: Polyester with Foam Padding | Closure: Adjustable Neoprene Velcro Strap | Ventilation: Air Mesh Panels & Leather Finger Vents",
      cleaningCare: "Wipe gently with a soft dry cloth. Avoid machine washing or chemical cleaning. Keep away from direct heat or moisture. Store in a cool and dry place. Do not expose to prolonged sunlight.",
      handling: "All Everhide gloves are carefully inspected before shipping to ensure premium export quality standards. After extended use or cleaning, inspect thoroughly to confirm they remain free from cuts, tears, or stitching damage.",
      warning: "Gloves should not be worn in environments where there is risk of entanglement in machinery or mechanical parts. Always use appropriate protective gear according to riding conditions.",
      additionalInfo: "Everhide Premium Summer Motorcycle Gloves are designed specifically for warm-weather riding, offering maximum breathability, lightweight comfort, and essential protection. Constructed from a combination of leather, air mesh, and neoprene, these gloves provide excellent ventilation without compromising durability. The integrated molded knuckle protection enhances rider safety, while air mesh panels ensure continuous airflow during hot summer rides. Designed for international B2B buyers and export markets, these gloves combine performance, comfort, and OEM customization capabilities for motorcycle gear distributors worldwide.",
    },
    specifications: {
      feature: "Summer Motorcycle Gloves",
      type: "Lightweight / Performance Riding Gloves",
      thickness: "Leather + Air Mesh + Amara + Neoprene Construction",
      certification: "Summer | Molded Knuckle Protection | Short Cuff | High Airflow Mesh Panels",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "7": {
    name: "Everhide Premium Perforated All Season Short Cuff Leather Motorcycle Gloves",
    productCode: "EH-MBG-007",
    category: "Biker Gloves",
    images: [ehMbg007Main, ehMbg007_1, ehMbg007_2, ehMbg007_3, ehMbg007_4, ehMbg007_5, ehMbg007_6, ehMbg007_7],
    description: "Manufactured from 100% genuine soft cowhide leather with a thickness of 0.6–0.7mm, specially designed for summer motorcycle riding and warm-weather comfort.\n\n• Front: Fully perforated genuine cowhide leather for enhanced airflow\n• Back: Perforated leather panel across entire back of hand\n• Leather Thickness: 0.6–0.7mm premium-grade cowhide\n• Knuckle Protection: Laminated rubber knuckle protection\n• Finger Tips: Rubber laminated protection at finger tips\n• Palm Area: Soft padded reinforcement at palm for comfort and grip\n• Lining: Very thin half lining for lightweight feel\n• Finger Design: Pre-curved ergonomic fingers for improved fit\n• Closure: Adjustable Velcro wrist strap\n• Touch Points: Touchscreen-compatible fabric for smartphone use\n• Color Options: Available in different color combinations\n\nStandard Color Combinations:\nBlack\nBrown\nNavy Blue\nBurgundy / Merlot\nMocha Mousse\nChestnut Brown\nElectric Blue\nDeep Forest\nPewter Grey\nApricot Crush\nItalian Plum\nOther colors can also be made on the request of buyer.\n\n• Sizes: XS to 3XL\n• Custom Orders: Special sizes available at additional cost\n• Origin: Made in Pakistan",
    material: "100% Genuine Cowhide Leather, Laminated Rubber Knuckle Protection, Soft Padded Palm, Thin Half Polyester Lining",
    colors: [
      "Black",
      "Brown",
      "Navy Blue",
      "Burgundy / Merlot",
      "Mocha Mousse",
      "Chestnut Brown",
      "Electric Blue",
      "Deep Forest",
      "Pewter Grey",
      "Apricot Crush",
      "Italian Plum",
      "Custom colors (on buyer request)",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "100% genuine cowhide leather",
      "Leather thickness 0.6–0.7mm",
      "Full perforated backhand panel",
      "Pre-curved ergonomic finger construction",
      "Laminated rubber knuckle protection",
      "Rubber laminated finger tips",
      "Soft palm padding reinforcement",
      "Very thin half lining",
      "Adjustable Velcro wrist closure",
      "Touchscreen-compatible finger",
      "Lightweight summer design",
      "Available in multiple color combinations",
      "Sizes from XS to 3XL",
    ],
    applications: [
      "Summer motorcycle riding",
      "Urban commuting",
      "Warm-weather touring",
      "Daily riding use",
      "Motorcycle gear retail",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Premium Perforated Leather Motorcycle Gloves are engineered for summer riding conditions, offering maximum ventilation, lightweight construction, and everyday comfort.\n\nManufactured from 100% genuine cowhide leather with full perforation across the backhand and fingers, these gloves provide excellent airflow during hot weather rides. Laminated rubber knuckle protection and soft palm padding deliver essential impact resistance without adding bulk.\n\nDesigned for export markets and bulk buyers, Everhide gloves combine breathable construction, ergonomic comfort, and professional-grade finishing suitable for international B2B distribution.",
      materialBuild: "Leather Thickness: 0.6–0.7mm | Material: Genuine Cowhide Leather | Knuckle Guard: Laminated Rubber Protection | Palm: Soft padded reinforcement | Lining: Thin half polyester lining | Closure: Adjustable Velcro wrist strap | Ventilation: Full perforated leather construction",
      cleaningCare: "Wipe gently with a soft dry cloth. Avoid machine washing or chemical cleaning. Keep away from direct heat or moisture. Store in a cool and dry place. Do not expose to prolonged sunlight.",
      handling: "All Everhide gloves are carefully inspected before shipping to ensure premium export quality standards. After extended use, inspect gloves to confirm they remain free from cuts, tears, or stitching damage.",
      warning: "Gloves should not be worn in environments where there is risk of entanglement in machinery or mechanical parts. Always use appropriate protective gear according to riding conditions.",
      additionalInfo: "Everhide Premium Perforated Leather Motorcycle Gloves are engineered for summer riding conditions, offering maximum ventilation, lightweight construction, and everyday comfort. Manufactured from 100% genuine cowhide leather with full perforation across the backhand and fingers, these gloves provide excellent airflow during hot weather rides. Laminated rubber knuckle protection and soft palm padding deliver essential impact resistance without adding bulk. Designed for export markets and bulk buyers, Everhide gloves combine breathable construction, ergonomic comfort, and professional-grade finishing suitable for international B2B distribution.",
    },
    specifications: {
      feature: "Short Cuff Motorcycle Gloves",
      type: "Summer Riding Gloves",
      thickness: "0.6–0.7mm Genuine Cowhide Leather",
      certification: "Summer | Laminated Rubber Knuckle | Short Cuff | Full Perforated Leather",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "8": {
    name: "Everhide Premium Waterproof Motorbike Winter / All-Weather Riding Gloves",
    productCode: "EH-MBG-008",
    category: "Biker Gloves",
    images: [ehMbg008Main, ehMbg008_1, ehMbg008_2, ehMbg008_3, ehMbg008_4, ehMbg008_5, ehMbg008_6, ehMbg008_7],
    description: "Made from 100% genuine premium cowhide leather, thickness 0.7–0.8mm, combined with technical fabrics and advanced waterproof protection for superior comfort, safety, and durability in cold and wet riding conditions.\n\n• Front: Genuine soft cowhide leather combined with 600D polyester fabric and soft-shell panels for durability and flexibility\n• Back: Protective design with molded knuckle armor and reinforced stitching\n• Leather Thickness: 0.7–0.8mm premium-grade cowhide\n• Fabric Composition: 600D polyester fabric, soft shell, and synthetic Amara used at different functional areas\n• Liner: Heavy poly-fill + foam lining, 100% polyester, for enhanced warmth and insulation\n• Waterproofing: Hipora breathable membrane providing 100% waterproof protection while maintaining airflow\n• Protection: Molded knuckle protection at gauntlet, fingers, and palm to absorb impact during riding\n• Wrist Fit: Double Velcro closure system at wrist area for a secure and adjustable fit\n• Palm Grip: Logo-printed synthetic Amara palm for improved anti-slip grip and control\n• Touch Points: Touchscreen-compatible fabric at finger and thumb for smartphone access\n• Logo Branding: Everhide logo branding at wrist area, front, and back\n• Color Options: Available in different color combinations\n\nStandard Color Combinations:\nBlack / Orange\nBlack / Red\nBlack / Blue\nBlack / Grey\nBlack / Yellow\n\nSpecial Finishes & Custom Options:\nFull Black (All Black – Stealth Look)\nCamouflage Variations (on request)\nStonewashed Leather Finishes (available in all base colors)\nCustom color combinations and finishes can be developed on buyer request for bulk orders.\n\n• Sizes: From Small (S) to 3XL\n• Custom Orders: Special sizes and customization possible for an extra cost\n• Usage: Reliable and protective hand cover for winter, rainy, and cold-weather riding\n• Origin: Made in Pakistan",
    material: "Genuine Cowhide Leather, 600D Polyester Fabric, Soft Shell, Synthetic Amara, Hipora Waterproof Membrane, Heavy Poly-fill + Foam Polyester Lining",
    colors: [
      "Black / Orange",
      "Black / Red",
      "Black / Blue",
      "Black / Grey",
      "Black / Yellow",
      "Full Black (Stealth Look)",
      "Camouflage Variations (on request)",
      "Stonewashed Leather Finishes",
      "Custom color combinations (bulk orders)",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "100% genuine premium cowhide leather",
      "Leather thickness 0.7–0.8mm",
      "600D polyester and soft-shell functional panels",
      "Hipora breathable waterproof membrane",
      "Heavy poly-fill + foam insulated lining",
      "Molded knuckle, finger, and palm protection",
      "Double Velcro wrist closure system",
      "Logo-printed synthetic Amara anti-slip palm",
      "Touchscreen-compatible finger and thumb",
      "Extended gauntlet cuff coverage",
      "Available in multiple color combinations",
      "Sizes from S to 3XL",
    ],
    applications: [
      "Winter motorcycle riding",
      "Rainy and wet-weather commuting",
      "Cold-weather touring",
      "Performance and track-oriented riding",
      "Motorcycle gear retail",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Premium Waterproof Motorbike Winter / All-Weather Riding Gloves are built for riders who need dependable warmth, waterproofing, and impact protection in cold and wet conditions. Combining genuine cowhide leather with 600D polyester, soft-shell panels, and a Hipora breathable membrane, these gloves are designed to keep hands protected without sacrificing mobility or control.\n\nHeavy poly-fill insulation and foam lining help retain warmth, while molded armor at the knuckle, fingers, and palm provides reliable protection during demanding rides. Designed for export markets and bulk buyers, these gloves offer professional construction, OEM branding flexibility, and dependable performance for international B2B distribution.",
      materialBuild: "Leather Thickness: 0.7–0.8mm | Material: Genuine Cowhide Leather + 600D Polyester + Soft Shell + Synthetic Amara | Waterproofing: Hipora breathable membrane | Lining: Heavy poly-fill + foam 100% polyester | Protection: Molded knuckle, finger, and palm armor | Closure: Dual Velcro wrist straps | Palm: Logo-printed anti-slip Amara",
      cleaningCare: "Wipe gently with a soft dry cloth. Avoid machine washing or chemical cleaning. Keep away from direct heat or moisture. Store in a cool and dry place. Do not expose to prolonged sunlight.",
      handling: "All Everhide gloves are carefully inspected before shipping to ensure premium export quality standards. After extended use, inspect gloves to confirm they remain free from cuts, tears, or stitching damage.",
      warning: "Gloves should not be worn in environments where there is risk of entanglement in machinery or mechanical parts. Always use appropriate protective gear according to riding conditions.",
      additionalInfo: "Everhide Premium Waterproof Motorbike Winter / All-Weather Riding Gloves combine genuine premium cowhide leather, technical weatherproof materials, insulated comfort, and reinforced impact protection for dependable use in winter and wet-weather riding. They are developed for professional retail, private label, and global B2B distribution needs.",
    },
    specifications: {
      feature: "Long Cuff Motorcycle Racing Gloves",
      type: "Professional / Track Riding Gloves",
      thickness: "0.7–0.8mm Genuine Cowhide Leather",
      certification: "All-Winter (Performance Riding) | Hard Knuckle Armor + Finger Protection + Reinforced Palm | Extended Gauntlet Cuff with Dual Strap Closure",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "9": {
    name: "Everhide Premium Fabric Cycling & Biker Gloves with Rubber Knuckle Protection",
    productCode: "EH-MBG-009",
    category: "Biker Gloves",
    images: [ehMbg009Main, ehMbg009_1, ehMbg009_2, ehMbg009_3, ehMbg009_4, ehMbg009_5, ehMbg009_6, ehMbg009_7],
    description: "Manufactured using high-quality 4-way stretch fabric combined with Amara, neoprene, and leather reinforcements, designed for both motorcycle riding and cycling performance in summer conditions.\n\n• Front: 4-way stretch fabric with leather reinforcement panels under knuckle\n• Back: Stretch fabric construction with silicone printed rubber molded knuckle protection\n• Outer Shell: Combination of 4-way stretch fabric, Amara, neoprene & leather\n• Palm: Fully constructed from Amara fabric with contrast stitching for enhanced grip\n• Finger Protection: Rubber molded protective tips\n• Stretch Panels: Stretch fabric between fingers for improved flexibility and comfort\n• Lining: Thin polyester foam lining suitable for summer use\n• Closure: Adjustable Velcro wrist strap made of Amara\n• Touch Points: Touchscreen-compatible fabric at finger and thumb\n• Logo Branding: Branding at wrist area (OEM customization available)\n• Color Options: Available in different color combinations\n\nStandard Color Combinations:\nGrey / Green\nBlack / Grey\nBlack / Red\nBlack / Blue\nOther colors can be developed on buyer request\n\nSpecial Finishes & Custom Options:\nCustom colors and branding available for bulk orders\n\n• Sizes: S to 3XL\n• Custom Orders: Special sizes available at additional cost\n• Origin: Made in Pakistan",
    material: "4-Way Stretch Fabric, Amara, Neoprene, Leather Reinforcements, Rubber Molded Protection, Thin Polyester Foam Lining",
    colors: [
      "Grey / Green",
      "Black / Grey",
      "Black / Red",
      "Black / Blue",
      "Custom colors and branding (bulk orders)",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "4-way stretch fabric outer shell",
      "Combination of Amara, neoprene & leather construction",
      "Rubber molded knuckle protection",
      "Rubber molded finger protection tips",
      "Leather panels under knuckle area",
      "Full Amara palm with contrast stitching",
      "Stretch fabric between fingers for flexibility",
      "Adjustable Velcro wrist closure",
      "Thin polyester foam lining",
      "Touchscreen-compatible finger & thumb",
      "Available in multiple color combinations",
      "Sizes from S to 3XL",
      "Custom sizes available",
    ],
    applications: [
      "Motorcycle riding",
      "Cycling",
      "Urban commuting",
      "Summer riding conditions",
      "Outdoor sports activities",
      "Motorcycle & cycling gear retail",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Premium Fabric Cycling & Biker Gloves are engineered for riders who require lightweight comfort, flexibility, and reliable protection for both motorcycle riding and cycling activities. Manufactured using 4-way stretch fabric combined with Amara, neoprene, and leather reinforcement panels, these gloves provide enhanced airflow, natural hand movement, and breathable comfort during summer use.\n\nEquipped with rubber molded knuckle protection, reinforced finger tips, and full Amara palm construction, they offer dependable grip control and impact resistance for daily riding. Designed for export markets and bulk buyers, Everhide gloves deliver durability, functional performance, and customizable branding solutions for international B2B distribution.",
      materialBuild: "Material: 4-Way Stretch Fabric + Amara + Neoprene + Leather | Palm: Full Amara Construction | Knuckle Guard: Rubber Molded Protection | Finger Protection: Rubber Molded Tips | Lining: Thin Polyester Foam | Closure: Adjustable Velcro Wrist Strap | Ventilation: Breathable Stretch Fabric Construction",
      cleaningCare: "Wipe gently with a soft dry cloth. Avoid machine washing or chemical cleaning. Keep away from direct heat or moisture. Store in a cool and dry place. Do not expose to prolonged sunlight.",
      handling: "All Everhide gloves are carefully inspected before shipping to ensure premium export quality standards. After extended use or cleaning, inspect thoroughly to confirm they remain free from cuts, tears, or stitching damage.",
      warning: "Gloves should not be worn in environments where there is risk of entanglement in machinery or mechanical parts. Always use appropriate protective gear according to riding conditions.",
      additionalInfo: "Everhide Premium Fabric Cycling & Biker Gloves combine 4-way stretch fabric, Amara, neoprene, and leather reinforcements with rubber molded knuckle and finger protection for lightweight, breathable, multi-purpose riding performance suited to global B2B distribution and OEM branding.",
    },
    specifications: {
      feature: "Fabric Cycling & Biker Gloves",
      type: "Multi-Purpose Riding Gloves",
      thickness: "4-Way Stretch Fabric + Amara + Neoprene + Leather",
      certification: "Summer | Rubber Molded Knuckle + Finger Protection | Short Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "10": {
    name: "Everhide Performance Fabric Cycling & Light Motorcycle Gloves with Soft Shell Construction",
    productCode: "EH-FBG-010",
    category: "Biker Gloves",
    images: [ehFbg010Main, ehFbg010_1, ehFbg010_2, ehFbg010_3, ehFbg010_4, ehFbg010_5, ehFbg010_6, ehFbg010_7],
    description: "Manufactured using high-quality soft shell fabric combined with Amara reinforcement, these gloves are designed for multi-purpose riding including cycling and light motorcycle use. The lightweight structure ensures flexibility, breathability, and everyday comfort.\n\n• Front: Soft shell fabric with foam padded finger sections\n• Back: Soft shell outer with heat transfer printed design\n• Palm: Amara fabric reinforcement for enhanced grip and durability\n• Lining: Light foam padding for comfort during extended riding\n• Finger Construction: Pre-shaped with stretch fabric inserts between fingers\n• Knuckle Area: Soft padded knuckle protection\n• Grip Area: Amara palm with soft foam cushioning\n• Closure: Adjustable Velcro wrist strap for secure fit\n• Touch Points: Touchscreen-compatible fabric at finger and thumb\n• Logo Branding: Heat transfer logo at wrist and back (OEM customization available)\n• Color Options: Available in different color combinations\n\nStandard Color Combinations:\nBlack / Orange\nBlack / Grey\nBlack / Red\nBlack / Blue\nOther colors can be developed on buyer request\n\n• Sizes: XS to 3XL\n• Origin: Made in Pakistan",
    material: "Soft Shell Fabric, Amara Palm, Soft Foam Palm & Knuckle Padding, Adjustable Velcro Strap",
    colors: [
      "Black / Orange",
      "Black / Grey",
      "Black / Red",
      "Black / Blue",
      "Custom colors on buyer request",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "Soft shell outer fabric",
      "Amara palm reinforcement for grip",
      "Lightweight foam palm padding",
      "Soft padded knuckle protection",
      "Stretch fabric between fingers",
      "Heat transfer printed design",
      "Adjustable Velcro wrist strap",
      "Touchscreen-compatible finger & thumb",
      "Pre-shaped ergonomic construction",
      "Lightweight summer-friendly design",
      "Available in sizes XS to 3XL",
      "Custom colors available",
    ],
    applications: [
      "Cycling",
      "Light motorcycle riding",
      "Daily commuting",
      "Urban riding",
      "Fitness cycling",
      "Retail & B2B distribution",
    ],
    overview: {
      intro: "Everhide Performance Fabric Cycling & Light Motorcycle Gloves are designed for riders who require flexibility, lightweight comfort, and reliable grip for daily use. Constructed from soft shell fabric with Amara palm reinforcement, these gloves offer excellent breathability and natural hand movement.\n\nWith soft foam padding at the palm and knuckle areas, along with stretch inserts between fingers, they provide comfort during extended cycling sessions or light motorcycle riding. The adjustable Velcro wrist closure ensures a secure fit, while touchscreen-compatible fingertips add everyday convenience.\n\nDesigned for export markets and B2B distribution, these gloves combine durability, functionality, and customizable branding solutions.",
      materialBuild: "Outer Shell: Soft Shell Fabric | Palm: Amara Fabric | Padding: Soft Foam Palm & Knuckle Padding | Closure: Adjustable Velcro Strap | Construction: Pre-shaped ergonomic fit | Branding: Heat transfer logo printing",
      cleaningCare: "Wipe gently with a soft dry cloth. Do not machine wash. Avoid chemical cleaning. Keep away from direct heat. Store in a cool and dry place.",
      handling: "All Everhide gloves are carefully inspected before shipment to ensure export-quality standards. After prolonged use, inspect for stitching integrity and material wear.",
      warning: "These gloves are designed for cycling and light motorcycle riding only. They are not intended for heavy racing or high-impact professional motorcycling environments. Always wear appropriate protective gear based on riding conditions.",
      additionalInfo: "Everhide Performance Fabric Cycling & Light Motorcycle Gloves combine soft shell fabric and Amara palm reinforcement for lightweight comfort, breathability, and dependable grip in cycling, urban commuting, and light motorcycle use built for B2B distribution and OEM branding.",
    },
    specifications: {
      feature: "Fabric Cycling & Light Motorcycle Gloves",
      type: "Multi-Purpose / Urban Riding Gloves",
      thickness: "Soft Shell Fabric + Amara Palm",
      certification: "Summer / Moderate Weather | Light Foam Knuckle & Palm Padding | Short Adjustable Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "11": {
    name: "Unisex Black Leather Dressing Gloves – Genuine Cowhide Winter Gloves",
    productCode: "EH-DG-001",
    category: "Dressing Gloves",
    images: [ehDg001Main, ehDg001_1, ehDg001_2, ehDg001_3, ehDg001_4, ehDg001_5, ehDg001_6, ehDg001_7],
    description: "Made from 100% genuine super-soft cowhide leather with a thickness of 0.6–0.7mm, ensuring durability, flexibility, and long-lasting comfort.\n\n• Front: Smooth premium cowhide leather\n• Back: Elegant stitched design lines on back of hand\n• Leather Thickness: 0.6–0.7mm premium-grade cowhide\n• Lining: Soft foam lining for insulation and warmth\n• Closure: Adjustable leather strap with button and buckle fastening\n• Wrist Fit: Secure adjustable strap for customized fit\n• Touch Points: Touchscreen-compatible fabric for smartphone use\n• Design: High-class fashion gloves tailored for men\n• Color Options: Available in different color combinations (Black, Brown, Navy Blue, Burgundy / Merlot, Mocha Mousse, Chestnut Brown, Electric Blue, Deep Forest, Pewter Grey, Apricot Crush, Italian Plum)\n• Sizes: Available from XS to 3XL\n• Usage: Friendly and reliable hand cover during severe winter\n• Custom Orders: Custom sizing and private labeling available on request\n• Origin: Made in Pakistan",
    material: "100% Genuine Cowhide Leather, Soft Foam Insulation Lining",
    colors: [
      "Black",
      "Brown",
      "Navy Blue",
      "Burgundy / Merlot",
      "Mocha Mousse",
      "Chestnut Brown",
      "Electric Blue",
      "Deep Forest",
      "Pewter Grey",
      "Apricot Crush",
      "Italian Plum",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "100% genuine super-soft cowhide leather",
      "Stylish stitched detailing on back of hand",
      "Adjustable leather strap with button & buckle",
      "Foam inner lining for warmth",
      "Touchscreen-compatible finger",
      "Durable and skin-friendly materials",
      "Elegant slim men fit",
      "Available in sizes XS to 3XL",
    ],
    applications: [
      "Daily winter wear",
      "Driving and commuting",
      "Outdoor activities",
      "Travel and business use",
      "Fashion and dressing wear",
      "Cold weather protection",
    ],
    overview: {
      intro: "Premium winter gloves crafted from 100% genuine cowhide leather, designed for men who value style, comfort, and cold-weather protection. These gloves combine refined craftsmanship with modern functionality, including adjustable strap closure and touchscreen compatibility, making them ideal for both casual and formal winter wear.",
      materialBuild: "Leather Thickness: 0.6–0.7mm | Material: Genuine Cowhide Leather | Lining: Soft foam insulation | Closure: Adjustable leather strap with buckle | Touch Points: Smartphone-compatible fabric",
      cleaningCare: "Wipe gently with a soft dry cloth. Avoid machine washing. Do not use chemical cleaners. Store in a cool, dry place. Keep away from direct heat and moisture.",
      handling: "Each pair is carefully inspected before shipment to maintain premium export quality standards. Proper storage after use will help preserve leather softness and durability.",
      warning: "Not recommended for use in environments involving heavy machinery where gloves may become entangled.",
      additionalInfo: "Premium winter gloves crafted from 100% genuine cowhide leather, designed for men who value style, comfort, and cold-weather protection. These gloves combine refined craftsmanship with modern functionality, including adjustable strap closure and touchscreen compatibility, making them ideal for both casual and formal winter wear.",
    },
    specifications: {
      feature: "Leather Dress / Winter Fashion Gloves",
      type: "Formal / Fashion Dressing Gloves",
      thickness: "0.6–0.7mm Genuine Cowhide Leather",
      certification: "Winter / Cold Weather | Non-Protective (Fashion Use Only) | Extended Dress Cuff with Adjustable Strap",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "12": {
    name: "Lady's Brown Leather Dressing Gloves – Genuine Cowhide Winter Gloves",
    productCode: "EH-DG-002",
    category: "Dressing Gloves",
    images: [ehDg002Main, ehDg002_1, ehDg002_2, ehDg002_3, ehDg002_4, ehDg002_5, ehDg002_6],
    description: "Made from 100% genuine super-soft cowhide leather with a thickness of 0.6–0.7mm, offering enhanced durability, flexibility, and premium comfort.\n\n• Front: Smooth premium cowhide leather\n• Back: Decorative stitching lines with elegant metal button detailing\n• Leather Thickness: 0.6–0.7mm high-quality cowhide\n• Lining: Soft foam lining for warmth and insulation\n• Wrist Fit: Elasticized wrist for improved fitting and secure grip\n• Touch Points: Touchscreen-compatible fabric on selected finger for smartphone use\n• Design: High-class fashion design tailored for ladies\n• Color Options: Available in different color combinations (Black, Brown, Navy Blue, Burgundy / Merlot, Mocha Mousse, Chestnut Brown, Electric Blue, Deep Forest, Pewter Grey, Apricot Crush, Italian Plum)\n• Sizes: Available from XS to 2XL\n• Custom Orders: Custom sizes and private labeling available upon request\n• Usage: Friendly and reliable hand cover during severe winter\n• Origin: Made in Pakistan",
    material: "Genuine Soft Leather, Soft Foam Insulation",
    colors: [
      "Black",
      "Brown",
      "Navy Blue",
      "Burgundy / Merlot",
      "Mocha Mousse",
      "Chestnut Brown",
      "Electric Blue",
      "Deep Forest",
      "Pewter Grey",
      "Apricot Crush",
      "Italian Plum",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    features: [
      "100% genuine super-soft cowhide leather",
      "Elegant decorative stitching on back of hand",
      "Stylish metal button detailing",
      "Elasticized wrist for snug and comfortable fit",
      "Warm foam inner lining",
      "Touchscreen-compatible finger",
      "Soft, durable, and skin-friendly material",
      "Fashionable slim lady fit",
      "Available in sizes XS to 2XL",
    ],
    applications: [
      "Daily winter wear",
      "Driving and commuting",
      "Outdoor activities",
      "Travel and casual outings",
      "Fashion and dressing use",
      "Cold weather protection",
    ],
    overview: {
      intro: "Premium winter dressing gloves crafted from 100% genuine cowhide leather, designed specifically for women who seek elegance, comfort, and warmth during cold seasons. These gloves combine refined craftsmanship with functional features such as foam insulation and touchscreen compatibility, making them ideal for everyday winter wear.",
      materialBuild: "Leather Thickness: 0.6–0.7mm | Material: Genuine Cowhide Leather | Lining: Soft foam insulation | Closure: Elastic wrist fit | Decoration: Metal buttons and stitched detailing | Touch Points: Smartphone-compatible fabric",
      cleaningCare: "Wipe gently with a soft dry cloth. Do not machine wash. Avoid chemical cleaning agents. Store in a cool, dry place. Keep away from direct heat and moisture.",
      handling: "Each pair of gloves is carefully inspected before shipment to ensure premium export quality. After extended use, inspect for wear and store properly to maintain durability.",
      warning: "Not suitable for use in environments involving moving machinery or mechanical equipment where gloves may get caught.",
      additionalInfo: "Premium winter dressing gloves crafted from 100% genuine cowhide leather, designed specifically for women who seek elegance, comfort, and warmth during cold seasons. These gloves combine refined craftsmanship with functional features such as foam insulation and touchscreen compatibility, making them ideal for everyday winter wear.",
    },
    specifications: {
      feature: "Leather Dressing Gloves",
      type: "Classic / Formal Wear Gloves",
      thickness: "0.6–0.7mm Genuine Soft Leather",
      certification: "Autumn / Winter / Mild Cold Weather | Basic Fashion Protection (Non-Impact) | Extended Wrist with Elastic Gather | Decorative 3-Button Snap Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "13": {
    name: "Dressing Gloves – Genuine Leather Winter Gloves",
    productCode: "EH-DG-003",
    category: "Dressing Gloves",
    images: [ehDg003Main, ehDg003_1, ehDg003_2, ehDg003_3, ehDg003_4, ehDg003_5, ehDg003_6, ehDg003_7],
    description: "Made from 100% genuine super-soft cowhide leather, thickness 0.5–0.6mm, ensuring premium comfort and durability.\n\n• Front: Super-soft genuine cowhide leather\n• Back: Decorative stitching design at the back of the hand\n• Leather Thickness: 0.5–0.6mm premium-grade cowhide\n• Liner: Warm and comfortable insulated faux-fur lining\n• Cuff: Wider extended fur cuff for enhanced warmth\n• Wrist Fit: Elasticized wrist closure for snug grip\n• Touch Points: Touchscreen-compatible fabric at finger and thumb\n• Color Options: Available in different color combinations (Black, Brown, Navy Blue, Burgundy / Merlot, Mocha Mousse, Chestnut Brown, Electric Blue, Deep Forest, Pewter Grey, Apricot Crush, Italian Plum)\n• Sizes: From Small (S) to 3XL\n• Custom Orders: Special sizes and customization possible for an extra cost\n• Usage: Friendly and reliable hand cover during severe winter\n• Origin: Made in Pakistan",
    material: "Genuine Cowhide Leather with Faux-Fur Lining",
    colors: [
      "Black",
      "Brown",
      "Navy Blue",
      "Burgundy / Merlot",
      "Mocha Mousse",
      "Chestnut Brown",
      "Electric Blue",
      "Deep Forest",
      "Pewter Grey",
      "Apricot Crush",
      "Italian Plum",
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    features: [
      "100% genuine super-soft cowhide leather construction",
      "Elegant stitching design on the back of the hand",
      "Elasticized wrist for snug and comfortable grip",
      "Faux-fur inner lining for enhanced warmth",
      "Wider insulated cuff to keep cold air out",
      "Touchscreen-compatible finger and thumb",
      "Durable and skin-friendly materials",
      "Available in multiple colors",
      "Sizes from S to 3XL",
    ],
    applications: [
      "Daily winter wear",
      "Outdoor activities",
      "Cold weather commuting",
      "Motorbike and bicycle riding",
      "Driving and travel",
      "General-purpose cold climate protection",
      "Work and casual environments",
      "Fashion and dressing use",
    ],
    overview: {
      intro: "Premium winter gloves made from 100% genuine cowhide leather, designed for warmth, comfort, and everyday usability in cold climates. These gloves combine stylish craftsmanship with modern functional features to provide reliable hand protection throughout severe winter seasons.",
      materialBuild: "Leather Thickness: 0.5–0.6mm | Material: Genuine Cowhide Leather | Lining: Soft insulated faux-fur | Closure: Elastic wrist fit | Touch Points: Smartphone access fabric",
      cleaningCare: "Wipe gently with a soft dry cloth. Avoid machine washing or chemical cleaning. Store in a cool, dry place at room temperature. Keep away from direct heat or moisture.",
      handling: "All gloves are carefully inspected before shipping to ensure premium quality. After cleaning or extended use, examine thoroughly to confirm they remain free from damage.",
      warning: "Gloves should not be worn in environments with a high risk of getting caught in machinery or mechanical parts.",
      additionalInfo: "Premium winter gloves made from 100% genuine cowhide leather, designed for warmth, comfort, and everyday usability in cold climates. These gloves combine stylish craftsmanship with modern functional features to provide reliable hand protection throughout severe winter seasons.",
    },
    specifications: {
      feature: "Leather Winter Dressing Gloves",
      type: "Classic / Cold Weather Fashion Gloves",
      thickness: "0.5–0.6mm Genuine Soft Leather with Faux Fur Lining",
      certification: "Winter / Cold Weather | Basic Cold Protection (Non-Impact) | Full Inner Fur Lining for Warmth | Extended Fur Cuff with Elastic Wrist Gather | Slip-On Design",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "14": {
    name: "Everhide Premium Professional Cowhide Leather Boxing Gloves",
    productCode: "EH-BG-001",
    category: "Boxing Gloves",
    images: [ehBg001Main, ehBg001_1, ehBg001_2, ehBg001_3, ehBg001_4, ehBg001_5],
    description: "Made from 100% genuine premium cowhide leather, designed for professional training, sparring, and boxing performance with superior comfort, durability, and hand protection.\n\n• Outer Material: Genuine premium cowhide leather construction\n• Padding: Hand mold latex soft padding for shock absorption and comfort\n• Leather Thickness: Normal thickness premium-grade leather\n• Lining: Moisture-wicking inner lining for sweat control and comfort\n• Palm Design: Ergonomic palm design with ventilation holes for airflow\n• Wrist Support: Extended wrist strap for enhanced wrist stability and protection\n• Closure Type: Durable hook & loop wrist closure for secure fit\n• Grip & Comfort: Comfortable hand compartment with natural fist positioning\n• Logo Branding: Screen printed Everhide logo branding (custom branding available on buyer request)\n• Stitching: Reinforced stitching for enhanced durability and long-lasting use\n• Usage: Ideal for sparring, boxing training, pad work, and fitness workouts\n\nColor Options:\nWhite / Brown / Gold\nWhite / Red\nBlack / Gold\nRed / Black\nCustom colors available on buyer request\n\nSpecial Finishes & Custom Options:\nVintage style color combinations\nCustom logo printing available\nOEM private label production available\nCustom color combinations available for bulk orders\nCustom packaging available on request\n\n• Sizes: 10oz / 12oz / 14oz / 16oz\n• Custom Orders: Special sizes and customized specifications possible at extra cost\n• Usage: Professional-grade boxing gloves for training, sparring, gym workouts, and combat sports\n• Origin: Made in Pakistan",
    material: "Genuine Premium Cowhide Leather, Hand Mold Latex Soft Padding, Moisture-Wicking Inner Lining",
    colors: [
      "White / Brown / Gold",
      "White / Red",
      "Black / Gold",
      "Red / Black",
      "Custom colors (on buyer request)",
    ],
    sizes: ["10oz", "12oz", "14oz", "16oz"],
    features: [
      "100% genuine premium cowhide leather construction",
      "Hand mold latex soft padding",
      "Moisture-wicking inner lining",
      "Ergonomic hand compartment design",
      "Extended wrist support system",
      "Durable hook & loop wrist closure",
      "Ventilated palm air holes for breathability",
      "Screen printed Everhide branding",
      "Reinforced stitching for enhanced durability",
      "Comfortable natural fist positioning",
      "Professional training and sparring design",
      "Balanced protection with normal thickness padding",
      "Available in multiple color combinations",
      "Sizes available from 10oz to 16oz",
      "OEM and private label customization available",
    ],
    applications: [
      "Professional boxing training",
      "Sparring sessions",
      "Heavy bag workouts",
      "Pad and mitt training",
      "Fitness boxing workouts",
      "Combat sports training",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Premium Professional Cowhide Leather Boxing Gloves are designed for athletes, trainers, and boxing enthusiasts who demand durability, comfort, and reliable hand protection during training and sparring sessions. Manufactured from 100% genuine premium cowhide leather, these gloves combine classic craftsmanship with modern comfort features for professional performance.\n\nFeaturing hand mold latex soft padding, ergonomic hand positioning, moisture-wicking inner lining, and reinforced wrist support, these gloves provide excellent shock absorption, comfort, and long-lasting durability. Designed for export markets and wholesale buyers, Everhide boxing gloves offer premium quality, customizable branding solutions, and professional-grade construction suitable for international B2B distribution.",
      materialBuild: "Material: Genuine Premium Cowhide Leather | Padding: Hand Mold Latex Soft Padding | Lining: Moisture-Wicking Comfortable Inner Lining | Closure: Hook & Loop Wrist Strap | Palm Design: Ventilated ergonomic palm system | Printing: Screen Printed Logo Branding | Construction: Reinforced stitched seams | Protection Level: Normal thickness professional padding",
      cleaningCare: "Wipe gently with a soft dry cloth. Do not machine wash. Avoid harsh chemicals or bleach. Keep away from direct sunlight and excessive moisture. Allow gloves to air dry after use. Store in a cool and dry place.",
      handling: "All Everhide boxing gloves are carefully inspected before shipping to ensure export-grade quality standards. After extended use, inspect gloves regularly for any cuts, tears, or seam damage before reuse.",
      warning: "Boxing gloves should always be used with proper hand wraps for maximum wrist and hand protection. Do not use damaged gloves during training or sparring. Always use appropriate protective equipment according to your training requirements.",
      additionalInfo: "Everhide Premium Professional Cowhide Leather Boxing Gloves are designed for athletes, trainers, and boxing enthusiasts who demand durability, comfort, and reliable hand protection during training and sparring sessions. Manufactured from 100% genuine premium cowhide leather, these gloves combine classic craftsmanship with modern comfort features for professional performance. Featuring hand mold latex soft padding, ergonomic hand positioning, moisture-wicking inner lining, and reinforced wrist support, these gloves provide excellent shock absorption, comfort, and long-lasting durability.",
    },
    specifications: {
      feature: "Professional Boxing Gloves",
      type: "Training / Sparring Boxing Gloves",
      thickness: "Normal Thickness Genuine Cowhide Leather with Hand Mold Latex Padding",
      certification: "All-Season Training Use | Hand Mold Latex Padding with Wrist Protection | Extended Hook & Loop Wrist Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "15": {
    name: "Everhide Premium Professional Cowhide Leather Boxing Gloves",
    productCode: "EH-BG-002",
    category: "Boxing Gloves",
    images: [ehBg002Main, ehBg002_1, ehBg002_2, ehBg002_3, ehBg002_4, ehBg002_5],
    description: "Made from 100% genuine premium cowhide leather, designed for professional boxing training, sparring, and fitness workouts with superior comfort, durability, and reliable hand protection.\n\n• Outer Material: Genuine premium cowhide leather construction\n• Padding: Hand mold latex soft padding for balanced shock absorption and comfort\n• Leather Thickness: Normal thickness premium-grade leather\n• Lining: Moisture-wicking inner lining for sweat control and comfort\n• Palm Design: Ergonomic hand compartment with natural fist positioning\n• Wrist Support: Extended wrist support system for improved stability and protection\n• Closure Type: Durable hook & loop wrist closure for secure fit\n• Grip & Comfort: Comfortable pre-curved hand design for training performance\n• Logo Branding: Screen printed Everhide logo branding (custom branding available on buyer request)\n• Stitching: Reinforced stitching for enhanced durability and long-lasting use\n• Back Design: Quilted rear panel styling with premium finishing details\n• Usage: Ideal for sparring, boxing training, pad work, heavy bag workouts, and fitness boxing\n\nColor Options:\nBlack / Gold\nBlack / White\nRed / Black\nWhite / Gold\nCustom colors available on buyer request\n\nSpecial Finishes & Custom Options:\nPremium glossy leather finish\nCustom logo printing available\nOEM private label production available\nCustom color combinations available for bulk orders\nCustom packaging available on request\n\n• Sizes: 10oz / 12oz / 14oz / 16oz\n• Custom Orders: Special sizes and customized specifications possible at extra cost\n• Usage: Professional-grade boxing gloves for training, sparring, gym workouts, and combat sports\n• Origin: Made in Pakistan",
    material: "Genuine Premium Cowhide Leather, Hand Mold Latex Soft Padding, Moisture-Wicking Inner Lining",
    colors: [
      "Black / Gold",
      "Black / White",
      "Red / Black",
      "White / Gold",
      "Custom colors (on buyer request)",
    ],
    sizes: ["10oz", "12oz", "14oz", "16oz"],
    features: [
      "100% genuine premium cowhide leather construction",
      "Hand mold latex soft padding",
      "Moisture-wicking inner lining",
      "Ergonomic hand compartment design",
      "Extended wrist support system",
      "Durable hook & loop wrist closure",
      "Comfortable natural fist positioning",
      "Screen printed Everhide branding",
      "Reinforced stitching for enhanced durability",
      "Professional training and sparring design",
      "Balanced protection with normal thickness padding",
      "Premium quilted rear-panel styling",
      "Glossy professional leather finish",
      "Available in multiple color combinations",
      "Sizes available from 10oz to 16oz",
      "OEM and private label customization available",
    ],
    applications: [
      "Professional boxing training",
      "Sparring sessions",
      "Heavy bag workouts",
      "Pad and mitt training",
      "Fitness boxing workouts",
      "Combat sports training",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Premium Professional Cowhide Leather Boxing Gloves are designed for athletes, trainers, and boxing enthusiasts seeking durability, comfort, and professional-level hand protection during training and sparring sessions. Manufactured from 100% genuine premium cowhide leather, these gloves combine classic craftsmanship with modern performance-focused construction.\n\nFeaturing hand mold latex soft padding, ergonomic fist positioning, moisture-wicking inner lining, reinforced wrist support, and a premium quilted rear-panel design, these gloves provide excellent shock absorption, comfort, and long-lasting durability. Designed for export markets and wholesale buyers, Everhide boxing gloves deliver premium quality, customizable branding solutions, and professional-grade construction suitable for international B2B distribution.",
      materialBuild: "Material: Genuine Premium Cowhide Leather | Padding: Hand Mold Latex Soft Padding | Lining: Moisture-Wicking Comfortable Inner Lining | Closure: Hook & Loop Wrist Strap | Palm Design: Ergonomic hand compartment system | Printing: Screen Printed Logo Branding | Construction: Reinforced stitched seams | Protection Level: Normal thickness professional padding",
      cleaningCare: "Wipe gently with a soft dry cloth. Do not machine wash. Avoid harsh chemicals or bleach. Keep away from direct sunlight and excessive moisture. Allow gloves to air dry after use. Store in a cool and dry place.",
      handling: "All Everhide boxing gloves are carefully inspected before shipping to ensure export-grade quality standards. After extended use, inspect gloves regularly for any cuts, tears, or seam damage before reuse.",
      warning: "Boxing gloves should always be used with proper hand wraps for maximum wrist and hand protection. Do not use damaged gloves during training or sparring. Always use appropriate protective equipment according to your training requirements.",
      additionalInfo: "Everhide Premium Professional Cowhide Leather Boxing Gloves are designed for athletes, trainers, and boxing enthusiasts seeking durability, comfort, and professional-level hand protection during training and sparring sessions. Featuring hand mold latex soft padding, ergonomic fist positioning, moisture-wicking inner lining, reinforced wrist support, and a premium quilted rear-panel design, these gloves provide excellent shock absorption, comfort, and long-lasting durability.",
    },
    specifications: {
      feature: "Professional Boxing Gloves",
      type: "Training / Sparring Boxing Gloves",
      thickness: "Normal Thickness Genuine Cowhide Leather with Hand Mold Latex Padding",
      certification: "All-Season Training Use | Hand Mold Latex Padding with Wrist Protection | Extended Hook & Loop Wrist Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "16": {
    name: "Everhide Professional Cowhide Leather Training & Sparring Boxing Gloves",
    productCode: "EH-BG-003",
    category: "Boxing Gloves",
    images: [ehBg003Main, ehBg003_1, ehBg003_2, ehBg003_3, ehBg003_4, ehBg003_5],
    description: "Made from 100% genuine premium cowhide leather, designed for professional boxing training, sparring sessions, and fitness workouts with excellent durability, comfort, and impact protection.\n\n• Outer Material: Genuine premium cowhide leather construction\n• Padding: Hand mold latex soft padding for effective shock absorption and hand protection\n• Leather Thickness: Normal thickness premium-grade leather\n• Lining: Moisture-wicking inner lining for sweat management and comfort\n• Palm Design: Ergonomic hand compartment with natural fist alignment\n• Wrist Support: Extended wrist support system for enhanced stability and protection\n• Closure Type: Durable hook & loop wrist strap for secure adjustable fit\n• Grip & Comfort: Comfortable pre-curved hand design for improved training performance\n• Logo Branding: Screen printed Everhide logo branding and rear-panel design (custom branding available on buyer request)\n• Stitching: Reinforced stitching for durability and long-lasting performance\n• Ventilation: Ventilation holes at palm area for breathability and airflow\n• Usage: Ideal for boxing training, sparring, heavy bag workouts, pad work, and combat fitness training\n\nColor Options:\nBlack / Red\nBlack / White\nBlack / Gold\nWhite / Red\nCustom colors available on buyer request\n\nSpecial Finishes & Custom Options:\nPremium glossy leather finish\nCustom logo printing available\nOEM private label production available\nCustom color combinations available for bulk orders\nCustom packaging available on request\n\n• Sizes: 10oz / 12oz / 14oz / 16oz\n• Custom Orders: Special sizes and customized specifications possible at extra cost\n• Usage: Professional-grade boxing gloves for training, sparring, gym workouts, and combat sports\n• Origin: Made in Pakistan",
    material: "Genuine Premium Cowhide Leather, Hand Mold Latex Soft Padding, Moisture-Wicking Inner Lining",
    colors: [
      "Black / Red",
      "Black / White",
      "Black / Gold",
      "White / Red",
      "Custom colors (on buyer request)",
    ],
    sizes: ["10oz", "12oz", "14oz", "16oz"],
    features: [
      "100% genuine premium cowhide leather construction",
      "Hand mold latex soft padding",
      "Moisture-wicking comfortable inner lining",
      "Ergonomic hand compartment design",
      "Extended wrist support system",
      "Durable hook & loop wrist closure",
      "Pre-curved natural fist positioning",
      "Screen printed Everhide branding",
      "Ventilation holes for airflow and breathability",
      "Reinforced stitching for long-lasting durability",
      "Professional training and sparring design",
      "Balanced protection with normal thickness padding",
      "Premium glossy leather finishing",
      "Available in multiple color combinations",
      "Sizes available from 10oz to 16oz",
      "OEM and private label customization available",
    ],
    applications: [
      "Professional boxing training",
      "Sparring sessions",
      "Heavy bag workouts",
      "Pad and mitt training",
      "Fitness boxing workouts",
      "Combat sports training",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Professional Cowhide Leather Training & Sparring Boxing Gloves are engineered for athletes and boxing enthusiasts who demand reliable protection, durability, and comfort during intense training sessions. Manufactured from 100% genuine premium cowhide leather, these gloves combine classic boxing craftsmanship with modern performance-focused construction.\n\nFeaturing hand mold latex soft padding, ergonomic fist positioning, moisture-wicking lining, reinforced wrist support, and breathable palm ventilation, these gloves deliver balanced impact absorption, comfort, and durability for everyday training and sparring use. Designed for export markets and wholesale buyers, Everhide boxing gloves provide premium build quality and customizable branding solutions for international B2B customers.",
      materialBuild: "Material: Genuine Premium Cowhide Leather | Padding: Hand Mold Latex Soft Padding | Lining: Moisture-Wicking Comfortable Inner Lining | Closure: Hook & Loop Wrist Strap | Palm Design: Ergonomic hand compartment system | Printing: Screen Printed Logo Branding | Ventilation: Palm ventilation holes | Construction: Reinforced stitched seams | Protection Level: Normal thickness professional padding",
      cleaningCare: "Wipe gently with a soft dry cloth. Do not machine wash. Avoid harsh chemicals or bleach. Keep away from direct sunlight and excessive moisture. Allow gloves to air dry after use. Store in a cool and dry place.",
      handling: "All Everhide boxing gloves are carefully inspected before shipping to ensure export-grade quality standards. After extended use, inspect gloves regularly for any cuts, tears, or seam damage before reuse.",
      warning: "Boxing gloves should always be used with proper hand wraps for maximum wrist and hand protection. Do not use damaged gloves during training or sparring. Always use appropriate protective equipment according to your training requirements.",
      additionalInfo: "Everhide Professional Cowhide Leather Training & Sparring Boxing Gloves combine classic boxing craftsmanship with modern performance-focused construction. With hand mold latex padding, ergonomic fist positioning, moisture-wicking lining, reinforced wrist support, and palm ventilation, these gloves provide balanced impact absorption and comfort suitable for training, sparring, and B2B wholesale distribution.",
    },
    specifications: {
      feature: "Professional Boxing Gloves",
      type: "Training / Sparring Boxing Gloves",
      thickness: "Normal Thickness Genuine Cowhide Leather with Hand Mold Latex Padding",
      certification: "All-Season Training Use | Hand Mold Latex Padding with Wrist Protection | Extended Hook & Loop Wrist Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "17": {
    name: "Everhide Professional Lace-Up Competition Boxing Gloves",
    productCode: "EH-BG-004",
    category: "Boxing Gloves",
    images: [ehBg004Main, ehBg004_1, ehBg004_2, ehBg004_3, ehBg004_4, ehBg004_5],
    description: "Made from 100% genuine premium cowhide leather, designed for professional boxing competition, sparring, and advanced training with maximum wrist stability, precision fit, and superior impact protection.\n\n• Outer Material: Genuine premium cowhide leather construction\n• Padding: Multi-layer hand mold latex foam padding for professional shock absorption\n• Leather Thickness: Premium-grade durable cowhide leather\n• Lining: Soft moisture-wicking inner lining for enhanced comfort during extended sessions\n• Closure Type: Traditional lace-up closure system for secure professional fit\n• Wrist Support: Extended wrist cuff with reinforced lace stabilization for superior wrist alignment\n• Hand Shape: Ergonomic pre-curved hand compartment for natural fist positioning\n• Palm Design: Attached thumb design for safety and injury prevention\n• Grip & Comfort: Professional competition-style balance with comfortable hand feel\n• Logo Branding: Everhide logo printing on cuff and rear glove panel (custom branding available on request)\n• Stitching: Reinforced professional stitching for durability and long-lasting performance\n• Usage: Ideal for professional boxing training, sparring, competition preparation, and gym workouts\n\nColor Options:\nFull Black Edition\nFull White Edition\nBlack / White (outlining)\nBlack / Gold (outlining)\nBlack / Red (outlining)\nCustom color combinations available on buyer request\n\nSpecial Finishes & Custom Options:\nProfessional matte leather finish\nCustom logo printing available\nOEM private label production available\nCustom lace colors available\nCustom glove weight and padding options available for bulk orders\nCustom packaging available on request\n\n• Sizes: 8oz / 10oz / 12oz / 14oz / 16oz\n• Custom Orders: Special specifications and custom sizing possible at extra cost\n• Usage: Professional-grade boxing gloves for sparring, competition training, pad work, and combat sports\n• Origin: Made in Pakistan",
    material: "Genuine Premium Cowhide Leather, Multi-Layer Hand Mold Latex Foam Padding, Moisture-Wicking Inner Lining",
    colors: [
      "Full Black Edition",
      "Full White Edition",
      "Black / White (outlining)",
      "Black / Gold (outlining)",
      "Black / Red (outlining)",
      "Custom color combinations (on buyer request)",
    ],
    sizes: ["8oz", "10oz", "12oz", "14oz", "16oz"],
    features: [
      "100% genuine premium cowhide leather construction",
      "Professional lace-up closure system",
      "Multi-layer hand mold latex foam padding",
      "Extended wrist support design",
      "Ergonomic pre-curved hand compartment",
      "Attached thumb protection system",
      "Professional competition-style construction",
      "Soft moisture-wicking inner lining",
      "Reinforced stitched seams",
      "Balanced shock absorption padding",
      "Premium matte leather finishing",
      "Professional wrist alignment support",
      "Available in multiple color combinations",
      "Sizes available from 8oz to 16oz",
      "OEM and private label customization available",
    ],
    applications: [
      "Professional boxing training",
      "Competition preparation",
      "Advanced sparring sessions",
      "Pad and mitt work",
      "Heavy bag workouts",
      "Combat sports training",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Professional Lace-Up Competition Boxing Gloves are engineered for professional fighters, trainers, and advanced boxing athletes who demand superior wrist support, balanced impact protection, and precision fit. Manufactured from 100% genuine premium cowhide leather, these gloves combine traditional lace-up boxing craftsmanship with modern performance-focused protection.\n\nFeaturing multi-layer hand mold latex padding, ergonomic fist positioning, attached thumb protection, extended lace-up wrist support, and reinforced professional construction, these gloves deliver exceptional comfort, control, and durability for professional-level boxing performance. Designed for export markets and wholesale buyers, Everhide gloves provide premium build quality and customizable branding solutions for international B2B customers.",
      materialBuild: "Material: Genuine Premium Cowhide Leather | Padding: Multi-Layer Hand Mold Latex Foam | Lining: Moisture-Wicking Comfortable Inner Lining | Closure: Traditional Lace-Up System | Palm Design: Ergonomic hand compartment structure | Thumb Design: Attached thumb protection | Construction: Reinforced professional stitched seams | Wrist Support: Extended lace stabilization cuff | Protection Level: Professional competition-grade padding",
      cleaningCare: "Wipe gently with a soft dry cloth. Do not machine wash. Avoid harsh chemicals or bleach. Allow gloves to air dry after training sessions. Keep away from direct sunlight and moisture. Store in a cool and dry place.",
      handling: "All Everhide boxing gloves are carefully inspected before shipping to ensure export-grade quality standards. After extended use, inspect gloves regularly for any cuts, tears, or seam damage before reuse.",
      warning: "Professional boxing gloves should always be used with proper hand wraps for maximum wrist and knuckle protection. Lace-up gloves require proper fitting before use. Always use appropriate protective equipment according to your training and competition requirements.",
      additionalInfo: "Everhide Professional Lace-Up Competition Boxing Gloves combine traditional lace-up craftsmanship with modern performance protection. With multi-layer latex padding, attached thumb design, extended lace-up wrist support, and reinforced construction, these gloves provide professional-grade impact absorption, precision fit, and durability suitable for competition, sparring, and B2B wholesale distribution.",
    },
    specifications: {
      feature: "Professional Lace-Up Boxing Gloves",
      type: "Competition / Sparring Boxing Gloves",
      thickness: "Premium-Grade Genuine Cowhide Leather with Multi-Layer Latex Foam Padding",
      certification: "All-Season Training Use | Multi-Layer Latex Padding with Extended Wrist Support | Extended Lace-Up Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
  "18": {
    name: "Everhide Professional Lace-Up Competition Boxing Gloves – Red Edition",
    productCode: "EH-BG-005",
    category: "Boxing Gloves",
    images: [ehBg005Main, ehBg005_1, ehBg005_2, ehBg005_3, ehBg005_4, ehBg005_5],
    description: "Made from 100% genuine premium cowhide leather, these professional lace-up boxing gloves are engineered for elite-level boxing performance, competition training, and advanced sparring sessions with superior wrist stability, precision fit, and impact protection.\n\n• Outer Material: Genuine premium cowhide leather construction\n• Padding: Multi-layer high-density latex foam padding for advanced shock absorption\n• Leather Thickness: Premium-grade durable cowhide leather\n• Lining: Soft moisture-control inner lining for lasting comfort during training\n• Closure Type: Traditional professional lace-up closure system\n• Wrist Support: Extended wrist cuff for superior wrist stabilization and secure fit\n• Hand Shape: Ergonomic pre-curved fist design for natural punching alignment\n• Thumb Protection: Attached thumb safety design for injury prevention\n• Impact Control: Balanced weight distribution for precision striking and punch control\n• Stitching: Reinforced professional stitching for long-lasting durability\n• Logo Branding: Everhide logo printing on cuff and rear glove panel (custom branding available on request)\n• Finish: Smooth professional matte leather finish\n• Usage: Designed for professional boxing, sparring, competition preparation, and intensive gym training\n\nColor Options:\nFull Blue Edition\nFull Red Edition\nRed / Black (outlining)\nRed / White (outlining)\nBlack / Red (outlining)\nCustom color combinations available on buyer request\n\nSpecial Finishes & Custom Options:\nProfessional matte leather finish\nCustom logo printing available\nOEM private label production available\nCustom lace colors available\nCustom glove weight and padding options available\nCustom packaging solutions for wholesale buyers\n\n• Sizes: 8oz / 10oz / 12oz / 14oz / 16oz\n• Custom Orders: Special specifications and custom sizing possible at extra cost\n• Usage: Professional-grade boxing gloves for sparring, boxing competition training, pad work, and combat sports\n• Origin: Made in Pakistan",
    material: "Genuine Premium Cowhide Leather, Multi-Layer High-Density Latex Foam Padding, Moisture-Control Inner Lining",
    colors: [
      "Full Blue Edition",
      "Full Red Edition",
      "Red / Black (outlining)",
      "Red / White (outlining)",
      "Black / Red (outlining)",
      "Custom color combinations (on buyer request)",
    ],
    sizes: ["8oz", "10oz", "12oz", "14oz", "16oz"],
    features: [
      "100% genuine premium cowhide leather construction",
      "Traditional professional lace-up closure",
      "Multi-layer high-density latex foam padding",
      "Extended wrist support design",
      "Ergonomic pre-curved fist compartment",
      "Attached thumb safety protection",
      "Professional competition-style construction",
      "Moisture-control inner lining",
      "Reinforced stitched seams for durability",
      "Balanced shock absorption padding",
      "Professional matte leather finish",
      "Precision punch alignment structure",
      "Available in multiple color combinations",
      "Sizes available from 8oz to 16oz",
      "OEM and private label customization available",
    ],
    applications: [
      "Professional boxing training",
      "Advanced sparring sessions",
      "Competition preparation",
      "Heavy bag workouts",
      "Pad and mitt training",
      "Combat sports gyms",
      "Wholesale and international B2B distribution",
    ],
    overview: {
      intro: "Everhide Professional Lace-Up Competition Boxing Gloves – Red Edition are designed for professional fighters, advanced athletes, and boxing enthusiasts seeking premium wrist support, punch precision, and long-lasting durability. Manufactured from 100% genuine premium cowhide leather, these gloves combine traditional professional lace-up craftsmanship with performance-focused protective construction.\n\nFeaturing multi-layer latex foam padding, ergonomic fist positioning, attached thumb safety, reinforced wrist stabilization, and durable professional stitching, these gloves provide superior comfort, balance, and shock absorption during intense boxing sessions. Developed for export markets and wholesale buyers, Everhide gloves offer customizable branding solutions and premium-quality manufacturing for international B2B customers.",
      materialBuild: "Material: Genuine Premium Cowhide Leather | Padding: Multi-Layer High-Density Latex Foam | Lining: Moisture-Control Comfort Lining | Closure: Traditional Lace-Up System | Palm Design: Ergonomic hand positioning structure | Thumb Design: Attached thumb protection | Construction: Reinforced professional stitched seams | Wrist Support: Extended lace stabilization cuff | Protection Level: Professional competition-grade padding",
      cleaningCare: "Wipe gently with a soft dry cloth. Do not machine wash. Avoid chemical cleaning products. Allow gloves to air dry after use. Keep away from direct sunlight and moisture. Store in a cool and dry place.",
      handling: "All Everhide boxing gloves are carefully inspected before shipping to ensure export-grade quality standards. After prolonged use, inspect gloves regularly for cuts, tears, or seam damage before reuse.",
      warning: "Professional boxing gloves should always be used with proper hand wraps for maximum wrist and knuckle protection. Lace-up gloves require proper fitting before use. Always use suitable protective equipment according to your training and competition requirements.",
      additionalInfo: "Everhide Professional Lace-Up Competition Boxing Gloves – Red Edition combine traditional lace-up craftsmanship with modern performance protection. With multi-layer high-density latex padding, attached thumb design, extended lace-up wrist support, and reinforced construction, these gloves provide professional-grade impact absorption, precision fit, and durability suitable for competition, sparring, and B2B wholesale distribution.",
    },
    specifications: {
      feature: "Professional Lace-Up Boxing Gloves",
      type: "Competition / Sparring Boxing Gloves",
      thickness: "Premium-Grade Genuine Cowhide Leather with Multi-Layer Latex Foam Padding",
      certification: "All-Season Training Use | Multi-Layer Latex Padding with Extended Wrist Support | Extended Lace-Up Cuff",
      packaging: "Individual polybag, 25 pairs per carton",
      leadTime: "15-25 days after order confirmation",
    },
  },
};

// Get all products as array for recommendations
const allProductsArray = Object.entries(productsData).map(([id, product]) => ({
  id,
  ...product,
}));

// Helper function to generate email body content
const generateEmailBody = (productName: string, productPrice?: string, moq?: string) => {
  return `Hello Everhide Team,\n\n` +
    `I am interested in the following product:\n\n` +
    `Product: ${productName}\n` +
    (productPrice ? `Price Range: ${productPrice}\n` : ``) +
    (moq ? `Minimum Order Quantity: ${moq}\n` : ``) +
    `\nPlease provide me with more details including:\n` +
    `- Available colors and sizes\n` +
    `- Bulk pricing options\n` +
    `- Shipping information to my location\n` +
    `- Lead time for orders\n\n` +
    `My Requirements:\n` +
    `- Quantity needed: [Please specify]\n` +
    `- Preferred colors: [Please specify]\n` +
    `- Company name: [Your company]\n` +
    `- Country: [Your country]\n\n` +
    `Looking forward to your response.\n\n` +
    `Best regards,\n` +
    `[Your Name]`;
};

// Helper function to generate mailto link with product info
const generateMailtoLink = (productName: string, productPrice?: string, moq?: string) => {
  const recipient = "owner@everhideglobal.com";
  const subject = encodeURIComponent(`Inquiry: ${productName}`);
  const body = encodeURIComponent(generateEmailBody(productName, productPrice, moq));
  return `mailto:${recipient}?subject=${subject}&body=${body}`;
};

// Helper function to generate Gmail compose link with product info
const generateGmailLink = (productName: string, productPrice?: string, moq?: string) => {
  const recipient = "owner@everhideglobal.com";
  const subject = encodeURIComponent(`Inquiry: ${productName}`);
  const body = encodeURIComponent(generateEmailBody(productName, productPrice, moq));
  return `https://mail.google.com/mail/?view=cm&to=${recipient}&su=${subject}&body=${body}`;
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productsData[id] : null;
  const [showFullOverview, setShowFullOverview] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Get recommended products (different from current product)
  const recommendedProducts = allProductsArray
    .filter((p) => p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <Layout>
        <div className="section-padding container-custom text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const mailtoLink = generateMailtoLink(product.name, product.price, product.moq);
  const gmailLink = generateGmailLink(product.name, product.price, product.moq);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.productCode,
    image: product.images?.[0],
    description: (product.description || "").slice(0, 300),
    category: product.category,
    brand: { "@type": "Brand", name: "EVERHIDE Global" },
    manufacturer: { "@type": "Organization", name: "EVERHIDE Global", address: { "@type": "PostalAddress", addressCountry: "PK" } },
  };

  const seoTitle = `${product.productCode} ${product.name}`.slice(0, 60);
  const seoDesc = `${product.name} bulk & private label leather gloves from EVERHIDE Global, Pakistan. Request a B2B quote.`;

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDesc}
        type="product"
        image={product.images?.[0]}
        jsonLd={productSchema}
      />
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-secondary to-secondary/90 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-secondary-foreground/70 hover:text-primary transition-colors">Home</Link>
            <span className="text-secondary-foreground/50">/</span>
            <Link to="/products" className="text-secondary-foreground/70 hover:text-primary transition-colors">Products</Link>
            <span className="text-secondary-foreground/50">/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div 
                className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 relative group cursor-pointer shadow-xl"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.name} - ${product.productCode} by EVERHIDE Global`}
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                    <ZoomIn className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Click to zoom</span>
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-6 gap-3">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer border-2 transition-all duration-300 hover:scale-105 ${
                      selectedImage === index 
                        ? "border-primary shadow-lg ring-2 ring-primary/20" 
                        : "border-transparent hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Lightbox */}
              <ImageLightbox
                images={product.images}
                initialIndex={selectedImage}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
              />
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wide rounded-full">
                    {product.category}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 font-medium text-xs rounded-full">
                    <Check className="w-3 h-3 mr-1" />
                    In Stock
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{product.name}</h1>
              </div>

              {/* Price / Info Card */}
              <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                {product.price ? (
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-primary">Contact for Pricing</span>
                  </div>
                )}
                <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                  {product.moq && (
                    <span className="flex items-center gap-1">
                      <Package className="w-4 h-4" />
                      MOQ: {product.moq}
                    </span>
                  )}
                  {product.productCode && (
                    <span className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      Code: {product.productCode}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    {product.specifications.leadTime}
                  </span>
                </div>
              </div>

              {/* Quick Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Material</p>
                      <p className="font-semibold text-sm leading-tight">Premium Leather</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Ruler className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Thickness</p>
                      <p className="font-semibold text-sm">{product.specifications.thickness}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Palette className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Colors</p>
                      <p className="font-semibold text-sm">{product.colors.length} Options</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Lead Time</p>
                      <p className="font-semibold text-sm">15-25 Days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  Available Colors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, index) => {
                    const sw = getColorSwatch(color);
                    return (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-card border rounded-full text-sm font-medium hover:border-primary hover:bg-primary/5 transition-colors cursor-default"
                      >
                        <span
                          aria-hidden
                          className="w-4 h-4 rounded-full border border-border shadow-sm flex-shrink-0"
                          style={{ background: sw.background }}
                        />
                        {color}
                      </span>
                    );
                  })}
                </div>
                <p className="text-sm text-primary font-semibold bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 mt-2">
                  Custom colors and finishes available on request for OEM &amp; private label orders.
                </p>
              </div>

              {/* Sizes */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-primary" />
                    Available Sizes
                  </h4>
                  <SizeChartDialog
                    type={product.category === "Dressing Gloves" ? "dressing" : "biker"}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <span
                      key={index}
                      className="w-12 h-12 flex items-center justify-center bg-card border rounded-xl text-sm font-bold hover:border-primary hover:bg-primary/5 transition-colors cursor-default"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-3">
                  <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="lg" className="w-full h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                      </svg>
                      Open in Gmail
                    </Button>
                  </a>
                  <a href={mailtoLink} className="block">
                    <Button size="lg" variant="outline" className="w-full h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Client
                    </Button>
                  </a>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Gmail opens in a new tab • Email Client uses your default app
                </p>
                <Link to="/products" className="block">
                  <Button size="lg" variant="ghost" className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-20">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent overflow-x-auto flex-nowrap">
                <TabsTrigger 
                  value="overview" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 text-base font-semibold whitespace-nowrap"
                >
                  OVERVIEW
                </TabsTrigger>
                <TabsTrigger 
                  value="specifications"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 text-base font-semibold whitespace-nowrap"
                >
                  SPECIFICATIONS
                </TabsTrigger>
                {product.priceTable && (
                  <TabsTrigger 
                    value="pricing"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 text-base font-semibold whitespace-nowrap"
                  >
                    PRICING
                  </TabsTrigger>
                )}
                <TabsTrigger 
                  value="contact"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4 text-base font-semibold whitespace-nowrap"
                >
                  CONTACT US
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="pt-10">
                <div className="max-w-5xl">
                  {/* Intro */}
                  {product.overview.intro && (
                    <div className="mb-10 bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-2xl border-l-4 border-primary">
                      <p className="text-muted-foreground text-lg leading-relaxed">{product.overview.intro}</p>
                    </div>
                  )}

                  {/* Full Product Description */}
                  <div className="mb-10 bg-card rounded-2xl p-8 border shadow-sm">
                    <h3 className="text-primary font-bold text-xl mb-6 flex items-center gap-2">
                      <Shield className="w-6 h-6" />
                      Complete Product Description
                    </h3>
                    <div className="prose prose-sm max-w-none">
                      {product.description.split('\n\n').map((paragraph, pIndex) => (
                        <div key={pIndex} className="mb-4">
                          {paragraph.includes('•') ? (
                            <ul className="space-y-2">
                              {paragraph.split('\n').map((line, lIndex) => {
                                if (line.startsWith('•')) {
                                  const parts = line.substring(2).split(':');
                                  if (parts.length > 1) {
                                    return (
                                      <li key={lIndex} className="flex items-start gap-3 text-muted-foreground">
                                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                          <Check className="h-3 w-3 text-primary" />
                                        </div>
                                        <span>
                                          <strong className="text-foreground">{parts[0]}:</strong>
                                          {parts.slice(1).join(':')}
                                        </span>
                                      </li>
                                    );
                                  }
                                  return (
                                    <li key={lIndex} className="flex items-start gap-3 text-muted-foreground">
                                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                        <Check className="h-3 w-3 text-primary" />
                                      </div>
                                      <span>{line.substring(2)}</span>
                                    </li>
                                  );
                                }
                                return line ? (
                                  <p key={lIndex} className="text-muted-foreground leading-relaxed mb-2">{line}</p>
                                ) : null;
                              })}
                            </ul>
                          ) : (
                            <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features & Applications Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {/* Features */}
                    <div className="bg-card rounded-2xl p-6 border shadow-sm">
                      <h3 className="text-primary font-bold text-xl mb-6 flex items-center gap-2">
                        <Check className="w-6 h-6" />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <Check className="h-3 w-3 text-primary" />
                            </div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="bg-card rounded-2xl p-6 border shadow-sm">
                      <h3 className="text-primary font-bold text-xl mb-6 flex items-center gap-2">
                        <Star className="w-6 h-6" />
                        Applications
                      </h3>
                      <ul className="space-y-3">
                        {product.applications.map((app, index) => (
                          <li key={index} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <Check className="h-3 w-3 text-primary" />
                            </div>
                            <span className="leading-relaxed">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${showFullOverview ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Material & Build Quality */}
                      {product.overview.materialBuild && (
                        <div className="bg-muted/50 rounded-2xl p-6">
                          <h3 className="text-primary font-bold text-lg mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            Material & Build
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{product.overview.materialBuild}</p>
                        </div>
                      )}

                      {/* Cleaning & Care */}
                      <div className="bg-muted/50 rounded-2xl p-6">
                        <h3 className="text-primary font-bold text-lg mb-4">Cleaning & Care</h3>
                        <p className="text-muted-foreground leading-relaxed">{product.overview.cleaningCare}</p>
                      </div>

                      {/* Handling */}
                      <div className="bg-muted/50 rounded-2xl p-6">
                        <h3 className="text-primary font-bold text-lg mb-4">Handling</h3>
                        <p className="text-muted-foreground leading-relaxed">{product.overview.handling}</p>
                      </div>

                      {/* Warning */}
                      <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 border border-red-200 dark:border-red-900">
                        <h3 className="text-red-600 dark:text-red-400 font-bold text-lg mb-4">⚠️ Warning</h3>
                        <p className="text-red-700 dark:text-red-300 leading-relaxed">{product.overview.warning}</p>
                      </div>
                    </div>
                  </div>

                  {/* Show More/Less Button */}
                  <button
                    onClick={() => setShowFullOverview(!showFullOverview)}
                    className="flex items-center gap-2 text-primary font-semibold hover:underline mt-8 bg-primary/5 px-6 py-3 rounded-full transition-colors hover:bg-primary/10"
                  >
                    {showFullOverview ? (
                      <>
                        Show Less Details <ChevronUp className="h-5 w-5" />
                      </>
                    ) : (
                      <>
                        Show Full Overview <ChevronDown className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </TabsContent>

              {/* Specifications Tab */}
              <TabsContent value="specifications" className="pt-10">
                <div className="max-w-5xl">
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {product.specifications.feature && (
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                        <h4 className="font-semibold mb-2 text-primary">Gloves Feature</h4>
                        <p className="text-foreground font-medium">{product.specifications.feature}</p>
                      </div>
                    )}
                    {product.specifications.type && (
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                        <h4 className="font-semibold mb-2 text-primary">Type</h4>
                        <p className="text-foreground font-medium">{product.specifications.type}</p>
                      </div>
                    )}
                    {product.specifications.weight && (
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                        <h4 className="font-semibold mb-2 text-primary">Weight</h4>
                        <p className="text-foreground font-medium">{product.specifications.weight}</p>
                      </div>
                    )}
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                      <h4 className="font-semibold mb-2 text-primary">Thickness</h4>
                      <p className="text-foreground font-medium">{product.specifications.thickness}</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                      <h4 className="font-semibold mb-2 text-primary">Certification</h4>
                      <p className="text-foreground font-medium">{product.specifications.certification}</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                      <h4 className="font-semibold mb-2 text-primary">Packaging</h4>
                      <p className="text-foreground font-medium">{product.specifications.packaging}</p>
                    </div>
                  </div>

                  <div className="bg-secondary text-secondary-foreground rounded-2xl p-6">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Truck className="w-5 h-5" />
                      Lead Time
                    </h4>
                    <p className="text-secondary-foreground/80">{product.specifications.leadTime}</p>
                  </div>

                  <div className="mt-8 bg-card rounded-2xl p-6 border shadow-sm">
                    <h4 className="font-bold text-lg mb-6">Material & Color Options</h4>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-primary">Material</h5>
                      <p className="text-muted-foreground">{product.material}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 text-primary">Available Colors</h5>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((color, index) => {
                          const sw = getColorSwatch(color);
                          return (
                            <span key={index} className="inline-flex items-center gap-2 px-3 py-2 bg-muted rounded-full text-sm font-medium">
                              <span
                                aria-hidden
                                className="w-4 h-4 rounded-full border border-border shadow-sm flex-shrink-0"
                                style={{ background: sw.background }}
                              />
                              {color}
                            </span>
                          );
                        })}
                      </div>
                      <p className="text-sm text-primary font-semibold bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 mt-3">
                        Custom colors and finishes available on request for OEM &amp; private label orders.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3 text-primary">Size Range</h5>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size, index) => (
                          <span key={index} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Pricing Tab */}
              {product.priceTable && (
              <TabsContent value="pricing" className="pt-10">
                <div className="max-w-4xl">
                  {/* Pricing Header */}
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-2xl border-l-4 border-primary mb-8">
                    <h3 className="text-2xl font-bold mb-2">Tiered Bulk Pricing</h3>
                    <p className="text-muted-foreground">
                      Get better rates with larger orders. Price range: <span className="font-bold text-primary">{product.price}</span>
                    </p>
                  </div>

                  {/* Pricing Cards Grid */}
                  {product.priceTable && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                      {product.priceTable.map((row, index) => {
                        const isLowest = index === product.priceTable!.length - 1;
                        return (
                          <div 
                            key={index} 
                            className={`relative rounded-2xl p-6 border-2 transition-all hover:scale-105 ${
                              isLowest 
                                ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-primary shadow-xl' 
                                : 'bg-card border-border hover:border-primary/50'
                            }`}
                          >
                            {isLowest && (
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                BEST VALUE
                              </div>
                            )}
                            <div className={`text-center ${isLowest ? 'pt-2' : ''}`}>
                              <p className={`text-sm font-medium mb-1 ${isLowest ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                Order Quantity
                              </p>
                              <p className={`text-lg font-bold mb-4 ${isLowest ? 'text-primary-foreground' : 'text-foreground'}`}>
                                {row.quantity}
                              </p>
                              <div className={`h-px w-full mb-4 ${isLowest ? 'bg-primary-foreground/20' : 'bg-border'}`} />
                              <p className={`text-sm font-medium mb-1 ${isLowest ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                Price Per Pair
                              </p>
                              <p className={`text-3xl font-bold ${isLowest ? 'text-primary-foreground' : 'text-primary'}`}>
                                {row.price}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Pricing Table (Alternative View) */}
                  <div className="bg-card rounded-2xl border shadow-sm overflow-hidden mb-8">
                    <div className="bg-secondary text-secondary-foreground p-6">
                      <h4 className="text-xl font-bold">Pricing Summary</h4>
                      <p className="text-secondary-foreground/70 mt-1">Complete breakdown of quantity-based pricing</p>
                    </div>
                    
                    {product.priceTable && (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-muted/50 border-b">
                              <th className="px-6 py-4 text-left font-bold">Order Quantity (Pairs)</th>
                              <th className="px-6 py-4 text-center font-bold">Price Per Pair (USD)</th>
                              <th className="px-6 py-4 text-right font-bold">Savings</th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.priceTable.map((row, index) => {
                              const basePrice = parseFloat(product.priceTable![0].price.replace('$', ''));
                              const currentPrice = parseFloat(row.price.replace('$', '').replace(' (floor)', ''));
                              const savings = ((basePrice - currentPrice) / basePrice * 100).toFixed(0);
                              
                              return (
                                <tr key={index} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                                  <td className="px-6 py-5">
                                    <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Package className="w-5 h-5 text-primary" />
                                      </div>
                                      <span className="font-semibold">{row.quantity}</span>
                                    </div>
                                  </td>
                                  <td className="px-6 py-5 text-center">
                                    <span className="text-2xl font-bold text-primary">{row.price}</span>
                                  </td>
                                  <td className="px-6 py-5 text-right">
                                    {index === 0 ? (
                                      <span className="text-muted-foreground">Base Price</span>
                                    ) : (
                                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold rounded-full text-sm">
                                        Save {savings}%
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                    
                  <div className="bg-muted/50 rounded-2xl p-6 border">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Truck className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-bold mb-1">Pricing Terms</h5>
                        <p className="text-sm text-muted-foreground">
                          All prices are FOB Pakistan. Shipping and customs duties calculated separately based on destination.
                        </p>
                      </div>
                    </div>
                    <a href={mailtoLink}>
                      <Button className="w-full h-12 text-lg">
                        Request Custom Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </TabsContent>
              )}

              {/* Contact Us Tab */}
              <TabsContent value="contact" className="pt-10">
                <div className="max-w-5xl">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold">Get in Touch</h3>
                      <p className="text-muted-foreground text-lg">
                        Interested in this product? Contact us for pricing, samples, or any questions you may have.
                      </p>
                      
                      <div className="space-y-4">
                        <a href="mailto:owner@everhideglobal.com" className="flex items-center gap-4 p-4 bg-card rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Email</p>
                            <p className="text-muted-foreground">owner@everhideglobal.com</p>
                          </div>
                        </a>

                        <a href="tel:+923226609155" className="flex items-center gap-4 p-4 bg-card rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Phone</p>
                            <p className="text-muted-foreground">+92 322 6609155</p>
                          </div>
                        </a>

                        <a
                          href="https://maps.app.goo.gl/DXPCK9EWaeZqQMDMA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 bg-card rounded-xl border hover:border-primary transition-colors"
                        >
                          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Location</p>
                            <p className="text-muted-foreground">TajBagh Beri Gali, House 17, Harbanspura, Lahore, Pakistan</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground rounded-2xl p-8">
                      <h4 className="font-bold text-xl mb-4">Quick Inquiry</h4>
                      <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                        Click below to send an inquiry for <span className="font-semibold text-primary">{product.name}</span>. Your email client will open with all product details pre-filled.
                      </p>
                      <a href={mailtoLink}>
                        <Button size="lg" className="w-full h-14 text-lg">
                          <Mail className="mr-2 h-5 w-5" />
                          Send Inquiry
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                      <p className="text-sm text-secondary-foreground/60 mt-4 text-center">
                        We typically respond within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Recommended Products */}
          <div className="mt-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">You May Also Like</h2>
              <Link to="/products" className="text-primary font-medium hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((recProduct) => (
                <Link
                  key={recProduct.id}
                  to={`/products/${recProduct.id}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={recProduct.images[0]}
                      alt={`${recProduct.name} - recommended leather gloves`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                      {recProduct.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {recProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-primary font-bold">{recProduct.price ? `${recProduct.price.split(' ')[0]} ${recProduct.price.split(' ')[1]}` : 'Contact for pricing'}</p>
                      {recProduct.moq && (
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">MOQ: {recProduct.moq}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetailPage;