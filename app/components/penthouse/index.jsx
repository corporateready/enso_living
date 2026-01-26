"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Building from "../svg-components/building-mobile";
import { motion, useInView } from "framer-motion";

const Index = ({ handlerFormOpen }) => {
  const container = React.useRef(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    root: container,
    once: true,
    margin: "-50px",
  });
  return (
    <div className={styles.premium} ref={ref}>
      <div className={styles.premium__inner}>
        <div className={styles.premium__header_inner}>
          <div className={styles.premium__title_image}>
            <Building />
            <motion.div
              className="w-[60rem] h-[27rem] absolute top-0 right-4 translate-0 z-2"
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
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
          <div className={styles.premium__title_content}>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.premium__title_text}
            >
              Penthouse triplex
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.premium__title_description}
            >
              Cel mai exclusivist penthouse din Brașov,{""}
              <br /> dispus în 3 niveluri — o capodoperă arhitecturală{""}
              <br /> ce oferă liniște de la altitudine.
            </motion.p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <div className={styles.premium__inner_image}>
            <Image
              src={"/penthouse-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={styles.box__dekor}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4997 9.73047V11.5766C12.4997 11.8214 12.4024 12.0562 12.2293 12.2293C12.0562 12.4024 11.8214 12.4997 11.5766 12.4997H9.73047"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.73047 0.5H11.5766C11.8214 0.5 12.0562 0.597252 12.2293 0.770363C12.4024 0.943473 12.4997 1.17826 12.4997 1.42308V3.26923"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 3.26923V1.42308C0.5 1.17826 0.597252 0.943473 0.770363 0.770363C0.943473 0.597252 1.17826 0.5 1.42308 0.5H3.26923"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.26923 12.4997H1.42308C1.17826 12.4997 0.943473 12.4024 0.770363 12.2293C0.597252 12.0562 0.5 11.8214 0.5 11.5766V9.73047"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.73047 3.26953V5.11569"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.26953 3.26953V5.11569"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.49985 4.19238V7.42315H5.11523"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.19238 9.26953C4.81511 9.86105 5.64119 10.1909 6.50008 10.1909C7.35896 10.1909 8.18504 9.86105 8.80777 9.26953"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.span}>Acces controlat prin Face ID</span>
            </div>
          </div>
          <div className={styles.inner__list}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.inner__list_item}
            >
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.34197 3.29516C9.22953 2.51722 8.85662 1.80753 8.29084 1.29474C7.72506 0.781951 7.00386 0.5 6.25798 0.5C5.5121 0.5 4.7909 0.781951 4.22512 1.29474C3.65934 1.80753 3.28643 2.51722 3.17398 3.29516C2.4648 3.29516 1.78466 3.59239 1.28319 4.12146C0.781723 4.65053 0.5 5.3681 0.5 6.11632C0.5 6.86454 0.781723 7.58211 1.28319 8.11118C1.78466 8.64024 2.4648 8.93747 3.17398 8.93747C3.5071 8.94097 3.83749 8.87381 4.14553 8.73999C4.39425 9.09396 4.7181 9.38155 5.09113 9.5797C5.46416 9.77785 5.87599 9.88106 6.29363 9.88106C6.71127 9.88106 7.12311 9.77785 7.49614 9.5797C7.86917 9.38155 8.19302 9.09396 8.44173 8.73999C8.74978 8.87381 9.08016 8.94097 9.41328 8.93747C10.1225 8.93747 10.8026 8.64024 11.3041 8.11118C11.8055 7.58211 12.0873 6.86454 12.0873 6.11632C12.0873 5.3681 11.8055 4.65053 11.3041 4.12146C10.8026 3.59239 10.1225 3.29516 9.41328 3.29516H9.34197Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.88477 6.11621L6.22176 7.52679V12.6989"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.22168 7.52679L7.55867 6.11621"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className={styles.item__text}>
                <span>Grădină privată interioară</span> un sanctuar verde {""}
                <br />
                unde toate cele 4 anotimpuri prind viață
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className={styles.inner__list_item}
            >
              <svg
                width="19"
                height="16"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0872 9.88379C12.0872 11.4415 9.49343 12.6989 6.29359 12.6989C3.09374 12.6989 0.5 11.4415 0.5 9.88379"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.52106 5.19187C8.52106 6.48683 6.73842 8.47618 6.29276 8.47618C5.8471 8.47618 4.06445 6.48683 4.06445 5.19187C4.06445 3.31512 6.29276 0.5 6.29276 0.5C6.29276 0.5 8.52106 3.31512 8.52106 5.19187Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.40462 3.68086C3.29017 3.24912 2.12805 2.96848 0.946289 2.8457C0.946289 2.8457 1.25825 6.49598 2.52393 7.81909C3.41525 8.75746 5.99117 8.81377 6.30313 8.48533"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.18269 3.68086C9.29714 3.24912 10.4593 2.96848 11.641 2.8457C11.641 2.8457 11.3291 6.49598 10.0634 7.81909C9.17206 8.75746 6.59614 8.81377 6.28418 8.48533"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className={styles.item__text}>
                <span>Zonă jacuzzi</span>: momente de răsfăț la înălțime, cu
                priveliști line spre orizontul montan
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className={styles.inner__list_item}
            >
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3628 1.76354L10.6112 4.09544C10.5853 4.14937 10.5717 4.20896 10.5717 4.26939C10.5717 4.32983 10.5853 4.38942 10.6112 4.44335L12.0159 6.41795C12.0563 6.47446 12.0807 6.54179 12.0863 6.61221C12.092 6.68263 12.0786 6.75329 12.0478 6.8161C12.017 6.87891 11.97 6.93133 11.9121 6.96734C11.8542 7.00336 11.7879 7.02151 11.7207 7.01973H9.37646C9.31901 7.0215 9.26267 7.03678 9.21157 7.06444C9.16048 7.0921 9.11593 7.13145 9.0812 7.17958L7.77489 9.15417C7.73657 9.21189 7.68362 9.25716 7.62204 9.28482C7.56046 9.31249 7.49274 9.32144 7.42656 9.31067C7.36038 9.29989 7.29841 9.26982 7.24768 9.22387C7.19696 9.17792 7.15952 9.11794 7.13962 9.05074L6.44173 6.70003C6.42581 6.64192 6.39611 6.58901 6.35542 6.54626C6.31474 6.5035 6.26439 6.47229 6.2091 6.45556L3.97226 5.72213C3.90831 5.70122 3.85124 5.66188 3.80751 5.60857C3.76379 5.55527 3.73518 5.49014 3.72492 5.42059C3.71467 5.35104 3.72319 5.27987 3.74951 5.21516C3.77584 5.15045 3.81891 5.0948 3.87384 5.05453L5.78857 3.6347C5.83437 3.59821 5.8718 3.55139 5.89813 3.49769C5.92445 3.444 5.93899 3.38478 5.94068 3.32441V0.860862C5.94317 0.796157 5.96153 0.733225 5.99396 0.678161C6.02639 0.623097 6.07181 0.577766 6.1258 0.546557C6.17979 0.515348 6.24054 0.499319 6.30216 0.500022C6.36378 0.500725 6.42418 0.518136 6.47752 0.550568L8.35646 2.02682C8.40416 2.06163 8.45905 2.08405 8.5166 2.09222C8.57416 2.1004 8.63273 2.09409 8.68752 2.07383L10.9065 1.28399C10.9701 1.26049 11.0388 1.25636 11.1045 1.27209C11.1703 1.28781 11.2305 1.32275 11.2782 1.37288C11.3259 1.423 11.3591 1.48627 11.3741 1.55539C11.3891 1.6245 11.3851 1.69666 11.3628 1.76354V1.76354Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.35157 6.5498L0.5 12.6993"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className={styles.item__text}>
                <span>Design personalizabil</span>: un interior conceput {""}
                <br />
                individual, ca o expresie a stilului tău autentic
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className={styles.inner__list_item}
            >
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 10.8229C0.5 10.8229 2.28267 8.94629 6.29369 8.94629C10.3047 8.94629 12.0874 10.8229 12.0874 10.8229"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.29199 8.94629V12.6996"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.28223 12.6988L5.40191 8.97363"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3033 12.6988L7.18359 8.97363"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.20843 7.06772C3.19485 6.91166 3.19485 6.75462 3.20843 6.59856C3.20843 5.72756 3.53711 4.89224 4.12216 4.27635C4.70722 3.66046 5.50072 3.31445 6.32811 3.31445C7.1555 3.31445 7.949 3.66046 8.53406 4.27635C9.11911 4.89224 9.44779 5.72756 9.44779 6.59856C9.46137 6.75462 9.46137 6.91166 9.44779 7.06772"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 6.59961H1.39134"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.28223 2.37695L2.7279 2.84611"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.29199 0.5V1.43832"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3041 2.37695L9.8584 2.84611"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0866 6.59961H11.1953"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className={styles.item__text}>
                <span>Vederi uimitoare</span>: o perspectivă panoramică{""}
                <br />
                de 360° asupra orașului și munților
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className={styles.inner__list_item}
            >
              <svg
                className="w-[13rem] h-[13rem]"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.65385 0.5H0.961538C0.839131 0.5 0.721737 0.549156 0.635181 0.636656C0.548626 0.724155 0.5 0.842829 0.5 0.966571V4.69914"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4995 4.69914V0.966571C12.4995 0.842829 12.4509 0.724155 12.3644 0.636656C12.2778 0.549156 12.1604 0.5 12.038 0.5H8.3457"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.3457 12.6308H12.038C12.1604 12.6308 12.2778 12.5816 12.3644 12.4941C12.4509 12.4066 12.4995 12.288 12.4995 12.1642V8.43164"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 8.43164V12.1642C0.5 12.288 0.548626 12.4066 0.635181 12.4941C0.721737 12.5816 0.839131 12.6308 0.961538 12.6308H4.65385"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className={styles.item__text}>
                <span>Suprafața totală de 532,62 m²</span> spațiu amplu{""}
                <br />
                distribuit în 3 niveluri, proiectat pentru {""}
                <br />
                funcționalitate impecabilă și confort în fiecare {""}
                <br />
                zonă
              </p>
            </motion.div>
          </div>
          <button
            type="button"
            className={styles.hero__btn}
            onClick={handlerFormOpen}
          >
            <span className={styles.span__text}>Vezi Penthouse-ul</span>

            <svg
              className="w-[50rem] h-[50rem]"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="24.5878"
                stroke="white"
                strokeWidth="0.82449"
              />
              <path
                d="M35.0765 24.495C35.3252 24.7706 35.4629 25.1287 35.4629 25.5C35.4629 25.8713 35.3252 26.2294 35.0765 26.505C33.5015 28.2 29.9165 31.5 25.7315 31.5C21.5465 31.5 17.9615 28.2 16.3865 26.505C16.1377 26.2294 16 25.8713 16 25.5C16 25.1287 16.1377 24.7706 16.3865 24.495C17.9615 22.8 21.5465 19.5 25.7315 19.5C29.9165 19.5 33.5015 22.8 35.0765 24.495Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.7305 28.5C27.3873 28.5 28.7305 27.1569 28.7305 25.5C28.7305 23.8431 27.3873 22.5 25.7305 22.5C24.0736 22.5 22.7305 23.8431 22.7305 25.5C22.7305 27.1569 24.0736 28.5 25.7305 28.5Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
