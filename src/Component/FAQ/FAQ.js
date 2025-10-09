import React, { useMemo, useState, useEffect } from "react";
import styles from "../FAQ/FAQ.module.css";
import { PortableText } from "@portabletext/react";
const slugify = (str = "") =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "category";
const FAQ = ({ scrollToHowItWorks, faq }) => {
  const categories = useMemo(() => {
    const cats = faq?.categories || [];
    return cats.map((cat, ci) => {
      const id = slugify(cat.title) || `c${ci}`;
      const items = [];
      if (cat?.featured?.question) {
        items.push({
          key: `${id}-featured`,
          question: cat.featured.question,
          answerBlocks: cat.featured.answer,
          answerPlain: cat.featured.answerPlain,
          isFeatured: true,
        });
      }
      (cat?.faqs || []).forEach((f, fi) => {
        items.push({
          key: `${id}-q${fi}`,
          question: f.question,
          answerBlocks: f.answer,
          answerPlain: f.answerPlain,
          defaultOpen: !!f.defaultOpen,
        });
      });

      return { id, title: cat.title, items };
    });
  }, [faq]);
  const [active, setActive] = useState({});
  useEffect(() => {
    const next = {};
    categories.forEach((c) => {
      next[c.id] = c.items[0]?.key || null;
    });
    setActive(next);
  }, [categories]);

  const toggleAccordion = (sectionId, itemKey) => {
    setActive((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId] === itemKey ? null : itemKey,
    }));
  };

  const ptComponents = {
    marks: {
      purple: ({ children }) => <span className="spanText">{children}</span>,
      break: () => <br />,
    },
  };

  if (faq && faq.enabled === false) return null;
  return (
    <div className={styles.containerBox}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.Title}>
            <h1 className={styles.strokeText}>
              {faq?.sectionLabel || "Frequently Asked Questions"}
            </h1>
            <div className={styles.Strip}></div>
          </div>

          <div className={styles.SubtitleDiv}>
            <h3 className={styles.subtitle}>
              {faq?.headlinePlain ? (
                <>
                  {faq?.headline && (
                    <PortableText
                      value={faq.headline}
                      components={ptComponents}
                    />
                  )}
                </>
              ) : (
                <>
                  Browse through our{" "}
                  <span className="spanText"> FAQs Section </span> for most
                  Common Questions Answered for You
                </>
              )}
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.BottomSection}>
        <div className={styles.ForestImg}>
          <div className={styles.scroller}>
            <img src="/Images/forest-img.png" alt="forest" />
            <img src="/Images/forest-img2.png" alt="forest" />
          </div>
          <div className={styles.overlay}>
            <div className={styles.faqGrid}>
              {(categories.length ? categories : []).map((section) => (
                <div key={section.id} className={styles.faqColumn}>
                  <h3 className={styles.columnTitle}>{section.title}</h3>
                  {section.items.map((item) => {
                    const open = active[section.id] === item.key;
                    return (
                      <div
                        key={item.key}
                        className={`${styles.faqItem} ${
                          open ? styles.active : ""
                        } ${item.isFeatured ? styles.featuredItem : ""}`}
                      >
                        <div
                          className={styles.questionRow}
                          onClick={() => toggleAccordion(section.id, item.key)}
                        >
                          <h4>{item.question}</h4>
                          <span className={styles.icon}>
                            {open ? "−" : "+"}
                          </span>
                        </div>

                        <div
                          className={`${styles.answerWrapper} ${
                            open ? styles.open : ""
                          }`}
                        >
                          {item.answerBlocks?.length ? (
                            <PortableText
                              value={item.answerBlocks}
                              components={ptComponents}
                            />
                          ) : (
                            <p>{item.answerPlain || ""}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
