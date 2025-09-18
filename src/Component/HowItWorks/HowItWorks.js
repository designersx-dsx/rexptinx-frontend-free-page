import React, { useState, useRef } from "react";
import styles from "../HowItWorks/HowItWorks.module.css";
import Modal from "../Modal/Modal";
import FreeAccount from "../FreeAccount/FreeAccount";
import VariableProximity from "../AnimationFrame/AnimationFrame";

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  return (
    <>
      {" "}
      <div className={styles.containerBox}>
        <div className={styles.container}>
          <div className={styles.TopBar}>
            <div className={styles.Title}>
              {/* <div ref={containerRef} style={{ position: "relative" }}>
                <VariableProximity
                  label={
                    "Hover me! And then star React Bits on GitHub, or else..."
                  }
                  className={"variable-proximity-demo"}
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </div> */}

              <h1 className={styles.strokeText}>How It Works</h1>
              <div className={styles.Strip}></div>
            </div>

            <div className={styles.SubtitleDiv}>
              <h3 className={styles.subtitle}>
                A simple, <span className="spanText ">three-step process</span>{" "}
                to help you get started.
              </h3>
            </div>
          </div>

          <div className={styles.timelineWrapper}>
            <div className={styles.timelineContainer}>
              <div className={styles.step}>
                <div className={styles.leftIcon}>
                  <img src="Svg/Sign-up.svg" alt="Sign-upr" />
                </div>
                <div className={styles.icon}>1</div>
                <div className={styles.content}>
                  <h3>Sign Up</h3>
                  <p>
                    Tell us a little about your business to get your
                    personalized <b>AI agent.</b>
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.leftIcon}>
                  <img src="Svg/Customize.svg" alt="Customize" />
                </div>
                <div className={styles.icon}>2</div>
                <div className={styles.content}>
                  <h3>Customize</h3>
                  <p>
                    Use our simple interface to{" "}
                    <b>customize your agent’s voice</b> and call script in
                    minutes.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.leftIcon}>
                  <img src="Svg/Go-live.svg" alt="Go-live" />
                </div>
                <div className={styles.icon}>3</div>
                <div className={styles.content}>
                  <h3>Go Live</h3>
                  <p>
                    Forward your <b>business calls</b> to your new Rexpt number
                    and let your <b>AI receptionist</b> handle the rest.
                  </p>
                  <div
                    className={styles.cerateBtn}
                    onClick={() => setIsModalOpen(true)}
                  >
                    <img src="Svg/btn-shape.svg" alt="btn-shape" />
                    <p>Create my FREE account</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.PhoneContainer}>
              <div className={styles.phoneFrame}>
                <div className={styles.card}>
                  {/* Logo */}
                  <div className={styles.logo}>
                    <img src="Svg/rexpt-logo.svg" alt="rexpt-logo" />
                  </div>

                  <hr className={styles.divider} />

                  {/* Heading */}
                  <h2 className={styles.heading}>
                    Join Free-
                    <br />
                    Get Started
                  </h2>
                  <p className={styles.subText}>
                    If it does not exist, We will create a{" "}
                    <b>New FREE Account</b> for you. Make sure the email ID
                    provided is correct.
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
                    By signing up you agree to our{" "}
                    <a href="#">Terms & Privacy</a>
                  </p>
                </div>
                <div className={styles.ellipsDiv}>
                  <div className={styles.elips1}>
                    <img src="Svg/Ellipse-yellow.svg" alt="Ellipse-blue" />
                  </div>
                  <div className={styles.elips2}>
                    <img src="Svg/Ellipse-blue.svg" alt="Ellipse-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bgColor="transparent"
        boxShadow="unset"
        closeColor="#fff"
        maxWidth="500px"
      >
        <FreeAccount />
      </Modal>
    </>
  );
};

export default HowItWorks;
