import React from 'react';
import styles from './Section.module.scss';

const Section = ({title,backgroundImg,description,leftBtnText,rightBtnText}) => {
  return (
    <section className={styles.wraper} style={{backgroundImage:`url(${backgroundImg})`}}>
      <div className={styles.wraperContent}>
        <div className={styles.sectionsText}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.contentDown}>
        <div className={styles.sectionBtnGroup}>
          <button  className={`${styles.btnLeft} btn rounded-pill`}>{leftBtnText}</button>
          <button  className={`${styles.btnRight} btn rounded-pill`}>{rightBtnText}</button>
        </div>
        <span>
        <i className={`fas fa-chevron-down ${styles.downArrow}`}></i>
        </span>
        </div>
      </div>
    </section>
  )
}

export default Section;