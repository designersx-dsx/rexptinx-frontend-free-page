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
        <div className={styles.TextFreeUserSection}></div>
        <div className={styles.CTASection}></div>
      </div>
    </div>
  );
};

export default FreeUser;
