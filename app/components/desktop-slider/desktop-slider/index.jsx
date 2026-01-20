import React from "react";
import img_1 from "../../../../public/desktop-slider-1.avif";
import img_2 from "../../../../public/desktop-slider-2.avif";
import img_3 from "../../../../public/desktop-slider-3.avif";
import img_4 from "../../../../public/desktop-slider-4.avif";
import Image from "next/image";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.scss";

export const DesktopSlider = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const slides = [
    { id: 1, image: img_1 },
    { id: 2, image: img_2 },
    { id: 3, image: img_3 },
    { id: 4, image: img_4 },
  ];
  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide) => (
            <div className={styles.embla__slide} key={slide.id}>
              <div className={styles.embla__slide__image}
              >
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={true}
                  quality={85}
                  sizes="(min-width: 640px) 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};
