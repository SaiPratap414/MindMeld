import { FunctionComponent } from "react";
import styles from "./CTA.module.css";

const CTA: FunctionComponent = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.column}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Start your journey with us</h1>
        </div>
        <div className={styles.actions}>
        <button className={styles.button}>
  <a href="tel:+917303113594" className={styles.button1}>
    Call Us
  </a>
</button>

          <button className={styles.button2}>
            <div className={styles.button3}>Book Appointment</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
