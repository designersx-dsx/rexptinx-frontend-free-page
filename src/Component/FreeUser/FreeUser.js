import React from "react";
import styles from "../FreeUser/FreeUser.module.css";

const FreeUser = () => {
  return (
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
          </div>
          <div className={styles.CTAVideo}>
            <div className={styles.VideoBox}>
                <img src="/Images/CTA-Video.png" alt="ViewDemo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeUser;
