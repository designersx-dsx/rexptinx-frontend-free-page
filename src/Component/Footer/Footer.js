import React from 'react'
import styles from "../Footer/Footer.module.css"
const Footer = () => {
    return (
      <footer className={styles.footer}>
      {/* Left - Logo */}
      <div className={styles.left}>
        <img src="Svg/rexpt-logo.svg" alt="rexpt" className={styles.logo} />
      </div>

      {/* Center - Copyright */}
      <div className={styles.center}>
        <p>Copyright 2025 © rexpt</p>
      </div>

      {/* Right - Social Icons */}
      <div className={styles.right}>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="Svg/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="Svg/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="Svg/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="Svg/youtube.svg" alt="YouTube" />
        </a>
      </div>
    </footer>
    )
}

export default Footer
