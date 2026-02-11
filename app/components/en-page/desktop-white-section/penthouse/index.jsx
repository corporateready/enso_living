"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Building from "../../svg-components/building";
import ButtonDownloading from "../../svg-components/button-download";
import { motion } from "motion/react";

const Index = ({ handlerFormOpen }) => {
  const ref = React.useRef(null);
  const [isHoveredButton, setIsHoveredButton] = React.useState(false);
  return (
    <div className={styles.section}>
      <div className={styles.wrapper} ref={ref}>
        <div className={styles.inner}>
          <div className={styles.inner__header}>
            <div className={styles.inner__image}>
              <Image
                src={"/desktop-penthouse-inner.avif"}
                alt="enso living penthouse"
                loading="eager"
                priority
                quality={85}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.head__content}>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={styles.title__text}
              >
                Triplex
                <br />Penthouse
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={styles.description__text}
              >
                The most exclusive penthouse in 
                <br />Brasov, arranged across 3 levels — 
                <br />an architectural masterpiece 
                <br />offering serenity at altitude
              </motion.p>
              <motion.button
                type="button"
                className={styles.offer__btn}
                aria-label="open penthouse form"
                onClick={handlerFormOpen}
                onHoverStart={() => setIsHoveredButton(true)}
                onHoverEnd={() => setIsHoveredButton(false)}
              >
                <span className={styles.span__text}>View the Penthouse</span>

                <ButtonDownloading isHoveredButton={isHoveredButton} />
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={styles.content}
          >
            <div className={styles.inner__list_item}>
              <svg
                className="w-[25rem] h-[27rem]"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8138 6.39284C18.5809 4.75276 17.8086 3.25657 16.6367 2.1755C15.4648 1.09442 13.9711 0.5 12.4262 0.5C10.8813 0.5 9.38748 1.09442 8.21561 2.1755C7.04375 3.25657 6.27136 4.75276 6.03846 6.39284C4.56957 6.39284 3.16084 7.01946 2.12218 8.13486C1.08351 9.25025 0.5 10.7631 0.5 12.3405C0.5 13.9179 1.08351 15.4307 2.12218 16.5461C3.16084 17.6615 4.56957 18.2881 6.03846 18.2881C6.72843 18.2955 7.41274 18.1539 8.05077 17.8718C8.56592 18.618 9.23669 19.2243 10.0093 19.642C10.782 20.0598 11.635 20.2774 12.5 20.2774C13.365 20.2774 14.218 20.0598 14.9907 19.642C15.7633 19.2243 16.4341 18.618 16.9492 17.8718C17.5873 18.1539 18.2716 18.2955 18.9615 18.2881C20.4304 18.2881 21.8392 17.6615 22.8778 16.5461C23.9165 15.4307 24.5 13.9179 24.5 12.3405C24.5 10.7631 23.9165 9.25025 22.8778 8.13486C21.8392 7.01946 20.4304 6.39284 18.9615 6.39284H18.8138Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.58252 12.3408L12.3518 15.3146V26.2186"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.3525 15.3146L15.1218 12.3408"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={`${styles.item__text} pb-[30rem]`}>
                <span className={styles.span__text}>
                 Private indoor 
                 <br />garden
                </span>
                <br />
                a green sanctuary 
                <br />where all 4 
                <br />seasons come to 
                <br />life
              </span>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                className="w-[25rem] h-[27rem]"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5 20.2842C24.5 23.5681 19.1277 26.219 12.5 26.219C5.87231 26.219 0.5 23.5681 0.5 20.2842"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.115 10.3914C17.115 13.1215 13.4227 17.3155 12.4997 17.3155C11.5766 17.3155 7.88428 13.1215 7.88428 10.3914C7.88428 6.43487 12.4997 0.5 12.4997 0.5C12.4997 0.5 17.115 6.43487 17.115 10.3914Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.58593 7.20697C6.27762 6.29677 3.87059 5.70512 1.42285 5.44629C1.42285 5.44629 2.06901 13.1418 4.69054 15.9312C6.5367 17.9095 11.8721 18.0282 12.5182 17.3358"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4142 7.20697C18.7225 6.29677 21.1296 5.70512 23.5773 5.44629C23.5773 5.44629 22.9312 13.1418 20.3096 15.9312C18.4635 17.9095 13.1281 18.0282 12.4819 17.3358"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={`${styles.item__text} pb-[30rem]`}>
                <span className={styles.span__text}>Jacuzzi area:</span>
                <br />
                moments of 
                <br />relaxation at 
                <br />height, with 
                <br />unobstructed 
                <br />view
              </span>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                className="w-[25rem] h-[27rem]"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9985 3.16376L21.4418 8.07985C21.388 8.19355 21.36 8.31917 21.36 8.44657C21.36 8.57398 21.388 8.6996 21.4418 8.8133L24.3513 12.9761C24.4349 13.0953 24.4855 13.2372 24.4971 13.3857C24.5088 13.5341 24.4811 13.6831 24.4173 13.8155C24.3535 13.9479 24.2561 14.0584 24.1362 14.1343C24.0164 14.2103 23.879 14.2485 23.7398 14.2448H18.8843C18.7653 14.2485 18.6486 14.2807 18.5428 14.339C18.437 14.3974 18.3447 14.4803 18.2728 14.5818L15.5671 18.7446C15.4877 18.8663 15.3781 18.9617 15.2505 19.02C15.123 19.0783 14.9827 19.0972 14.8456 19.0745C14.7086 19.0518 14.5802 18.9884 14.4751 18.8915C14.3701 18.7946 14.2925 18.6682 14.2513 18.5265L12.8058 13.5708C12.7728 13.4483 12.7113 13.3368 12.6271 13.2466C12.5428 13.1565 12.4385 13.0907 12.324 13.0554L7.69095 11.5092C7.55851 11.4651 7.44029 11.3822 7.34973 11.2698C7.25917 11.1574 7.1999 11.0201 7.17866 10.8735C7.15743 10.7269 7.17507 10.5768 7.2296 10.4404C7.28412 10.304 7.37333 10.1867 7.4871 10.1018L11.453 7.10852C11.5478 7.03158 11.6254 6.93289 11.6799 6.81968C11.7344 6.70648 11.7645 6.58165 11.768 6.45437V1.26076C11.7732 1.12435 11.8112 0.991681 11.8784 0.875595C11.9456 0.75951 12.0396 0.663944 12.1514 0.598151C12.2633 0.532357 12.3891 0.498565 12.5167 0.500047C12.6444 0.501528 12.7695 0.538233 12.8799 0.606608L16.7717 3.71881C16.8705 3.79221 16.9842 3.83946 17.1034 3.8567C17.2226 3.87393 17.3439 3.86064 17.4574 3.81792L22.0533 2.1528C22.1851 2.10325 22.3273 2.09455 22.4636 2.1277C22.5998 2.16085 22.7245 2.23451 22.8233 2.34018C22.9221 2.44585 22.9909 2.57923 23.0219 2.72495C23.0529 2.87066 23.0448 3.02278 22.9985 3.16376V3.16376Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.62 13.2549L0.5 26.2191"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.item__text}>
                <span className={styles.span__text}>
                  Customisable 
                  <br />design: 
                </span>{" "}an 
                <br />
                individually 
                <br />conceived 
                <br />interior reflecting 
                <br />your authentic 
                <br />personal style
              </span>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                className="w-[25rem] h-[27rem]"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 22.2613C0.5 22.2613 4.1923 18.3047 12.5 18.3047C20.8076 18.3047 24.4999 22.2613 24.4999 22.2613"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.499 18.3047V26.2178"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.19238 26.218L10.6539 18.3643"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.8072 26.218L14.3457 18.3643"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.11192 14.3487C6.08379 14.0197 6.08379 13.6886 6.11192 13.3595C6.11192 11.5232 6.79269 9.76204 8.00445 8.46354C9.21622 7.16504 10.8597 6.43555 12.5734 6.43555C14.2871 6.43555 15.9307 7.16504 17.1424 8.46354C18.3542 9.76204 19.035 11.5232 19.035 13.3595C19.0631 13.6886 19.0631 14.0197 19.035 14.3487"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 13.3594H2.34615"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.19238 4.45703L5.11546 5.44617"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.499 0.5V2.47828"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.8069 4.45703L19.8838 5.44617"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.5004 13.3594H22.6543"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={`${styles.item__text} pb-[30rem]`}>
                <span className={styles.span__text}>
                  Breathtaking 
                  <br />views:
                </span>
                <br /> a 360° panoramic 
                <br />perspective over 
                <br />the city and the 
                <br />mountains
              </span>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                className="w-[25rem] h-[25rem]"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.808 0.5H1.42311C1.17829 0.5 0.94349 0.597256 0.770373 0.770373C0.597256 0.94349 0.5 1.17829 0.5 1.42311V8.808"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.5004 8.808V1.42311C24.5004 1.17829 24.4031 0.94349 24.23 0.770373C24.0569 0.597256 23.8221 0.5 23.5773 0.5H16.1924"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1924 24.5004H23.5773C23.8221 24.5004 24.0569 24.4031 24.23 24.23C24.4031 24.0569 24.5004 23.8221 24.5004 23.5773V16.1924"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 16.1924V23.5773C0.5 23.8221 0.597256 24.0569 0.770373 24.23C0.94349 24.4031 1.17829 24.5004 1.42311 24.5004H8.808"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.item__text}>
                <span className={styles.span__text}>
                  Total area of 532.62 
                  <br />sqm 
                </span>{" "}
                distributed 
                <br />across 3 levels and 
                <br />designed for 
                <br />impeccable 
                <br />functionality and 
                <br />comfort
              </span>
            </div>
          </motion.div>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
            <Building />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute top-0 right-16 translate-0 z-3 w-664 h-248"
            >
              <Image
                src="/building-6.webp"
                alt="building part"
                loading="eager"
                priority={true}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
