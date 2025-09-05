import React from 'react'
import styles from '../HassleFree/HassleFree.module.css'

const HassleFree = () => {
  return (
    <div className={styles.containerBox}>
      <div className={styles.container}>
        <div className={styles.LeftSection}>
          <div className={styles.Section}>
            <div className={styles.sectinIcon}>  <img src='Svg/no-credit-card.svg' alt='no-credit-card' /></div>
            <div className={styles.sectinIcon}>
              <img src='Svg/three-mint-setup.svg' alt='three-mint-setup' />
            </div>
            <div className={styles.sectinIcon}>
              <img src='Svg/crm.svg' alt='crm' />
            </div>
            <div className={styles.sectinIcon}>
              <img src='Svg/agentic.svg' alt='agentic' />
            </div>

          </div>
        </div>
        <div className={styles.RightSection}>
          <div className={styles.content}>
            <h1>Convert conversations into</h1>
            <h2 className="spanText ">Revenue, on autopilot.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HassleFree
