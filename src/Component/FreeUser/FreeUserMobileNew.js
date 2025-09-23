import { useState } from 'react'
import React from 'react'
import styles from '../FreeUser/FreeUserMobileNew.module.css'
import Modal from '../Modal/Modal'
import FreeAccount from '../FreeAccount/FreeAccount'
const FreeUserMobileNew = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>

      <div><div className={styles.MobileContainer}>
        <div className={styles.MobileImgDiv}>
          {/* <img
            src="images/Mobile-Bg-Image.png"
            alt="Mobile-Bg-Image"
            className={styles.bgImg}
          /> */}
        </div>


        <div className={styles.rexGif}>
          <img src="Images/RexptGif.gif" alt="RexptGif" />
          <div className={styles.HorizontalLine}>
            <svg
              width=""
              height=""
              viewBox="0 0 422 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1051_54)">
                <ellipse
                  cx="211"
                  cy="7"
                  rx="201"
                  ry="2"
                  fill="url(#paint0_radial_1051_54)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1051_54"
                  x="0"
                  y="0"
                  width="422"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="5"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_1051_54"
                  />
                  <feOffset dy="5" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1051_54"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1051_54"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_1051_54"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(211 7) scale(201 2)"
                >
                  <stop stop-color="#DADADA" />
                  <stop offset="1" stop-color="#B1B6B4" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>


        <div className={styles.TextSectionBelowRex}>
          <div className={styles.TextFreeUserSection}>
            <h1>
              Get Your <span className={styles.FreeText}>FREE</span>
            </h1>
            <h2>
              AI Receptionist{" "}
              <span className={styles.INText}>
                in <b>just 3 minutes</b>
              </span>
            </h2>
            <div className={styles.joinBtn} onClick={() => setIsModalOpen(true)}>
              <img src="Svg/join-rexpt.svg" alt="join-rexpt" />
            </div>
          </div>

        </div>

      </div>

      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bgColor="transparent"
        boxShadow="unset" closeColor="#fff"
        // height="95dvh"
        maxWidth="500px"
      >
        <FreeAccount />
      </Modal>

    </>
  )
}

export default FreeUserMobileNew