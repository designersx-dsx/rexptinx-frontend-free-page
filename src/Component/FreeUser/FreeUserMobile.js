import React from 'react'
import styles from '../FreeUser/FreeUser.module.css'

const FreeUserMobile = () => {
    return (
        <div className={styles.FreeUserMobileDiv}>
            <div className={styles.MobImage}>
                <img src='Images/Mobile-bg.png' alt='Mobile-bg' />
            </div>



            <div className={styles.AbsuluateDiv}>
                <div className={styles.MobgifDiv}>
                    <img src="Images/RexptGif.gif" alt="RexptGif" />
                </div>
                <div className={styles.ContentMob}>
                    <h1 className={styles.h1Title}>Get Your <span className={styles.SpanText}>Free</span></h1>
                    <h2 className={styles.h2Title}>AI Receptionist</h2>
                    <h5 className={styles.h5Title}>in <span className={styles.spandes}>Just 3 minutes</span></h5>
                    <div className={styles.JoiMobBtn}>
                        <img src='Svg/join-rexpt-mob.svg' alt='join-rexpt-mob' />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FreeUserMobile
