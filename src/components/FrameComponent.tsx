import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.homepageInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src="/group-103@2x.png" />
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <img className={styles.frameItem} alt="" src="/group-142.svg" />
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
              <div className={styles.mediumLengthHeroHeadlineGoParent}>
                <h1 className={styles.mediumLengthHeroContainer}>
                  <p className={styles.empowerYourMind}>Empower Your Mind</p>
                  <p className={styles.embraceYourJourney}>
                    Embrace Your Journey
                  </p>
                </h1>
                <div className={styles.loremIpsumDolor}>
                  Personalized counselling and support for everyone.
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
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent2}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="/frame-1@2x.png"
                />
                <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
              </div>
            </div>
            <div className={styles.groupParent}>
              <img className={styles.groupIcon2} alt="" src="/group-2.svg" />
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent3}>
                  <img
                    className={styles.frameIcon1}
                    alt=""
                    src="/frame-2@2x.png"
                  />
                  <div className={styles.flower2BluesWrapper}>
                    <img
                      className={styles.flower2Blues}
                      alt=""
                      src="/flower-2--blues.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
