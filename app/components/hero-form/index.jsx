"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { motion } from "motion/react";

export const HeroForm = ({
  handlerFormOpen,
  name,
  email,
  phone,
  setPhone,
  setName,
  setEmail,
  formSubmitTrack,
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const [isDisabled, setIsDisabled] = React.useState(false);
  const [isHoveredButton, setIsHoveredButton] = React.useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (value) => {
    let cleanedValue = value.replace(/^\+0+/, "+40");
    cleanedValue = cleanedValue.replace(/^\+400/, "+40");

    setPhone(cleanedValue);
  };
  React.useEffect(() => {
    if (name.length >= 3 && email.match("@") && phone.length >= 12) {
      setIsDisabled(true);
    }
  }, [name, email, phone, isDisabled]);

  return (
    <div onClick={handlerFormOpen} className={styles.section}>
      <div className="absolute top-0 left-0 z-1 bg-black/40 inset-0 backdrop-blur-[14px]"></div>
      <div
        className={styles.inner}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          type="button"
          onClick={handlerFormOpen}
          className={styles.close__btn}
        >
          <svg
            className="w-[24rem] h-[24rem] sm:w-[30rem] sm:h-[30rem]"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.2857 0.5L0.5 29.2857"
              stroke={!!isMobile ? "#050505" : "#ffffff"}
              strokeLinecap="round"
              strokeLinejoin="round"
              suppressHydrationWarning
            />
            <path
              d="M0.5 0.5L29.2857 29.2857"
              stroke={!!isMobile ? "#050505" : "#ffffff"}
              strokeLinecap="round"
              strokeLinejoin="round"
              suppressHydrationWarning
            />
          </svg>
        </button>
        <div className={styles.inner__image_mobile}>
          <Image
            src="/form-bg-mobile.avif"
            alt="hero mobile background"
            loading="eager"
            priority={true}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
          />
        </div>
        <div className={styles.inner__image}>
          <Image
            src="/desktop-apartment-inner-5.avif"
            alt="hero mobile background"
            priority={true}
            loading="eager"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
          />
        </div>
        <div className={styles.inner__content}>
          <p className={styles.content__title}>
            Introdu datele tale {""}
            <br />
            de contact
          </p>
          <p className={styles.content__subtitle}>
            pentru a primi {""}
            <br />
            prezentarea PDF
          </p>
          <p className={styles.content__title_mobile}>
            Introdu datele tale de
            <br />
            contact pentru a primi
            <br />
            prezentarea PDF
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className={styles.form__submit}
          >
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Nume, Prenume"
              onChange={handleChangeName}
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={handleChangeEmail}
            />
            <div className={styles.phone__input}>
              <PhoneInput
                name="phone"
                defaultCountry="ro"
                style={{
                  "--react-international-phone-background-color": "#F4F2F2",
                  "--react-international-phone-text-color": "#7D7F80",
                  "--react-international-phone-border-color": "transparent",
                  "--react-international-phone-border-radius": "0%",
                  "--react-international-phone-width": "100%",
                  "--react-international-phone-height": `${
                    isMobile ? "60rem" : "62rem"
                  }`,
                  "--react-international-phone-dropdown-item-background-color":
                    "#FAF9F8",
                  "--react-international-phone-dropdown-top": isMobile
                    ? "45rem"
                    : "62rem",
                  "--react-international-phone-font-size": `${
                    isMobile ? "16px" : "18rem"
                  }`,
                }}
                value={phone}
                onChange={handleChangePhone}
              />
            </div>
            <motion.button
              type="button"
              className={styles.offer__btn}
              aria-label="form submitted"
              onClick={formSubmitTrack}
              disabled={!isDisabled}
              onHoverStart={() => setIsHoveredButton(true)}
              onHoverEnd={() => setIsHoveredButton(false)}
            >
              <span className={styles.span__text}>
                Descarcă acum prezentarea PDF
              </span>
              <svg
                className="w-[42rem] h-[42rem] sm:w-[61rem] sm:h-[61rem]"
                viewBox="0 0 61 61"
                fill={`${isHoveredButton && isDisabled ? "white" : "none"}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30.5" cy="30.5" r="30" stroke="white" />
                <motion.path
                  d="M23.0762 28.6923V22.5385C23.0762 22.1304 23.2383 21.7391 23.5268 21.4506C23.8153 21.1621 24.2066 21 24.6146 21H32.3069L39.9992 28.6923V39.4615C39.9992 39.8696 39.8372 40.2609 39.5486 40.5494C39.2601 40.8379 38.8688 41 38.4608 41H30.7685"
                  stroke={`${isHoveredButton && isDisabled ? "#667761" : "white"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <motion.path
                  d="M32.3076 21V28.6923H39.9999"
                  stroke={`${isHoveredButton && isDisabled ? "#667761" : "white"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <motion.path
                  animate={isHoveredButton && isDisabled ? {} : { rotate: 360 }}
                  transition={{
                    duration: isHoveredButton && isDisabled ? 0 : 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  d="M24.6152 31.7695V41.0003"
                  stroke={`${isHoveredButton && isDisabled ? "#667761" : "white"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <motion.path
                  animate={isHoveredButton && isDisabled ? {} : { rotate: 360 }}
                  transition={{
                    duration: isHoveredButton && isDisabled ? 0 : 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  d="M20 36.3848H29.2308"
                  stroke={`${isHoveredButton && isDisabled ? "#667761" : "white"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};
