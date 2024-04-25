import { FunctionComponent } from "react";
import styles from "./Conditions.module.css";

const Conditions: FunctionComponent = () => {
  return (
    <section className={styles.conditions}>
      <div className={styles.topicModelBuilderParent}>
        <div className={styles.topicModelBuilder}>
          <img className={styles.groupIcon} alt="" src="/group-5.svg" />
          <img
            className={styles.keyphraseExtractorIcon}
            alt=""
            src="/frame-3@2x.png"
          />
          <img
            className={styles.flower2Pink}
            loading="lazy"
            alt=""
            src="/flower-2--pink@2x.png"
          />
        </div>
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
          <img className={styles.groupIcon1} alt="" src="/group-7@2x.png" />
          <img
            className={styles.flower2Pink1}
            alt=""
            src="/flower-2--pink-1.svg"
          />
          <img className={styles.groupIcon2} alt="" src="/group-6@2x.png" />
          <img className={styles.frameIcon} alt="" src="/frame-4@2x.png" />
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.wrapperPlaceholderImage}>
          <img
            className={styles.placeholderImageIcon}
            loading="lazy"
            alt=""
            src="/placeholder-image@2x.png"
          />
        </div>
        <div className={styles.wrapperPlaceholderImage1}>
          <img
            className={styles.placeholderImageIcon1}
            alt=""
            src="/placeholder-image@2x.png"
          />
        </div>
        <div className={styles.wrapperPlaceholderImage2}>
          <img
            className={styles.placeholderImageIcon2}
            alt=""
            src="/placeholder-image-2@2x.png"
          />
        </div>
        <div className={styles.wrapperPlaceholderImage3}>
          <img
            className={styles.placeholderImageIcon3}
            alt=""
            src="/placeholder-image@2x.png"
          />
        </div>
        <div className={styles.wrapperPlaceholderImage4}>
          <img
            className={styles.placeholderImageIcon4}
            alt=""
            src="/placeholder-image@2x.png"
          />
        </div>
        <div className={styles.wrapperPlaceholderImage5}>
          <img
            className={styles.placeholderImageIcon5}
            alt=""
            src="/placeholder-image@2x.png"
          />
        </div>
        <div className={styles.wrapperPlaceholderImage6}>
          <img
            className={styles.placeholderImageIcon6}
            alt=""
            src="/placeholder-image@2x.png"
          />
        </div>
        <div className={styles.wrapperPlaceholderImage7}>
          <img
            className={styles.placeholderImageIcon7}
            alt=""
            src="/placeholder-image@2x.png"
          />
        </div>
      </div>
      <img className={styles.frameIcon1} alt="" src="/frame-5@2x.png" />
    </section>
  );
};

export default Conditions;
