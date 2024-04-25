import { FunctionComponent } from "react";
import Column from "./Column";
import styles from "./Testimonial.module.css";

const Testimonial: FunctionComponent = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonialInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <img className={styles.frameChild} alt="" src="/group-140-2.svg" />
          </div>
          <div className={styles.sectionTitle}>
            <h1 className={styles.heading}>Customer testimonials</h1>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <button className={styles.button}>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </button>
          <div className={styles.content1}>
            <Column />
            <Column />
            <Column />
          </div>
          <button className={styles.button1}>
            <img className={styles.icon1} alt="" src="/icon-1.svg" />
          </button>
        </div>
        <div className={styles.sliderDotsWrapper}>
          <div className={styles.sliderDots}>
            <div className={styles.dot} />
            <div className={styles.dot1} />
            <div className={styles.dot2} />
            <div className={styles.dot3} />
            <div className={styles.dot4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
