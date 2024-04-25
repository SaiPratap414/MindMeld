import { FunctionComponent } from "react";
import Card from "./Card";
import styles from "./Team.module.css";

const Team: FunctionComponent = () => {
  return (
    <section className={styles.team}>
      <div className={styles.valueComparator}>
        <div className={styles.sectionTitle}>
          <div className={styles.content}>
            <h1 className={styles.heading}>Our Experts</h1>
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector-9.svg" />
          <img
            className={styles.conditionCheckerIcon}
            alt=""
            src="/frame-6.svg"
          />
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.row}>
          <div className={styles.content2}>
            <Card name1="Jane Doe" jobTitle="Therapist" />
            <Card name1="Full name" jobTitle="Job title" />
            <Card name1="Full name" jobTitle="Job title" />
            <Card name1="Full name" jobTitle="Job title" />
          </div>
          <div className={styles.content3}>
            <div className={styles.sliderDotsWrapper}>
              <div className={styles.sliderDots}>
                <div className={styles.dot} />
                <div className={styles.dot1} />
                <div className={styles.dot2} />
                <div className={styles.dot3} />
                <div className={styles.dot4} />
              </div>
            </div>
            <div className={styles.sliderButtons}>
              <button className={styles.button}>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </button>
              <button className={styles.button1}>
                <img className={styles.icon1} alt="" src="/icon-1.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
