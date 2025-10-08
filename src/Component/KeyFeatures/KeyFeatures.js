import React from "react";
import styles from "../KeyFeatures/KeyFeatures.module.css";
import { PortableText } from "@portabletext/react";
const KeyFeatures = ({ scrollToHowItWorks, keyfeatureSectiondata }) => {
  if (!keyfeatureSectiondata) return null;

  const {
    sectionLabel,
    title,
    titlePlain,
    subtext,
    subtextPlain,
    cta,
    features = [],
  } = keyfeatureSectiondata;

  const handleCTA = () => {
    if (cta?.url) {
      window.location.href = cta.url;
    } else {
      scrollToHowItWorks?.();
    }
  };

  return (
    <div className={styles.containerBox}>
      <div className={styles.container}>
        <div className={styles.LeftSection}>
          <div className={styles.Title}>
            <h1 className={styles.strokeText}>{sectionLabel}</h1>
            <div className={styles.Strip}></div>
          </div>

          <div className={styles.SubtitleDiv}>
            <h3 className={styles.subtitle}>
              What you <span className="spanText ">get for FREE </span>
            </h3>
          </div>
          <div className={styles.description}>
            <p>
              {Array.isArray(subtext) && subtext.length ? (
                <PortableText value={subtext} />
              ) : (
                <p>
                  {subtextPlain ||
                    "Discover the TOP Features of Rexpt - AI Receptionist Service with FREE Signup."}
                </p>
              )}
            </p>
          </div>

          <div className={styles.KeyDiv}>
            <img
              className={styles.keyImg}
              src="Svg/keyImg.svg"
              alt="key-icon"
            />
            <div className={styles.joinBtn} onClick={handleCTA}>
              {cta?.image?.src ? (
                <img src={cta.image.src} alt={cta.image.alt || "Join"} />
              ) : (
                <img src="Svg/join-rexpt.svg" alt="join-rexpt" />
              )}
            </div>
          </div>
        </div>
        <div className={styles.RightSection}>
          <div className={styles.boxBor}>
            {features.map((f, i) => (
              <div
                key={i}
                className={`${styles.box} ${
                  f.highlightTile ? styles.highlight : ""
                }`}
              >
                <div className={styles.iconBox}>
                  {f?.icon?.src ? (
                    <img src={f.icon.src} alt={f.icon.alt || f.title} />
                  ) : (
                    <img src="Svg/call-icon.svg" alt={f.title} />
                  )}
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.JoinBtnMob} onClick={scrollToHowItWorks}>
            <img src="Svg/join-rexpt-mob.svg" alt="join-rexpt-mob" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
