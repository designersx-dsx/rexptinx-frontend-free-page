import React from 'react'
import styles from '../GetInTouch/GetInTouch.module.css'

const GetInTouch = () => {
    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.LeftSection}>
                        <h1 className={styles.subTitle}>Let's Get In Touch.</h1>
                        <p className={styles.description}>Ready to stop missing calls and start growing your business?</p>

                        <div className={styles.joinImg}>
                            <img src='Svg/join-rexpt-white.svg' alt='join-rexpt-white.svg' />
                        </div>

                    </div>
                    <div className={styles.RightSection}>
                        <div className={styles.waveWrapper}>
                            <div className={styles.waveDive}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <img src="Svg/logo-icon.svg" alt="logo-icon" className={styles.logoIcon} />
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default GetInTouch
