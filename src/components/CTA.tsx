import { FunctionComponent } from "react";
import styles from "./CTA.module.css";

const CTA: FunctionComponent = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.column}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <p className={styles.startYourJourney}>{`Start your journey `}</p>
            <p className={styles.withUs}>with us</p>
          </h1>
        </div>
        <div className={styles.actions}>
          <button className={styles.button}>
            <div className={styles.button1}>Call Us</div>
          </button>
          <button className={styles.button2}>
            <div className={styles.button3}>Book Appointment</div>
          </button>
        </div>
      </div>
      <img className={styles.ctaChild} alt="" src="/group-140-3.svg" />
    </section>
  );
};

export default CTA;
