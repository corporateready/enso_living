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
      className="w-[360rem] h-[820rem] flex justify-center items-center absolute top-0 left-0 translate-0 z-1 overflow-hidden hover:cursor-pointer disabled:hover:cursor-default"
      type="button"
      aria-label="prev slide"
      {...restProps}
    >
      <span className="absolute top-0 left-0 z-2 bg-white/30 inset-0 backdrop-blur-[4px]"></span>
      <svg
        className="w-[15rem] h-[67rem] relative z-4 ml-[40rem]"
        viewBox="0 0 20 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9736 75.5L0.556979 37.5L18.9736 0.5"
          stroke="black"
          strokeLinecap="round"
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
      className="w-[360rem] h-[820rem] flex justify-center items-center absolute top-0 right-0 translate-0 z-2 hover:cursor-pointer disabled:hover:cursor-default"
      type="button"
      aria-label="next slide"
      {...restProps}
    >
      <span className="absolute top-0 left-0 z-2 bg-white/30 inset-0 backdrop-blur-[4px]"></span>
      <svg
        className="w-[15rem] h-[67rem] relative z-4 ml-[-60rem]"
        viewBox="0 0 15 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5L13.5 33.5968L0.5 65.8226"
          stroke="black"
          strokeLinecap="round"
        />
      </svg>

      {children}
    </button>
  );
};
