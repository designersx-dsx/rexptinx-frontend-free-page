import React, { useState } from "react";
import Slider from "react-slick";
import styles from "../SliderSection/SliderSection.module.css";

// slick imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = () => {
  const slides = [
    { id: 1, title: "CONTAINMENT RATE", value: "91%", tag: "Efficiency Level" },
    { id: 2, title: "HOLD RATE", value: "87%", tag: "Performance" },
    { id: 3, title: "SATISFACTION", value: "94%", tag: "User Score" },
    { id: 4, title: "AVAILABILITY", value: "99%", tag: "Uptime" },
    { id: 5, title: "RESPONSIVENESS", value: "89%", tag: "Speed" }
  ];

  const [active, setActive] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    speed: 700,
    arrows: false,
    dots: true,
    afterChange: (current) => setActive(current),
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 1, centerMode: true }
      }
    ]
  };

  const leftIndex = (active - 1 + slides.length) % slides.length;
  const rightIndex = (active + 1) % slides.length;

  return (
    <div className={styles.containerBox}>
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {slides.map((item, idx) => {
              const cardClass = [
                styles.card,
                idx === active
                  ? styles.center
                  : idx === leftIndex
                  ? styles.left
                  : idx === rightIndex
                  ? styles.right
                  : styles.side
              ].join(" ");

              return (
                <div key={item.id} className={styles.slideItem}>
                  <div className={cardClass}>
                    <span className={styles.tag}>{item.tag}</span>
                    <h3 className={styles.title}>{item.title}</h3>
                    <h1 className={styles.value}>{item.value}</h1>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
