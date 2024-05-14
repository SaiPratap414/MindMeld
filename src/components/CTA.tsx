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
  <a
    href="https://wa.me/917303113594?text=I%20would%20like%20to%20book%20an%20appointment"
    className={styles.button3}
    target="_blank"
    rel="noopener noreferrer"
  >
    Book Appointment
  </a>
</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
