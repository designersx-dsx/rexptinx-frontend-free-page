import { useState } from "react";
import React from "react";
import styles from "../FreeUser/FreeUserMobileNew.module.css";
import Modal from "../Modal/Modal";
import FreeAccount from "../FreeAccount/FreeAccount";
const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/us.svg" },
  { code: "fr", name: "French", flag: "https://flagcdn.com/fr.svg" },
  { code: "de", name: "German", flag: "https://flagcdn.com/de.svg" },
  { code: "in", name: "Hindi", flag: "https://flagcdn.com/in.svg" },
];
const FreeUserMobileNew = ({ heroSection }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  const {
    titlePrefix = "Get Your",
    titleHighlight = "FREE",
    titleMain = "AI Receptionist",
    titleSuffix1 = "in",
    titleSuffix = "just 3 minutes",
    featuresTitle,
    features = [],
    cta = {},
    heroGif,
  } = heroSection || {};

  const heroGifUrl =
    (typeof heroGif === "string" && heroGif) ||
    heroGif?.url ||
    heroGif?.asset?.url ||
    "Images/RexptGif.gif";

  const joinHref = cta?.joinUrl || "#";
  const watchHref =
    cta?.WatchRexUrl || "https://www.youtube.com/embed/qPuwdJjkBms?autoplay=1";
  return (
    <>
      <div>
        <div className={styles.MobileContainer}>
          <div className={styles.MobileImgDiv}>
            {/* <img
            src="images/Mobile-Bg-Image.png"
            alt="Mobile-Bg-Image"
            className={styles.bgImg}
          /> */}
          </div>

          <div className={styles.rexGif}>
            <img src="Images/RexptGif.gif" alt="RexptGif" />
            <div className={styles.HorizontalLine}>
              <svg
                width=""
                height=""
                viewBox="0 0 422 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1051_54)">
                  <ellipse
                    cx="211"
                    cy="7"
                    rx="201"
                    ry="2"
                    fill="url(#paint0_radial_1051_54)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1051_54"
                    x="0"
                    y="0"
                    width="422"
                    height="24"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="5"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_1051_54"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1051_54"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1051_54"
                      result="shape"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_1051_54"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(211 7) scale(201 2)"
                  >
                    <stop stop-color="#DADADA" />
                    <stop offset="1" stop-color="#B1B6B4" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className={styles.TextSectionBelowRex}>
            <div className={styles.TextFreeUserSection}>
              <h1>
                {titlePrefix}{" "}
                <span className={styles.FreeText}>{titleHighlight}</span>
              </h1>
              <h2>
                {titleMain}
                <span className={styles.INText}>
                  {titleSuffix1 ? ` ${titleSuffix1} ` : " "}
                  <b>{titleSuffix}</b>
                </span>
              </h2>
              <div
                className={styles.joinBtn}
                onClick={() => setIsModalOpen(true)}
              >
                <img src="Svg/join-rexpt.svg" alt="join-rexpt" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.JoinPoints}>
          <div className={styles.JoinBox}>
            <p>{featuresTitle}</p>
            <ul>
              {" "}
              {Array.isArray(features) &&
                features.map((f, idx) => <li key={idx}>{f}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.languageDiv}>
        <div className={`${styles.dropdown} ${open ? styles.open : ""}`}>
          <button
            className={styles.dropdownToggle}
            onClick={() => setOpen(!open)}
          >
            <img src={selected.flag} alt={selected.name} />
            <span>{selected.name}</span>
            <span className={styles.arrow}>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.646447 1.14645C0.841709 0.951184 1.15829 0.951184 1.35355 1.14645L7 6.79289L12.6464 1.14645C12.8417 0.951184 13.1583 0.951184 13.3536 1.14645C13.5488 1.34171 13.5488 1.65829 13.3536 1.85355L7.35355 7.85355C7.15829 8.04882 6.84171 8.04882 6.64645 7.85355L0.646447 1.85355C0.451184 1.65829 0.451184 1.34171 0.646447 1.14645Z"
                  fill="#24252C"
                  stroke="#24252C"
                  stroke-width="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>

          <ul className={styles.dropdownMenu}>
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={styles.dropdownItem}
              >
                <img src={lang.flag} alt={lang.name} />
                <span>{lang.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bgColor="transparent"
        boxShadow="unset"
        closeColor="#fff"
        // height="95dvh"
        maxWidth="500px"
      >
        <FreeAccount />
      </Modal>
    </>
  );
};

export default FreeUserMobileNew;
