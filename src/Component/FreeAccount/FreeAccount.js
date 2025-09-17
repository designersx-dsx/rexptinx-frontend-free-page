import React from 'react'
import styles from '../FreeAccount/FreeAccount.module.css'

const FreeAccount = () => {
    return (
        <div>
            <div className={styles.PhoneContainer}>
                <div className={styles.phoneFrame}>
                    <div className={styles.card}>
                        {/* Logo */}
                        <div className={styles.logo}>
                            <img src='Svg/rexpt-logo.svg' alt='rexpt-logo' />
                        </div>

                        <hr className={styles.divider} />

                        {/* Heading */}
                        <h2 className={styles.heading}>Join Free-<br />Get Started</h2>
                        <p className={styles.subText}>
                            If it does not exist, We will create a <b>New FREE Account</b> for you.
                            Make sure the email ID provided is correct.
                        </p>

                        {/* Input */}
                        <div className={styles.InputDiv}>
                            <input
                                type="email"
                                placeholder="Johnvick@gmail.com"
                                className={styles.input}
                            />
                        </div>


                        {/* Button */}
                        <div className={styles.btn}>
                            <img src="Svg/btn-shape.svg" alt="btn-shape" />
                            <p>
                                Create my <b>FREE</b> account
                            </p>
                        </div>

                        {/* Login link */}
                        <p className={styles.login}>
                            Already have an account? <a href="#">Log In</a>
                        </p>

                        {/* Footer */}
                        <p className={styles.footer}>
                            No credit card required • Cancel anytime <br />
                            By signing up you agree to our <a href="#">Terms & Privacy</a>
                        </p>
                    </div>
                    <div className={styles.ellipsDiv}>
                        <div className={styles.elips1}>
                            <img src='Svg/Ellipse-yellow.svg' alt='Ellipse-blue' />

                        </div>
                        <div className={styles.elips2}>
                            <img src='Svg/Ellipse-blue.svg' alt='Ellipse-blue' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeAccount
