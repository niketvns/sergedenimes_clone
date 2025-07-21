import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { FeaturedProductsProps } from "./types";

const FeaturedProducts: FC<FeaturedProductsProps> = ({
  products,
}): ReactElement | null => {
  if (products?.length === 0) return null;

  return (
    <section className="serge-banner-products py-16">
      <div className="container mx-auto px-4">
        <div className="serge-banner-products-products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((product) => (
            <div
              key={product.id}
              className="serge-card-product product-card relative"
            >
              <Link
                href={product.href}
                className="block"
                aria-label={product.name}
              >
                <div className="serge-card-product-image-container relative aspect-square">
                  <Image
                    src={product.imagePrimary}
                    alt={product.alt}
                    width={600}
                    height={600}
                    className="absolute inset-0 w-full h-full object-cover"
                    sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <Image
                    src={product.imageSecondary}
                    alt={product.alt}
                    width={600}
                    height={600}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <div className="serge-card-product-title text-sm font-semibold">
                    {product.name}
                  </div>
                  <div className="price standard text-xs text-gray-600">
                    {product.price}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturedProducts };
