import React from 'react'
import styles from '../FAQ/FAQ.module.css'

const FAQ = () => {
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

        </div>
    )
}

export default FAQ
