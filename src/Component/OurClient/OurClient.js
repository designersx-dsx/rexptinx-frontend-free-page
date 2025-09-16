import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import styles from '../OurClient/OurClient.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClient = () => {
    const sliderRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(2);

    useEffect(() => {
        // 👇 Safe for Next.js (window check)
        const updateSlides = () => {
            if (window.innerWidth <= 500) {
                setSlidesToShow(1);
            } else if (window.innerWidth <= 650) {
                setSlidesToShow(2);
            } else if (window.innerWidth < 1200) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(2);
            }
        };

        updateSlides(); // run on load
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 650,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 500,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    const testimonials = [
        {
            text: `“Rxpt has completely transformed the way we handle customer inquiries. Earlier, we struggled with managing calls during peak hours, but now the AI receptionist handles everything smoothly and professionally. The voice feels natural, and customers don’t even realize they are speaking to AI. It has saved us both time and operational costs.”`,
            author: "Freddie , CEO",
        },
        {
            text: `“Absolutely amazing experience! The AI receptionist works flawlessly and has completely changed the way we handle customer calls. It saves us so much time and improves customer satisfaction. Highly recommend!”`,
            author: "Loyed , Business Owner",
        },
        {
            text: `“This solution is a game changer for our company. The professionalism, speed, and natural voice quality really impressed our clients. Fantastic product!”`,
            author: "Sophia , Manager",
        },
    ];
    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.LeftSection}>
                    <div className={styles.Title}>
                        <h1 className={styles.strokeText}>Our Client Say</h1>
                        <div className={styles.Strip}></div>
                    </div>

                    <div className={styles.SubtitleDiv}>
                        <h3 className={styles.subtitle}>Hear the Voice of those <span className='spanText '>Who Chose us </span></h3>
                    </div>
                    <div className={styles.description}>
                        <p>Testimonials and success stories from satisfied users.</p>
                    </div>
                </div>
                <div className={styles.RightSection}>
                    <div className={styles.sliderWrapper}>
                        <Slider {...settings} ref={sliderRef}>
                            {testimonials.map((item, i) => (
                                <div key={i} >
                                    <div className={styles.card}>
                                        <div className={styles.stars}>★★★★★</div>
                                        <p className={styles.text}>{item.text}</p>
                                        <p className={styles.author}>— {item.author}</p>
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className={styles.bothBtn}>
                        <div className={styles.LeftBtn} onClick={() => sliderRef.current.slickPrev()}>
                            <img src="Svg/left-arrow.svg" alt="left-arrow" />
                        </div>
                        <div className={styles.RightBtn} onClick={() => sliderRef.current.slickNext()}>
                            <img src="Svg/right-arrow.svg" alt="right-arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClient
