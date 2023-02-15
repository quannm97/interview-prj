import React from "react";
import styles from "./Section.module.scss";
import { Fade } from "react-reveal";

const Section = ({
  title,
  backgroundImg,
  description,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    

    <section
      className={styles.wraper}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className={styles.wraperContent}>
        <Fade bottom>
          <div className={styles.sectionsText}>
            <h1>
              Rule <span className={styles.titleItalic}>{title}</span>
            </h1>
            <p>{description}</p>
          </div>
        </Fade>
        <div className={styles.contentDown}>
          
            <div className={styles.sectionBtnGroup}>
              <button className={`btn rounded-pill ${styles.btnLeft} `}>
                {leftBtnText}
              </button>
              <button className={`btn rounded-pill  ${styles.btnRight} `}>
                {rightBtnText}
              </button>
            </div>
          
          <span>
            <i className={`fas fa-chevron-down ${styles.downArrow}`}></i>
          </span>
        </div>
      </div>
    </section>
   
  );
};

export default Section;
