import { FunctionComponent } from "react";
import styles from "./Testimonials.module.css";

const Testimonials: FunctionComponent = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialHeaderWrapper}>
        <div className={styles.testimonialHeader}>
          <div className={styles.sectionTitle}>
            <h1 className={styles.heading}>Customer Reviews</h1>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <button className={styles.button}>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </button>
          <div className={styles.content1}>
            <div className={styles.column}>
              <div className={styles.textSuspendisseVarius}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique."
              </div>
              <div className={styles.avatar}>
                <div className={styles.avatarContent}>
                  <div className={styles.name}>Name Surname</div>
                  <div className={styles.title}>Position, Company name</div>
                </div>
              </div>
            </div>
            <div className={styles.column1}>
              <div className={styles.textSuspendisseVarius1}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique."
              </div>
              <div className={styles.avatar1}>
                <div className={styles.avatarContent1}>
                  <div className={styles.text}>Name Surname</div>
                  <div className={styles.text1}>Position, Company name</div>
                </div>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.textSuspendisseVarius2}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique."
              </div>
              <div className={styles.avatar2}>
                <div className={styles.avatarContent2}>
                  <div className={styles.text2}>Name Surname</div>
                  <div className={styles.text3}>Position, Company name</div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.button1}>
            <img className={styles.icon1} alt="" src="/icon-1.svg" />
          </button>
        </div>
        <div className={styles.dotsContainer}>
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

export default Testimonials;
