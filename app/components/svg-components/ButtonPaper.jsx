"use client";
import React from "react";
import { motion } from "motion/react";

function ButtonPaper({ isHoveredButton }) {
  return (
    <svg
      className="w-[50rem] h-[50rem] sm:w-[61rem] sm:h-[61rem]"
      viewBox="0 0 61 61"
      fill={`${isHoveredButton ? "white" : "none"}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30.5" cy="30.5" r="30" stroke="white" />
      <motion.path
        d="M23.0762 28.6923V22.5385C23.0762 22.1304 23.2383 21.7391 23.5268 21.4506C23.8153 21.1621 24.2066 21 24.6146 21H32.3069L39.9992 28.6923V39.4615C39.9992 39.8696 39.8372 40.2609 39.5486 40.5494C39.2601 40.8379 38.8688 41 38.4608 41H30.7685"
        stroke={`${isHoveredButton ? "#667761" : "white"}`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M32.3076 21V28.6923H39.9999"
        stroke={`${isHoveredButton ? "#667761" : "white"}`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        animate={isHoveredButton ? {} : { rotate: 360 }}
        transition={{
          duration: isHoveredButton ? 0 : 2,
          repeat: Infinity,
          ease: "linear",
        }}
        d="M24.6152 31.7695V41.0003"
        stroke={`${isHoveredButton ? "#667761" : "white"}`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        animate={isHoveredButton ? {} : { rotate: 360 }}
        transition={{
          duration: isHoveredButton ? 0 : 2,
          repeat: Infinity,
          ease: "linear",
        }}
        d="M20 36.3848H29.2308"
        stroke={`${isHoveredButton ? "#667761" : "white"}`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ButtonPaper;
