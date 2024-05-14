import { FunctionComponent } from "react";
import styles from "./Body.module.css";

const Body: FunctionComponent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.asset41Wrapper}>
          <img
            className={styles.asset41}
            loading="lazy"
            alt=""
            src="/asset-4-1.svg"
          />
        </div>
        <div className={styles.contentInner}>
          <div className={styles.asset22Parent}>
            <img
              className={styles.asset22}
              loading="lazy"
              alt=""
              src="/asset-2-2.svg"
            />
            <h1 className={styles.mediumLengthHeroContainer}>
              <p className={styles.empowerYourMind}>Empower Your Mind</p>
              <p className={styles.embraceYourJourney}>Embrace Your Journey</p>
            </h1>
            <div className={styles.loremIpsumDolor}>
              Personalized counselling and support for everyone.
            </div>
            <div className={styles.actions}>
            <button className={styles.button}>
  <a href="tel:+917303113594" className={styles.button1}>
    Call Us
  </a>
</button>

              <button className={styles.button2}>
                <div className={styles.button3}>Sign Up</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.contentLayer}>
          <img
            className={styles.layer2Icon}
            loading="lazy"
            alt=""
            src="/layer-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
