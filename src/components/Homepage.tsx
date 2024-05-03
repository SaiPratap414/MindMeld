import { FunctionComponent } from "react";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <section className={styles.homepage}>
      <header className={styles.navbar1}>
        <div className={styles.container}>
          <div className={styles.treeBranch}>
            <img className={styles.asset21} alt="" src="/asset-2-1.svg" />
            <img
              className={styles.mindmelddIcon}
              loading="lazy"
              alt=""
              src="/mindmeldd.svg"
            />
          </div>
          <div className={styles.column}>
            <nav className={styles.column1}>
              <div className={styles.linkTwo}>Services</div>
              <div className={styles.linkThree}>Experts</div>
              <div className={styles.linkThree1}>Offerings</div>
            </nav>
            <button className={styles.actions}>
              <div className={styles.button}>
                <div className={styles.button1}>Login</div>
              </div>
            </button>
          </div>
        </div>
      </header>
      <div className={styles.linkList}>
        <div className={styles.stepperCircle}>
          <div className={styles.tabbedPane}>
            <img
              className={styles.asset41}
              loading="lazy"
              alt=""
              src="/asset-4-1.svg"
            />
          </div>
          <div className={styles.progressWheel}>
            <div className={styles.breadcrumbTrail}>
              <img
                className={styles.asset22}
                loading="lazy"
                alt=""
                src="/asset-2-2.svg"
              />
              <h1 className={styles.mediumLengthHeroContainer}>
                <p className={styles.empowerYourMind}>Empower Your Mind</p>
                <p className={styles.embraceYourJourney}>
                  Embrace Your Journey
                </p>
              </h1>
              <div className={styles.loremIpsumDolor}>
                Personalized counselling and support for everyone.
              </div>
              <div className={styles.actions1}>
                <button className={styles.button2}>
                  <div className={styles.button3}>Call Us</div>
                </button>
                <button className={styles.button4}>
                  <div className={styles.button5}>Sign Up</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.sliderRuler}>
            <img
              className={styles.layer2Icon}
              loading="lazy"
              alt=""
              src="/layer-2.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
