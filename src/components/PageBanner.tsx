import { ReactNode } from "react";
import pageBanner from "@/assets/page-banner.jpeg";

interface PageBannerProps {
  title: ReactNode;
  subtitle?: ReactNode;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${pageBanner})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="accent-line mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{title}</h1>
          {subtitle && <p className="text-lg text-white/85">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
