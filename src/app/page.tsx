"use client";
import { products, products2, products3 } from "@/db/featuredProducts";
import { heroBanner1, heroBanner2, heroBanner3 } from "@/db/heroBanner";
import { TestimonialsContainer } from "@/sections/TestimonialsContainer";
import { FooterCarousel } from "@/sections/FooterCarousel";
import { HeroBanner } from "@/sections/HeroBanner";
import { MissionStatement } from "@/sections/MissionStatement";
import { FeaturedProducts } from "@/sections/ProductsContainer";
import { SignupBlock } from "@/sections/SignupBlock";
import { VideoBanner } from "@/sections/VideoBanner";
import { ReactElement } from "react";

export default function HomePage(): ReactElement {
  return (
    <div className="flex flex-col">
      <HeroBanner {...heroBanner1} customClassName="text-white" />
      <FeaturedProducts products={products} />
      <HeroBanner {...heroBanner2} />
      <FeaturedProducts products={products2} />
      <HeroBanner {...heroBanner3} />
      <FeaturedProducts products={products3} />
      <MissionStatement />
      <VideoBanner />
      <SignupBlock />
      <TestimonialsContainer />
      <FooterCarousel />
    </div>
  );
}
