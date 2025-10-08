import React from "react";
import styles from "../HassleFree/HassleFree.module.css";

const HassleFree = ({ badgeSection }) => {
  const line1 = badgeSection?.line1 || "Convert conversations into";
  const line2 = badgeSection?.line2 || "Revenue, on autopilot.";
  const badges = Array.isArray(badgeSection?.badges) ? badgeSection.badges : [];
  return (
    <div className={styles.containerBox}>
      <div className={styles.container}>
        <div className={styles.LeftSection}>
          <div className={styles.Section}>
            {badges.length > 0 ? (
              badges.map((b, i) => (
                <div key={i} className={styles.sectinIcon}>
                  <img src={b.src} alt={b.alt || "badge"} loading="lazy" />
                </div>
              ))
            ) : (
              <>
                <div className={styles.sectinIcon}>
                  <img src="Svg/no-credit-card.svg" alt="credit-card" />
                </div>
                <div className={styles.sectinIcon}>
                  <img src="Svg/three-mint-setup.svg" alt="mini-setup" />
                </div>
                <div className={styles.sectinIcon}>
                  <img src="Svg/crm.svg" alt="crm" />
                </div>
                <div className={styles.sectinIcon}>
                  <img src="Svg/agentic.svg" alt="agentic" />
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.RightSection}>
          <div className={styles.content}>
            <h1>{line1}</h1>
            <h2 className="spanText ">{line2}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HassleFree;
