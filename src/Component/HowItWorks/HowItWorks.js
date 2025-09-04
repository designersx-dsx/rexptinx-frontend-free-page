import React from 'react'
import styles from '../HowItWorks/HowItWorks.module.css'

const HowItWorks = () => {
    return (
        <div className={styles.containerBox}>
            <div className={styles.container}>
                <div className={styles.TopBar}>
                    <div className={styles.Title}>
                        <h1 className={styles.strokeText}>How It Works</h1>
                        <div className={styles.Strip}></div>
                    </div>

                    <div className={styles.SubtitleDiv}>
                        <h3 className={styles.subtitle}>A simple, <span className='spanText '>three-step process</span> to help you get started.</h3>
                    </div>

                </div>

             <div className={styles.timelineWrapper}>
                    <svg className={styles.curveLine} viewBox="0 0 200 600" preserveAspectRatio="none">
                        <path
                            d="M100 40 C 100 120, 100 200, 100 280 S 100 440, 100 520"
                            stroke="#999"
                            strokeWidth="2"
                            strokeDasharray="6,6"
                            fill="transparent"
                        />
                    </svg>

      <div className={styles.timelineContainer}>
        <div className={styles.step}>
          <div className={styles.leftIcon}>
            <img src="Images/user.png" alt="user" />
          </div>
          <div className={styles.icon}>1</div>
          <div className={styles.content}>
            <h3>Sign Up</h3>
            <p>
              Tell us a little about your business to get your personalized{" "}
              <b>AI agent.</b>
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.leftIcon}>
            <img src="Images/settings.png" alt="settings" />
          </div>
          <div className={styles.icon}>2</div>
          <div className={styles.content}>
            <h3>Customize</h3>
            <p>
              Use our simple interface to{" "}
              <b>customize your agent’s voice</b> and call script in minutes.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.leftIcon}>
            <img src="Images/call.png" alt="call" />
          </div>
          <div className={styles.icon}>3</div>
          <div className={styles.content}>
            <h3>Go Live</h3>
            <p>
              Forward your <b>business calls</b> to your new Rexpt number and let
              your <b>AI receptionist</b> handle the rest.
            </p>
          </div>
        </div>
      </div>
    </div>

            </div>
        </div>
    )
}

export default HowItWorks
