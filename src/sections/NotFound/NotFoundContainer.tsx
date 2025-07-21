"use client";

import React, { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

interface Collection {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
}

const collectionsData: Collection[] = [
  {
    slug: "/collections/perle",
    title: "PERLE",
    image: "/assets/generic-4x5_1cd12696-6bfb-4cb9-9d47-41b42352e5a8.avif",
    imageAlt: "PERLE Collection",
  },
  {
    slug: "/collections/space-desert-collection",
    title: "Space Desert Collection",
    image: "/assets/generic-4x5_22f16dab-81ce-4f92-8110-817e106bbcf0.avif",
    imageAlt: "Space Desert Collection",
  },
  {
    slug: "/collections/new-in",
    title: "New In",
    image: "/assets/generic-4x5_edfea96a-7b91-4f42-8e50-c9a216c508fb.avif",
    imageAlt: "New In Collection",
  },
  {
    slug: "/collections/all",
    title: "All",
    image: "/assets/generic-4x5.avif",
    imageAlt: "All Collections",
  },
];

interface NotFoundContainerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  collectionsTitle?: string;
  collections?: Collection[];
  className?: string;
}

const NotFoundContainer: FC<NotFoundContainerProps> = ({
  title = "Page not found",
  description = "The page you were looking for isn't here.",
  buttonText = "Continue shopping",
  buttonLink = "/collections/all",
  collectionsTitle = "Latest Collections",
  collections = collectionsData,
  className = "",
}): ReactElement => {
  return (
    <section
      className={`w-full px-4 py-12 md:py-16 lg:py-20 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 xl:gap-20 items-start">
          <div className="flex flex-col justify-center items-center text-center space-y-6 lg:pr-8">
            <div className="space-y-4">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={buttonLink}
                className="inline-block bg-black text-white px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                {buttonText}
              </Link>
            </div>
          </div>

          <hr />

          <div className="space-y-6 mx-auto lg:pl-8">
            <h2 className="text-lg text-xl font-bold text-gray-900">
              {collectionsTitle}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-[800px] ">
              {collections.map((collection) => (
                <Link
                  key={collection.slug}
                  href={collection.slug}
                  className="group block space-y-3 hover:scale-105 transition-transform duration-200"
                  title={collection.title}
                >
                  <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 33vw, 250px"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-gray-900 text-center group-hover:text-gray-600 transition-colors duration-200">
                    {collection.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NotFoundContainer };
