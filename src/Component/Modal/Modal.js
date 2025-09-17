import React, { useEffect } from 'react'
import styles from '../Modal/Modal.module.css'

const Modal = ({ isOpen, onClose, children, bgColor = "#fff", boxShadow = "0px 5px 25px rgba(0, 0, 0, 0.3)", closeColor = "#000", maxWidth = "400px", }) => {
  // background scroll control
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: bgColor, boxShadow, maxWidth: maxWidth, }}
      >
        <button className={styles.closeBtn} onClick={onClose} style={{ color: closeColor }}>
          ✕
        </button>
        {children}
      </div>
    </div>

  )
}

export default Modal
