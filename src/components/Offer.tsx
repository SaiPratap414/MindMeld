import { FunctionComponent } from "react";
import Column1 from "./Column1";
import styles from "./Offer.module.css";

const Offer: FunctionComponent = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/group-140-1@2x.png" />
        <div className={styles.sectionTitle}>
          <h1 className={styles.heading}>We Offer</h1>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <Column1
              mingcutewechatLine="/mingcutewechatline.svg"
              text="Outside Counselling"
            />
            <Column1
              mingcutewechatLine="/mingcutephonecallfill.svg"
              text="Phone Call"
            />
            <Column1
              mingcutewechatLine="/mingcutecomputercamerafill.svg"
              text="Video Call"
            />
            <Column1
              mingcutewechatLine="/mingcutecharthorizontalfill.svg"
              text="Assessment"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
