import { FunctionComponent } from "react";
import styles from "./Conditions.module.css";

const Conditions: FunctionComponent = () => {
  return (
    <section className={styles.conditions}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h1 className={styles.heading}>
            Comprehensive Care for Various Conditions
          </h1>
        </div>
        <div className={styles.column1}>
          <div className={styles.textSuspendisseVarius}>
            Providing expert care and tailored treatment plans for a range of
            mental health conditions, helping you navigate and overcome your
            unique challenges.
          </div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.wrapperPlaceholderImageParent}>
          <div className={styles.wrapperPlaceholderImage}>
            <img
              className={styles.placeholderImageIcon}
              loading="lazy"
              alt=""
              src="/placeholder-image@2x.png"
            />
          </div>
          <h1 className={styles.bipolarDisorder}>
            <p className={styles.bipolar}>Bipolar</p>
            <p className={styles.disorder}>Disorder</p>
          </h1>
        </div>
        <div className={styles.wrapperPlaceholderImageGroup}>
          <div className={styles.wrapperPlaceholderImage1}>
            <img
              className={styles.placeholderImageIcon1}
              alt=""
              src="/placeholder-image@2x.png"
            />
          </div>
          <h1 className={styles.ocd}>OCD</h1>
        </div>
        <div className={styles.wrapperPlaceholderImageContainer}>
          <div className={styles.wrapperPlaceholderImage2}>
            <img
              className={styles.placeholderImageIcon2}
              alt=""
              src="/placeholder-image@2x.png"
            />
          </div>
          <h1 className={styles.anxiety}>Anxiety</h1>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.wrapperPlaceholderImage3}>
            <img
              className={styles.placeholderImageIcon3}
              alt=""
              src="/placeholder-image@2x.png"
            />
          </div>
          <h1 className={styles.ptsd}>PTSD</h1>
        </div>
        <div className={styles.wrapperPlaceholderImageParent1}>
          <div className={styles.wrapperPlaceholderImage4}>
            <img
              className={styles.placeholderImageIcon4}
              alt=""
              src="/placeholder-image@2x.png"
            />
          </div>
          <h1 className={styles.socialAnxiety}>
            <p className={styles.social}>Social</p>
            <p className={styles.anxiety1}>Anxiety</p>
          </h1>
        </div>
        <div className={styles.wrapperPlaceholderImageParent2}>
          <div className={styles.wrapperPlaceholderImage5}>
            <img
              className={styles.placeholderImageIcon5}
              alt=""
              src="/placeholder-image@2x.png"
            />
          </div>
          <h1 className={styles.womensHealth}>
            <p className={styles.womens}>Women’s</p>
            <p className={styles.health}>Health</p>
          </h1>
        </div>
        <div className={styles.wrapperPlaceholderImageParent3}>
          <div className={styles.wrapperPlaceholderImage6}>
            <img
              className={styles.placeholderImageIcon6}
              alt=""
              src="/placeholder-image@2x.png"
            />
          </div>
          <h1 className={styles.depression}>Depression</h1>
        </div>
        <div className={styles.wrapperPlaceholderImageParent4}>
          <div className={styles.wrapperPlaceholderImage7}>
            <img
              className={styles.placeholderImageIcon7}
              alt=""
              src="/placeholder-image@2x.png"
            />
          </div>
          <h1 className={styles.adultAdhd}>
            <p className={styles.adult}>Adult</p>
            <p className={styles.adhd}>ADHD</p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
