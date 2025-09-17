import React, { useState } from 'react'
import styles from '../FAQ/FAQ.module.css'

const FAQ = ({ scrollToHowItWorks }) => {
    const faqs = [
        {
            question: "Is it really free? What's the catch?",
            answer:
                "We understand that starting something new can bring questions. Here are some of the most common inquiries about our free AI receptionist."
        },
        {
            question: "How long does it take to set up?",
            answer:
                "Setup usually takes just a few minutes. Our system is designed to be quick and easy, so you can start using it right away without needing any technical expertise or complex installation process at all."
        },
        {
            question: "Do I need a credit card to sign up?",
            answer:
                "No, you don’t need a credit card to get started. We believe in making the process easy and accessible to everyone, without requiring financial details upfront or forcing you into commitments you’re not ready for."
        },
        {
            question: "Can I cancel anytime without charges?",
            answer:
                "Yes, you can cancel anytime without any hidden fees or penalties. We want you to feel completely free to try the service without pressure, and if it doesn’t fit your needs, you can stop instantly without stress."
        },
        {
            question: "Are there any hidden fees or extra costs later?",
            answer:
                "No hidden fees, no extra costs. Everything you need is included right from the start, and we’re transparent about how it works. What you see is what you get, with no surprise charges appearing later on."
        },
        {
            question: "What kind of support is available if I need help?",
            answer:
                "Our team is here to support you every step of the way. Whether it’s setup, troubleshooting, or answering questions, we provide helpful resources and friendly assistance so you always feel confident using our service."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.Title}>
                        <h1 className={styles.strokeText}>Frequently Asked Questions</h1>
                        <div className={styles.Strip}></div>
                    </div>

                    <div className={styles.SubtitleDiv}>
                        <h3 className={styles.subtitle}>Browse our <span className='spanText '> FAQ section </span> for all the information you need.</h3>
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
                        <div className={styles.left}>

                            <div className={styles.accordion}>
                                <h2 className={styles.Heading}>We understand that starting something new can bring questions. Here are some of the most common inquiries about our free AI receptionist.</h2>
                                {faqs.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.item} ${activeIndex === index ? styles.active : ""
                                            }`}
                                    >
                                        <div
                                            className={styles.titleRow}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <h3 className={styles.question}>{item.question}</h3>
                                            <span className={styles.icon}>
                                                {activeIndex === index ? "−" : "+"}
                                            </span>
                                        </div>

                                        <div
                                            className={`${styles.contentWrapper} ${activeIndex === index ? styles.open : ""
                                                }`}
                                        >
                                            <p className={styles.content}>{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right section (Join box) */}
                        <div className={styles.right}>
                            <div className={styles.joinBox} onClick={scrollToHowItWorks}>
                                <img src='Svg/join-rexpt.svg' alt='join-rexpt' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQ
