import Image from "next/image";
import styles from "./MissionStatement.module.scss";
import { FC, ReactElement } from "react";

const MissionStatement: FC = (): ReactElement => {
  return (
    <section
      className={`${styles.missionStatement} py-16 bg-white text-center`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`${styles.rte} text-2xl md:text-xl font-serif text-gray-900 mb-4 max-w-[600px] mx-auto`}
        >
          Every piece is made from 925 Sterling Silver, designed in London and
          hallmarked at the Goldsmiths&apos; Assay Office
        </div>
        <Image
          src="/assets/Hallmark_24.svg"
          alt="Hallmark"
          width={160}
          height={20}
          className={styles.bannerImage}
          sizes="(max-width: 767px) 80px, 160px"
        />
      </div>
    </section>
  );
};

export { MissionStatement };
