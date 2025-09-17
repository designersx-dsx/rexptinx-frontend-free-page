import React from 'react'
import styles from '../WhyRexpt/WhyRexpt.module.css'

const WhyRexpt = ({scrollToHowItWorks}) => {
    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.Title}>
                        <h1 className={styles.strokeText}>Why Rexpt?</h1>
                        <div className={styles.Strip}></div>
                    </div>

                    <div className={styles.SubtitleDiv}>
                        <h3 className={styles.subtitle}>Explore the <span className='spanText '>top benefits </span> of choosing Rexpt today.</h3>
                    </div>



                </div>



            </div>
            <div className={styles.sectionCard}>
                <div className={styles.LeftSection} onClick={scrollToHowItWorks}>
                    <div className={styles.content}>
                        <div className={styles.subheading}>
                            <h3>Improved Customer Experience</h3>
                        </div>
                        <div className={styles.customerImg}>
                            <img src='Images/customer-experience.png' alt='customer-experience' />
                        </div>
                        <div className={styles.desc}>
                            <p>Offer a professional, consistent experience to every caller.</p>
                        </div>

                    </div>
                </div>
                <div className={styles.RightSection}>
                    <div className={styles.part1} onClick={scrollToHowItWorks}>
                        <div className={styles.costEffective}>
                            <h3>Cost-Effective</h3>
                            <p>A powerful tool with no upfront cost, saving you money on hiring and training.</p>
                        </div>
                        <div className={styles.costEffectiveImg}>
                            <img src='Images/cost-effective.png' alt='cost-effective' />
                        </div>

                    </div>
                    <div className={styles.bothpart}>
                        <div className={styles.SecureReliable} onClick={scrollToHowItWorks}>
                            <div className={styles.content2}>
                                <h3>Secure & Reliable</h3>
                                <p>Your data and calls are secure, with a stable system.</p>
                            </div>
                            <div className={styles.ReliableImg}>
                                <img src='Images/Reliable-Img.png' alt='Reliable-Img' />
                            </div>
                        </div>
                        <div className={styles.Multiligual} onClick={scrollToHowItWorks}>
                            <div className={styles.content3}>
                                <div className={styles.MultiligualImg}>
                                    <img src='Images/Multilingual-agents.png' alt='Multilingual-agents' />
                                </div>
                                <h3>Multilingual Agents</h3>
                                <p>Support a wider range of customers with multilingual capability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyRexpt
