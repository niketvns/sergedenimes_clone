import Image from "next/image";

const VideoBanner: React.FC = () => {
  return (
    <section className="w-full max-h-[400px]">
      <div className="relative w-full aspect-[16/4]">
        <video
          playsInline
          loop
          autoPlay
          muted
          preload="none"
          className="hidden md:block w-full h-full object-cover"
          poster="/assets/desktop-poster.webp"
        >
          <source src="/assets/desktop-video.mp4" type="video/mp4" />
          <Image
            src="/assets/desktop-poster.webp"
            alt="Desktop video fallback"
            fill
            // className="object-cover"
            sizes="100vw"
          />
        </video>
        <video
          playsInline
          loop
          muted
          preload="none"
          className="block md:hidden w-full h-full object-cover"
          poster="/assets/mobile-poster.webp"
        >
          <source src="/assets/mobile-video.mp4" type="video/mp4" />
          <Image
            src="/assets/mobile-poster.webp"
            alt="Mobile video fallback"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </video>
      </div>
    </section>
  );
};

export { VideoBanner };
