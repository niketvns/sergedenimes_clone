"use client";
import React, { FC, ReactElement, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { IconContainer, IconsNameList } from "@/components/Icons";
import { testimonialsData } from "./TestimonialsContainer.mock";

const TestimonialsContainer: FC = (): ReactElement => {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
      Fade(),
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <section className="flex flex-col items-center gap-12 px-8 py-16 bg-gray-50 border-b border-gray-200/50 w-full select-none">
      {/* Main testimonials carousel */}
      <div className="w-full max-w-md mx-auto relative">
        <button
          onClick={scrollPrev}
          className="absolute -left-16 lg:-left-40 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none z-10 disabled:opacity-50"
          aria-label="Previous testimonial"
        >
          <IconContainer
            icon={IconsNameList.ChevronLeftIcon}
            className="w-6 h-6 text-black"
          />
        </button>

        <button
          onClick={scrollNext}
          className="absolute -right-16 lg:-right-40 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none z-10 disabled:opacity-50"
          aria-label="Next testimonial"
        >
          <IconContainer
            icon={IconsNameList.ChevronRightIcon}
            className="w-6 h-6 text-black"
          />
        </button>

        <div className="overflow-hidden" ref={emblaMainRef}>
          <div className="flex">
            {testimonialsData?.map((testimonial) => (
              <div key={testimonial.id} className="flex-none w-full">
                <div className="text-center px-4">
                  <h2 className="text-lg md:text-xl font-normal italic leading-relaxed text-gray-900 mb-4">
                    <q>{testimonial.quote}</q>
                  </h2>
                  <div className="text-sm font-medium text-gray-700">
                    {testimonial.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="w-full max-w-4xl mx-auto overflow-hidden"
        ref={emblaThumbsRef}
      >
        <div className="flex gap-4 md:gap-8 justify-center">
          {testimonialsData.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => onThumbClick(index)}
              className={`relative w-20 h-6 md:w-32 md:h-8 flex-shrink-0 transition-opacity duration-300 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded ${
                index === selectedIndex ? "opacity-100" : "opacity-30"
              }`}
              aria-label={`View ${testimonial.source} testimonial`}
              aria-pressed={index === selectedIndex}
            >
              <Image
                src={testimonial.logo}
                alt={testimonial.logoAlt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 80px, 128px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TestimonialsContainer };
