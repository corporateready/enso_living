"use client"
import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="w-[60rem] h-[60rem] rounded-full flex justify-center items-center absolute top-1/2 left-[20rem] translate-0 z-2 hover:cursor-pointer disabled:hover:cursor-default disabled:opacity-50 border border-white"
      type="button"
      aria-label="prev slide"
      {...restProps}
    >
      <span className="absolute z-3 inset-0 bg-[#717171]/20 backdrop-blur-[2px] rounded-full"></span>
      <svg
        className="w-[10rem] h-[17rem] relative z-4 "
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.220895 7.71896L7.75594 0.218956C7.82595 0.149275 7.90906 0.0939998 8.00053 0.0562877C8.092 0.0185756 8.19004 -0.000835493 8.28905 -0.000835484C8.38805 -0.000835476 8.48609 0.0185756 8.57756 0.0562877C8.66903 0.0939998 8.75214 0.149275 8.82215 0.218956C8.89216 0.288639 8.94769 0.371365 8.98558 0.46241C9.02347 0.553454 9.04297 0.651036 9.04297 0.749582C9.04297 0.848128 9.02347 0.94571 8.98558 1.03675C8.94769 1.1278 8.89216 1.21052 8.82215 1.28021L1.81927 8.24958L8.82215 15.219C8.96354 15.3597 9.04297 15.5506 9.04297 15.7496C9.04297 15.9486 8.96354 16.1395 8.82215 16.2802C8.68076 16.4209 8.489 16.5 8.28905 16.5C8.08909 16.5 7.89733 16.4209 7.75594 16.2802L0.220895 8.78021C0.150837 8.71055 0.0952585 8.62784 0.0573385 8.53679C0.0194194 8.44574 -9.75125e-05 8.34814 -9.75038e-05 8.24958C-9.74952e-05 8.15102 0.0194195 8.05343 0.0573385 7.96238C0.0952585 7.87133 0.150837 7.78861 0.220895 7.71896Z"
          fill="white"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="w-[60rem] h-[60rem] rounded-full flex justify-center items-center  absolute top-1/2 right-[25rem] translate-0 z-2 hover:cursor-pointer disabled:hover:cursor-default disabled:opacity-50 border border-white"
      type="button"
      aria-label="next slide"
      {...restProps}
    >
      <span className="absolute z-3 inset-0 bg-[#717171]/20 backdrop-blur-[2px] rounded-full"></span>
      <svg
        className="w-[10rem] h-[17rem] relative z-4"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.82207 8.78104L1.28703 16.281C1.21702 16.3507 1.13391 16.406 1.04244 16.4437C0.950968 16.4814 0.85293 16.5008 0.753924 16.5008C0.654917 16.5008 0.55688 16.4814 0.465409 16.4437C0.373939 16.406 0.290827 16.3507 0.220819 16.281C0.15081 16.2114 0.0952769 16.1286 0.0573887 16.0376C0.0195005 15.9465 0 15.849 0 15.7504C0 15.6519 0.0195005 15.5543 0.0573887 15.4632C0.0952769 15.3722 0.15081 15.2895 0.220819 15.2198L7.2237 8.25042L0.220819 1.28104C0.0794306 1.14031 -1.48977e-09 0.94944 0 0.750417C1.48977e-09 0.551394 0.0794306 0.360523 0.220819 0.219792C0.362207 0.0790615 0.553971 1.48284e-09 0.753924 0C0.953877 -1.48284e-09 1.14564 0.0790615 1.28703 0.219792L8.82207 7.71979C8.89213 7.78945 8.94771 7.87216 8.98563 7.96321C9.02355 8.05426 9.04307 8.15186 9.04307 8.25042C9.04307 8.34898 9.02355 8.44657 8.98563 8.53762C8.94771 8.62867 8.89213 8.71139 8.82207 8.78104Z"
          fill="white"
        />
      </svg>
      {children}
    </button>
  );
};
