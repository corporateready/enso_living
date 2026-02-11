import React from "react";
import img_1 from "../../../../../public/landscape-slide.avif";
import img_2 from "../../../../../public/landscape-slide-4.avif";
import img_3 from "../../../../../public/landscape-slide-3.avif";
import img_4 from "../../../../../public/landscape-slide-2.avif";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.scss";

export const MobileSlider = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const slides = [
    {id:1,
    image:img_1},
    {id:2,
    image:img_2},
    {id:3,
    image:img_3},
    {id:4,
      image:img_4}
];
  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide) => (
            <div className={styles.embla__slide} key={slide.id}>
              <div className={styles.embla__slide__image}>
                <Image src={slide.image} alt="" fill priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
