"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { HeroBannerProps } from "./types";
import classNames from "classnames";

const HeroBanner: FC<HeroBannerProps> = ({
  desktopImage,
  mobileImage,
  action,
  heading,
  customClassName,
}): ReactElement => {
  return (
    <section
      className={classNames(
        "hero serge-bannergroup ratio-bannergroup relative h-screen",
        customClassName
      )}
    >
      <div className="serge-bannergroup-banner-image">
        <Image
          src={desktopImage?.src}
          alt={desktopImage?.alt}
          fill
          className="desktop object-cover hidden md:block"
          sizes="(max-width: 767px) 100vw, 1946px"
          priority
        />
        <Image
          src={mobileImage?.src}
          alt={mobileImage?.alt}
          fill
          className="mobile object-cover block md:hidden"
          sizes="(max-width: 767px) 100vw, 1946px"
          priority
        />
        <Link
          href={action?.href}
          className="absolute inset-0"
          aria-label={action?.description}
        />
        <div className="serge-banner-button serge-banner-button-banner_image_GnLACq absolute bottom-0 left-0 right-0 text-center pb-8">
          <h2 className="text-xl md:text-2xl font-serif text-current mb-4">
            {heading}
          </h2>
          <Link
            href={action?.href}
            className="btn inline-block px-4 py-2 text-current border border-current text-sm uppercase"
          >
            {action?.title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export { HeroBanner };
