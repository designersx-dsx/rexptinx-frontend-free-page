import React, { useState } from "react";
import styles from "../FreeUser/FreeUser.module.css";
import FreeUserMobile from "./FreeUserMobile";
import Modal from "../Modal/Modal";


const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/us.svg" },
  { code: "fr", name: "French", flag: "https://flagcdn.com/fr.svg" },
  { code: "de", name: "German", flag: "https://flagcdn.com/de.svg" },
  { code: "in", name: "Hindi", flag: "https://flagcdn.com/in.svg" },
];
const FreeUser = ({ scrollToHowItWorks }) => {


  const [isModalOpen, setIsModalOpen] = useState(false);
 const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };
  return (
    <>
      <div className={styles.ForDeskTop}>
        <div className={styles.containerBox}>
          <div className={styles.container}>
            <div className={styles.ShapeDiv}>
              <div className={styles.gifDiv}>
                <img src="Images/RexptGif.gif" alt="RexptGif" />
              </div>
            </div>
          </div>
          <div className={styles.LeftSideSection}>
            <div className={styles.TextFreeUserSection}>
              <h1>
                Get Your <span className={styles.FreeText}>FREE</span>
              </h1>
              <h2>
                AI Receptionist{" "}
                <span className={styles.INText}>
                  in <b>just 3 minutes</b>
                </span>
              </h2>
            </div>
            <div className={styles.CTASection}>
              <div className={styles.CTATextSection}>
                <p>Join the Revolution & Transform</p>
                <ul>
                  <li>
                    Answer calls <b>24/7</b>- Even when you’re away
                  </li>
                  <li>
                    Schedule appointments <b>automatically</b>
                  </li>
                  <li>
                    <b>Nurture leads</b> and boost sales
                  </li>
                </ul>

                <div className={styles.joinBtn} onClick={scrollToHowItWorks}>
                  <img src="Svg/join-rexpt.svg" alt="join-rexpt" />
                </div>
              </div>



              <div className={styles.CTAVideo}>
                <div className={styles.VideoBox}>
                  <div
                    className={styles.thumbnail}
                    onClick={() => setIsModalOpen(true)}
                  >
                    <img src="/Images/CTA-Video.png" alt="ViewDemo" />
                    <div className={styles.playButton}>▶</div>
                  </div>
                </div>

                {/* Modal for Video */}
                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  bgColor="transparent"
                  boxShadow="unset"
                  closeColor="#fff"
                  maxWidth="900px"
                >
                  <div className={styles.videoWrapper}>
                    <iframe
                      className={styles.videoFrame}
                      width="100%"
                      height="500"
                      src="https://www.youtube.com/embed/qPuwdJjkBms?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Modal>
              </div>




            </div>
          </div>

          <div className={styles.callWrapper}>
            <div className={styles.iconWrapper}>
              <div className={styles.ripple}></div>
              <div className={styles.ripple}></div>
              <div className={styles.iconCircle}>
                <img src="Svg/call-blink.svg" alt="call" />
              </div>
            </div>
            <div className={styles.textBox}>
              <h5 className={styles.subText}>REX</h5>
              <h3 className={styles.mainText}>CALL ME</h3>
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
        <span className={styles.arrow}>▼</span>
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
      </div>
      <div className={styles.ForMobileView}>
        <FreeUserMobile />
      </div>
    </>
  );
};

export default FreeUser;
