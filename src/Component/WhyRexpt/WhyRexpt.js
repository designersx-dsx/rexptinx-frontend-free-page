import React from "react";
import styles from "../WhyRexpt/WhyRexpt.module.css";
import { PortableText } from "@portabletext/react";

const ptComponents = {
  marks: {
    purple: ({ children }) => (
      <span className="spanText">{children}</span> 
    ),
    break: ({ children }) => (
      <>
        <br />
        {children}
      </>
    ),
  },
};
const toneClass = {
  lavender: styles.toneLavender,
  pink: styles.tonePink,
  sand: styles.toneSand,
  mint: styles.toneMint,
};

const WhyRexpt = ({ scrollToHowItWorks, rexptSectionPage }) => {
  if (!rexptSectionPage) return null;

  const { sectionLabel, title, titlePlain, benefits = [] } = rexptSectionPage;

  return (
    <div className={styles.containerBox}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.Title}>
            <h1 className={styles.strokeText}>{sectionLabel || "Why Rexpt?"}</h1>
            <div className={styles.Strip}></div>
          </div>

          <div className={styles.SubtitleDiv}>
            <h3 className={styles.subtitle}>
              {Array.isArray(title) && title.length ? (
                <PortableText value={title} components={ptComponents} />
              ) : (
                titlePlain || (
                  <>
                    Explore the <span className="spanText">top benefits</span> of
                    choosing Rexpt today.
                  </>
                )
              )}
            </h3>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.sectionCard}>
        {/* Left big card = first benefit */}
        {benefits[0] && (
          <div
            className={`${styles.LeftSection} ${
              toneClass[benefits[0].tone] || ""
            } ${benefits[0].rounded ? styles.rounded : ""}`}
            onClick={scrollToHowItWorks}
          >
            <div className={styles.content}>
              <div className={styles.subheading}>
                <h3>{benefits[0].title}</h3>
              </div>
              <div className={styles.customerImg}>
                {benefits[0].illustration?.src && (
                  <img
                    src={benefits[0].illustration.src}
                    alt={benefits[0].illustration.alt || benefits[0].title}
                  />
                )}
              </div>
              <div className={styles.desc}>
                <p>{benefits[0].description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Right three cards */}
        <div className={styles.RightSection}>
          {benefits[1] && (
            <div
              className={`${styles.part1} ${
                toneClass[benefits[1].tone] || ""
              } ${benefits[1].rounded ? styles.rounded : ""}`}
              onClick={scrollToHowItWorks}
            >
              <div className={styles.costEffective}>
                <h3>{benefits[1].title}</h3>
                <p>{benefits[1].description}</p>
              </div>
              <div className={styles.costEffectiveImg}>
                {benefits[1].illustration?.src && (
                  <img
                    src={benefits[1].illustration.src}
                    alt={benefits[1].illustration.alt || benefits[1].title}
                  />
                )}
              </div>
            </div>
          )}

          <div className={styles.bothpart}>
            {benefits[2] && (
              <div
                className={`${styles.SecureReliable} ${
                  toneClass[benefits[2].tone] || ""
                } ${benefits[2].rounded ? styles.rounded : ""}`}
                onClick={scrollToHowItWorks}
              >
                <div className={styles.content2}>
                  <h3>{benefits[2].title}</h3>
                  <p>{benefits[2].description}</p>
                </div>
                <div className={styles.ReliableImg}>
                  {benefits[2].illustration?.src && (
                    <img
                      src={benefits[2].illustration.src}
                      alt={benefits[2].illustration.alt || benefits[2].title}
                    />
                  )}
                </div>
              </div>
            )}

            {benefits[3] && (
              <div
                className={`${styles.Multiligual} ${
                  toneClass[benefits[3].tone] || ""
                } ${benefits[3].rounded ? styles.rounded : ""}`}
                onClick={scrollToHowItWorks}
              >
                <div className={styles.content3}>
                  <div className={styles.MultiligualImg}>
                    {benefits[3].illustration?.src && (
                      <img
                        src={benefits[3].illustration.src}
                        alt={benefits[3].illustration.alt || benefits[3].title}
                      />
                    )}
                  </div>
                  <h3>{benefits[3].title}</h3>
                  <p>{benefits[3].description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRexpt;
