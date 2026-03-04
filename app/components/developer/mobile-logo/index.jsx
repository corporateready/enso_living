"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Logo = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  const ensoLtrs = ["e", "n", "s", "o"];
  const developmentLtrs = [
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "m",
    "e",
    "n",
    "t",
  ];
  const ensoLetterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
      },
    }),
  };
  const developmentLetterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3 + i * 0.1,
        duration: 0.3,
      },
    }),
  };
  return (
    <div className="relative z-1 w-auto h-[160rem] flex flex-col items-center justify-center mt-[44rem] bg-none">
      <motion.svg
        initial="hidden"
        whileInView={loaded ? "visible" : "hidden"}
        viewport={{ once: true }}
        className="w-full h-full absolute top-0 -left-[18%] translate-0"
        viewBox="0 0 123 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: "translateZ(0)",
          willChange: "transform, opacity",
        }}
      >
        <defs>
          <mask id="brush_mask">
            <motion.path
              d="M 105 114
               A 36 36 0 0 1 77 78
               A 36 36 0 0 1 113 42
               A 36 36 0 0 1 149 78
               A 36 36 0 0 1 113 114"
              stroke="white"
              strokeWidth={20}
              strokeLinecap="round"
              fill="none"
              variants={{
                hidden: { pathLength: 0 },
                visible: {
                  pathLength: 1,
                  transition: {
                    duration: 3.5,
                    ease: "easeInOut",
                  },
                  transform: "translateZ(0)",
                  willChange: "transform, opacity",
                },
              }}
            />
          </mask>
        </defs>

          <motion.g mask="url(#brush_mask)" style={{ fill: "white" }}>
            <motion.path transition={{ delay: 0.3 }} d="M122.82,33.24l-.02.57c3.73.87,7.75,2.19,11.26,3.74.75.33,1.64,1.17,2.37,1.03-1.61-1.24-3.53-2.14-5.44-2.84.03-.51.97-.02,1.19.06,2.39.86,5.88,2.99,8.04,4.44,4.88,3.26,9.37,7.99,12.35,13.06.29.49.84,1.4.75,1.97-.82-1.16-1.44-2.59-2.37-3.69-.1-.12-.82-.71-.69-.06,2.76,4.14,5.51,8.6,6.57,13.51.41.05.22-.51.2-.76-.04-.47-.55-1.66.03-1.96-.11,1.18.43,2.38.47,3.52.09,2.26.45,4.85.98,7.16.17.72,1,1.1.13,1.69l.46.25c.24.79-.42.77-.45.92-.24,1.04.03,2.99,0,4.04-.02.67-.4,1.41-.23,2.15l.45-.91.02,2.14-.7.24v.79s.46-.68.46-.68c.22.61-.41,1.06-.45,1.48-.37,3.84-1.5,6.51-2.92,10.03-.24.59-.15,1.65-.42,2.11-1.15,1.95-4.67,7.96-6.1,9.3-.23.22-.65.17-.74.27-.14.16-.05.8-.26,1.16-.29.5-3.28,2.52-3.98,3.11-3.98,3.33-6.18,5.21-10.93,7.45-1.65.78-4.04,2.03-5.75,2.42-.23.05-.95.32-.92-.12,2.03-.61,4.26-1.38,6.14-2.38.32-.17.56.02.44-.57-2.39.83-5.29,2.27-7.7,2.84-.25.06-1.14.34-1.14-.12,3.75-1.04,7.02-3.12,10.44-4.88.73-.98-1.28.6-1.02-.11l8.4-6.12.11-.23-.43-.1.09-.58c-.9.84-1.86,1.65-2.86,2.36-6.35,4.55-10.71,6.15-18.22,7.64-1.41.28-2.81.64-4.22.88-.11-.67.16-.37.53-.48.85-.26,2.98-.39,3.41-.64.29-.17.08-.54.15-.69.03-.08,1.11.47,1.58,0l-.45-.45,1.13.22s-.17-.34-.1-.46c.29-.5,3.24-1.29,3.96-1.59l-.68-.23,9.98-5.55c-.54-.13-1.34.42-1.82.68-2.11,1.13-4.4,2.68-6.58,3.63-1.47.64-5,1.94-6.49,2.13-.24.03-.83.19-.77-.2.76.04,1.25-.9,1.8-1.04,1.22-.32,1.73-.21,3.24-.84,3.16-1.33,7.92-3.83,10.4-6.17.18-.17.7-.54.34-.8-3.33,3.54-7.6,4.6-11.98,6.17-1.63.59-3.15,1.47-4.99,1.83-.36.07-.46.21-.62-.29l9.75-3.41-.21-.43,2.37-1.61c-2.06.32-4.16,2.63-5.9,3.17-.12.04-.37.06-.33-.11.38-.21.55-.84.84-1.03,1.09-.73,3.68-1.63,5.06-2.36.88-.47,1.89-1.01,2.61-1.7l.45.68c1.12-1.12,3.17-2.14,4.09-3.4.24-.32.3-.66-.23-.23-.31.26-.76,1.09-1.25.8.54-.46.82-1.13,1.35-1.6,2.7-2.41,4.28-3.83,6.26-7.35.25-.44.35-1.16.58-1.47.34-.45.86-.32.89-.36.03-.03-.24-.42-.18-.73.36-1.83,2.5-5.42,3.17-7.74.99-3.43.84-5.34,1.1-8.65.06-.72.93-2.25.02-2.17v-.33c.64-.11.54-1.22.46-1.83-.06-.42-.42-.29-.46-.48-.12-.51.18-1.15-.46-1.54l.67-.11-.45-2.04-.45,1.13c.07-1.17-.74-2.26-1.03-3.17-2.71-8.52-4.64-10.89-11.46-16.45-.45-.37-1.42-.73-1.69-1.03-.25-.28-.13-.61.23-.46.39.16,1.19,1.39,1.7,1.02l-5.35-3.51-.43.44c-1.47-.88-3.08-1.58-4.71-2.11-8.09-2.63-18.57-2.31-26.26,1.3-.61.29-1.23.97-1.61,1.13-.41.17-.71-.11-1.19.13-.94.47-.58,1.05-.64,1.09-.24.18-1.35.16-1.78.6-.25.25-.27.72-.56,1.03-3.93,4.2-6.13,5.71-8.97,11.05-3.31,6.22-5.3,12.66-4.78,19.79l.45-.91c.46,7.16,3.45,13.96,8.62,18.95l-.78-.13-.23.47-1.93-1.14c-.43.45,3,3.4,3.42,3.73,3.32,2.62,5.43,3.32,9.29,4.55.54.17,1.52.97,2.03,1.15.26.09.45-.3.75-.3.15,0,1.88.49,2.13.59.87.34,3.56,2.26,3.66,3.15.03.29-.36.5-.37.64s.55.54.68.85c.5,1.17.3,3.88-.4,4.92-.59.88-2.35,1.84-3.01,2.72-.87.47-5.95.47-7.09.12-1.43-.44-4.08-2.12-5.42-2.97-7.92-5.03-14.47-11.88-18.73-20.29-.56-1.11-.88-2.31-1.47-3.41l-.45.45c-.04-1.95-.94-3.69-1.34-5.58-1.68-7.89-1.91-16.56.78-24.14.72-2.04,1.55-4.04,2.16-6.12l.22,1.36c1.99-4.26,4.29-8.45,7.37-12.03.74-.86,2.24-2.48,3.07-3.29.55-.53,2.15-1.41,2.23-1.52.18-.26-.04-.76.48-1.22s1.04-.23,1.6-.44c.2-.08,2.61-1.81,2.67-1.96.05-.13-.15-.37-.11-.5.15-.48,7.04-3.35,8.01-3.99.66-.05.19.27-.04.42-.58.37-1.29.54-1.87.86-.82.46-1.56,1.03-2.37,1.49-.51.29-2.25.53-2.09,1.54,1.44-.87,3.04-1.78,4.57-2.46,2.91-1.29,8.68-3.17,11.8-3.4,4.77-.36,9.35.45,14.04.66.35.02.67-.25,1.02-.23ZM108.3,34.14c-2.83,0-5.49,1.06-8.12,1.98-.37.13-.61-.12-.5.51l8.62-2.49ZM118.51,41.63h-6.13s0,.22,0,.22h6.13s0-.22,0-.22ZM155.25,64.56l-.17-1.07-1.18-2.56c-.03.74.25,1.43.5,2.1.16.43.47,1.28.85,1.53ZM150.93,77.27c.36-4.46.09-9.25-1.64-13.44-.31-.76-.59-1.74-1.3-2.21-.1.44.37.69.42,1.07.13.96.1.6.25,1.14.91,3.26,1.69,7.05,1.83,10.38l.45,3.06ZM155.47,86.34l.46-4.76-.68,3.75.22,1.02Z" />
            <motion.path transition={{ delay: 0.3, duration: 0.3 }} d="M118.51,31.65l-.79.22-7.38-.12c2.73-.22,5.44-.45,8.17-.11Z" />
            <motion.path transition={{ delay: 0.6, duration: 0.3 }} d="M92.25,102.12c.24.25.71.25.59.77-.16.16-3.12-2.09-3.4-2.49.93-.33,2.18,1.06,2.81,1.73Z" />
          </motion.g>
      </motion.svg>

      <div className="relative flex justify-center items-end gap-[10rem] w-auto h-auto bg-none mt-[274rem]">
        {ensoLtrs.map((letter, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={ensoLetterVariants}
            initial="hidden"
            whileInView={loaded ? "visible" : "hidden"}
            viewport={{ once: true }}
            className="text-[58rem] text-white uppercase"
            style={{
              fontFamily: "Mignon",
              transform: "translateZ(0)",
              willChange: "transform, opacity",
            }}
          >
            {letter}
          </motion.div>
        ))}
      </div>

      <div className="relative flex justify-center items-end gap-[4rem] w-auto h-auto bg-none mt-[-12rem] relative z-0">
        {developmentLtrs.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={developmentLetterVariants}
            initial="hidden"
            whileInView={loaded ? "visible" : "hidden"}
            viewport={{ once: true }}
            className="text-[14rem] text-white font-semibold uppercase"
            style={{
              fontFamily: "Mignon",
              transform: "translateZ(0)",
              willChange: "transform, opacity",
            }}
          >
            {letter}
          </motion.span>
        ))}
        {loaded ? (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            viewport={{ once: true }}
            className="after:content-[''] after:absolute after:top-[-68rem] after:right-[-3rem] after:translate-0 after:w-[17rem] after:h-[3rem] after:bg-white"
          ></motion.span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
