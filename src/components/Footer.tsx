import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.rasterImage}>
          <div className={styles.asset21Parent}>
            <img className={styles.asset21} alt="" src="/asset-2-1.svg" />
            <div className={styles.composite}>
              <img
                className={styles.mindmelddIcon}
                alt=""
                src="/mindmeldd.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.links}>
            <div className={styles.services}>Services</div>
            <div className={styles.experts}>Experts</div>
            <div className={styles.offerings}>Offerings</div>
          </div>
        </div>
        <div className={styles.fitContent}>
          <div className={styles.fillParent}>
            <span>Contact</span>
            <span className={styles.span}>{` `}</span>
            <span>:</span>
            <span className={styles.span1}> 73031 13594</span>
          </div>
          <div className={styles.fillParent1}>
            <span>Address</span>
            <span className={styles.span2}>{` `}</span>
            <span>:</span>
            <span className={styles.sector116Noida}> Sector 116, Noida</span>
          </div>
        </div>
      </div>
      <div className={styles.credits}>
        <div className={styles.divider} />
      </div>
    </section>
  );
};

export default Footer;
