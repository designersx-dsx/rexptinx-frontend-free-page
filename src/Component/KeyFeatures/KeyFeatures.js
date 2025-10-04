import React from 'react'
import styles from '../KeyFeatures/KeyFeatures.module.css'

const KeyFeatures = ({ scrollToHowItWorks }) => {
    const features = [
        {
            icon: "Svg/call-icon.svg",
            title: "24/7 Call Handling",
            desc: "Never miss a call again."
        },
        {
            icon: "Svg/appointment.svg",
            title: "Appointment Scheduling",
            desc: "Let your agent book and manage appointments directly."
        },
        {
            icon: "Svg/call-icon.svg",
            title: "Intelligent Call Routing",
            desc: "Route calls to the right person or department."
        },
        {
            icon: "Svg/appointment.svg",
            title: "Call History & Summaries",
            desc: "Get Call Summery with Intent & Sentimental Analysis in our built-in Mini CRM"
        }
    ];
    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.LeftSection}>
                    <div className={styles.Title}>
                        <h1 className={styles.strokeText}>Key Features</h1>
                        <div className={styles.Strip}></div>
                    </div>

                    <div className={styles.SubtitleDiv}>
                        <h3 className={styles.subtitle}>What you <span className='spanText '>get for FREE </span></h3>
                    </div>
                    <div className={styles.description}>
                        <p>Discover the TOP Features of Rexpt - AI Receptionist Service with FREE Signup.</p>
                    </div>

                    <div className={styles.KeyDiv}>
                        <img src='Svg/keyImg.svg' alt='key-icon' />
                        <div className={styles.joinBtn} onClick={scrollToHowItWorks}>
                            <img src="Svg/join-rexpt.svg" alt="join-rexpt" />
                        </div>
                    </div>
                </div>
                <div className={styles.RightSection}>
                    <div className={styles.boxBor}>
                        {features.map((item, index) => (
                            <div key={index} className={styles.box}>
                                <div className={styles.iconBox}>
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.JoinBtnMob} onClick={scrollToHowItWorks}>
                        <img src='Svg/join-rexpt-mob.svg' alt='join-rexpt-mob' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures
