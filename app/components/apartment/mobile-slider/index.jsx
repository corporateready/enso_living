import React from "react";
import img_1 from "../../../../public/mobile-apartment-inner-1.avif";
import img_2 from "../../../../public/mobile-apartment-inner-2.avif";
import img_3 from "../../../../public/mobile-apartment-inner-3.avif";
import img_4 from "../../../../public/mobile-apartment-inner-4.avif";
import img_5 from "../../../../public/mobile-apartment-inner-5.avif";
import img_6 from "../../../../public/mobile-apartment-inner-6.avif";
import img_7 from "../../../../public/mobile-apartment-inner-7.avif";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.scss";

export const MobileSlider = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const slides = [
    { id: 1, image: img_1 },
    { id: 2, image: img_2 },
    { id: 3, image: img_3 },
    { id: 4, image: img_4 },
    { id: 5, image: img_5 },
    { id: 6, image: img_6 },
    { id: 7, image: img_7 },
  ];
  return (
    <section className={styles.embla}>
      <div className="w-[68rem] h-[68rem] absolute bottom-[-24rem] left-1/2 -translate-1/2 z-1">
      <Image
          src={"/slider-navigate.avif"}
          alt="hero mobi"
          loading="eager"
          priority={true}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
      </div>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide) => (
            <div className={styles.embla__slide} key={slide.id}>
              <div className={styles.embla__slide__image}>
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={true}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
