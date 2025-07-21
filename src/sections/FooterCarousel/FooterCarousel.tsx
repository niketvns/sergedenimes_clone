"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./FooterCarousel.module.scss";
import { iconItems } from "./FooterCarousel.mock";
import classNames from "classnames";

const FooterCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    slidesToScroll: 1,
  });

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.height = "auto";
      const selectedSlide = carousel.querySelector(`.${styles.isSelected}`);
      if (selectedSlide) {
        const height = selectedSlide.getBoundingClientRect().height;
        carousel.style.height = `${height}px`;
      }
    }
  }, []);

  return (
    <section
      className={classNames(
        "py-24 px-20 select-none cursor-drag border-t border-gray-300",
        styles.footerCarousel
      )}
    >
      <div className={styles.fader}></div>
      <div className={classNames(styles.left, styles.fader)}></div>
      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.carouselViewport} ref={emblaRef}>
          <div className={styles.carouselContainer}>
            {iconItems?.map((item) => (
              <div
                key={item.id}
                className={`${styles.carouselItem} serge-footer-icons-icon`}
              >
                <div className={styles.icon}>
                  <Image
                    src={item.iconSrc}
                    alt={`${item.title} icon`}
                    width={40}
                    height={40}
                    priority={false}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className="font-semibold uppercase text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold">{item.text}</p>
                  <div className="text-xs underline font-semibold">
                    <Link href={item.link}>Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { FooterCarousel };
