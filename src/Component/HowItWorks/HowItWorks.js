import React, { useState } from "react";
import styles from "../HowItWorks/HowItWorks.module.css";
import Modal from "../Modal/Modal";
import FreeAccount from "../FreeAccount/FreeAccount";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { sendEmail } from "../../lib/Store";
import { PortableText } from "@portabletext/react";
const HowItWorks = ({ howitworks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  if (!howitworks) return null;
  const {
    sectionLabel,
    headlinePrefix,
    headlineHighlight,
    headlineSuffix,
    steps = [],
    ctaCard,
  } = howitworks;

  const handleCreateAccount = async () => {
    setErrMsg("");
    const trimmed = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValidEmail) {
      setErrMsg("Please enter a valid email address.");
      return;
    }
    try {
      setLoading(true);
      const res = await sendEmail(trimmed);
      if (res?.status === 200 && res?.data?.message === "OTP sent successfully")
        window.location.href = `https://app.rexpt.in?otpnotrequired&email=${encodeURIComponent(
          trimmed
        )}`;
      else {
        setErrMsg(
          res?.data?.message ||
            `Unexpected response (status ${res?.status ?? "unknown"})`
        );
      }
    } catch (e) {
      console.error("sendEmail failed:", e);
      setErrMsg(
        e?.response?.data?.message ||
          e?.message ||
          "Failed to send OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const ptComponents = {
    marks: {
      purple: ({ children }) => (
        <span className="text-purple-500 font-semibold">{children}</span>
      ),
      break: ({ children }) => (
        <>
          <br />
          {children}
        </>
      ),
    },
  };

  return (
    <>
      {" "}
      <div className={styles.containerBox}>
        <div className={styles.container}>
          <div className={styles.TopBar}>
            <div className={styles.Title}>
              <h1 className={styles.strokeText}>{sectionLabel}</h1>
              <div className={styles.Strip}></div>
            </div>

            <div className={styles.SubtitleDiv}>
              <h3 className={styles.subtitle}>
                {headlinePrefix}{" "}
                <span className="spanText ">{headlineHighlight}</span>{" "}
                {headlineSuffix}
              </h3>
            </div>
          </div>

          <div className={styles.timelineWrapper}>
            <div className={styles.timelineContainer}>
              {steps.map((s, idx) => (
                <div className={styles.step} key={idx}>
                  <div className={styles.leftIcon}>
                    {/* icon from Sanity, fallback to your old SVG if missing */}
                    {s?.icon?.src ? (
                      <img
                        src={s.icon.src}
                        alt={s?.icon?.alt || s.title || "icon"}
                      />
                    ) : (
                      <img
                        src={
                          idx === 0
                            ? "Svg/Sign-up.svg"
                            : idx === 1
                            ? "Svg/Customize.svg"
                            : "Svg/Go-live.svg"
                        }
                        alt="step-icon"
                      />
                    )}
                  </div>

                  <div className={styles.icon}>{idx + 1}</div>

                  <div className={styles.content}>
                    <h3>{s.title}</h3>

                    {Array.isArray(s.description) &&
                    s.description.length > 0 ? (
                      <PortableText
                        value={s.description}
                        components={ptComponents}
                      />
                    ) : (
                      s.descriptionPlain && <p>{s.descriptionPlain}</p>
                    )}

                    {/* CTA button only on the last step (as in your static design).
                        Move/duplicate if you want it elsewhere */}
                    {idx === steps.length - 1 && (
                      <div
                        className={styles.cerateBtn}
                        onClick={() => setIsModalOpen(true)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ")
                            setIsModalOpen(true);
                        }}
                      >
                        <img src="Svg/btn-shape.svg" alt="btn-shape" />
                        <p>
                          {ctaCard?.ctaLabel?.length ? (
                            <PortableText
                              value={ctaCard.ctaLabel}
                              components={ptComponents}
                            />
                          ) : (
                            ctaCard?.ctaLabelPlain || "Create my FREE account"
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.PhoneContainer}>
              <div className={styles.phoneFrame}>
                <div className={styles.card}>
                  {/* Logo */}
                  <div className={styles.logo}>
                    {ctaCard?.logo?.src ? (
                      <img
                        src={ctaCard.logo.src}
                        alt={ctaCard.logo.alt || "logo"}
                      />
                    ) : (
                      <img src="Svg/rexpt-logo.svg" alt="rexpt-logo" />
                    )}
                  </div>

                  <hr className={styles.divider} />

                  {/* Heading */}
                  <h2 className={styles.heading}>
                    {Array.isArray(ctaCard?.title) &&
                    ctaCard.title.length > 0 ? (
                      <PortableText
                        value={ctaCard.title}
                        components={ptComponents}
                      />
                    ) : (
                      ctaCard?.titlePlain && (
                        <>
                          {ctaCard.titlePlain.split("\n").map((line, i) => (
                            <h2 key={i}>
                              {line}
                              {i !==
                                ctaCard.titlePlain.split("\n").length - 1 && (
                                <br />
                              )}
                            </h2>
                          ))}
                        </>
                      )
                    )}
                  </h2>
                  <p className={styles.subText}>
                    {Array.isArray(ctaCard?.subtext) &&
                    ctaCard.subtext.length > 0 ? (
                      <PortableText
                        value={ctaCard.subtext}
                        components={ptComponents}
                      />
                    ) : (
                      ctaCard?.subtextPlain && <p>{ctaCard.subtextPlain}</p>
                    )}
                  </p>

                  {/* Input */}
                  <div className={styles.InputDiv}>
                    <input
                      type="email"
                      placeholder={
                        ctaCard?.emailPlaceholder || "johnwick@gmail.com"
                      }
                      className={`${styles.input} ${
                        errMsg ? styles.inputError : ""
                      }`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => {
                        if (!loading && e.key === "Enter")
                          handleCreateAccount();
                      }}
                      disabled={loading}
                      aria-invalid={!!errMsg}
                      aria-describedby={errMsg ? "email-error" : undefined}
                    />
                    {/* Error */}
                    {errMsg ? (
                      <p
                        id="email-error"
                        className={styles.errorText}
                        role="alert"
                      >
                        {errMsg}
                      </p>
                    ) : null}
                  </div>

                  {/* Button */}
                  <div
                    className={styles.btn}
                    role="button"
                    tabIndex={0}
                    onClick={loading ? undefined : handleCreateAccount}
                    onKeyDown={(e) => {
                      if (!loading && (e.key === "Enter" || e.key === " "))
                        handleCreateAccount();
                    }}
                    aria-busy={loading}
                    aria-disabled={loading}
                  >
                    <img src="Svg/btn-shape.svg" alt="btn-shape" />
                    <p>
                      {loading ? (
                        "Processing…"
                      ) : Array.isArray(ctaCard?.ctaLabel) &&
                        ctaCard.ctaLabel.length > 0 ? (
                        <PortableText
                          value={ctaCard.ctaLabel}
                          components={ptComponents}
                        />
                      ) : (
                        ctaCard?.ctaLabelPlain || (
                          <>
                            Create my <b>FREE</b> account
                          </>
                        )
                      )}
                    </p>
                  </div>

                  {/* Login link */}
                  <p className={styles.login}>
                    {/* Already have an account? <a href="#">Log In</a> */}
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

          <div className={styles.arrow}>
            <DotLottieReact
              src="https://lottie.host/873ef697-740b-42b9-afe8-461f833d05ca/pLzxIgFHR0.lottie"
              loop
              autoplay
            />
            {/* <img src="Svg/arrow.gif" alt="arrowGif" /> */}
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
