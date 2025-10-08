// import React from 'react'
// import styles from '../GetInTouch/GetInTouch.module.css'

// const GetInTouch = ({ scrollToHowItWorks }) => {
//     return (
//         <div className={styles.containerBox}>
//             <div className={styles.container}>
//                 <div className={styles.section}>
//                     <div className={styles.LeftSection}>
//                         <h1 className={styles.subTitle}>Let's Get In Touch.</h1>
//                         <p className={styles.description}>
//                             Ready to <b>Stop Missing Calls</b> and <b>start growing your business?</b>

//                         </p>

//                         <div className={styles.joinImg} onClick={scrollToHowItWorks}>
//                             <img src='Svg/join-rexpt-white.svg' alt='join-rexpt-white.svg' />
//                         </div>

//                     </div>
//                     <div className={styles.RightSection}>
//                         <div className={styles.waveWrapper}>
//                             <div className={styles.waveDive}>
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                             </div>
//                             <img src="Svg/logo-icon.svg" alt="logo-icon" className={styles.logoIcon} />
//                         </div>
//                     </div>



//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GetInTouch
import React from "react";
import styles from "../GetInTouch/GetInTouch.module.css";
import { PortableText } from "@portabletext/react";
const ptComponents = {
  marks: {
    strong: ({ children }) => <b>{children}</b>,
    purple: ({ children }) => <span className="spanText">{children}</span>,
    break: ({ children }) => (
      <>
        <br />
        {children}
      </>
    ),
  },
};
const GetInTouch = ({ scrollToHowItWorks, getInTouch }) => {
  if (!getInTouch || getInTouch.enabled === false) return null;
  const {
    sectionLabel,
    headline,
    headlinePlain,
    cta,
    rightGraphic,
  } = getInTouch;
  const handleCTA = () => {
    if (cta?.url) window.location.href = cta.url;
    else scrollToHowItWorks?.();
  };
  return (
    <div className={styles.containerBox}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.LeftSection}>
            <h1 className={styles.subTitle}>
              {" "}
              {sectionLabel || "Let's Get In Touch."}
            </h1>
            <p className={styles.description}>
              {Array.isArray(headline) && headline.length ? (
                <PortableText value={headline} components={ptComponents} />
              ) : (
                headlinePlain || (
                  <>
                    Ready to <b>Stop Missing Calls</b> and{" "}
                    <b>start growing your business?</b>
                  </>
                )
              )}
            </p>

            <div className={styles.joinImg} onClick={handleCTA}>
              {cta?.image?.src ? (
                <img
                  src={cta.image.src}
                  alt={cta.image.alt || cta.label || "Join"}
                />
              ) : (
                <img
                  src="Svg/join-rexpt-white.svg"
                  alt="join-rexpt-white.svg"
                />
              )}
            </div>
          </div>
          <div className={styles.RightSection}>
            <div className={styles.waveWrapper}>
              <div className={styles.waveDive}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {rightGraphic?.src ? (
                <img
                  src={rightGraphic.src}
                  alt={rightGraphic.alt || "graphic"}
                  className={styles.logoIcon}
                />
              ) : (
                <img
                  src="Svg/logo-icon.svg"
                  alt="logo-icon"
                  className={styles.logoIcon}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
