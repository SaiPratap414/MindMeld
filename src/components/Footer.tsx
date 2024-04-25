import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.gameIconsovermindParent}>
              <img
                className={styles.gameIconsovermind}
                alt=""
                src="/gameiconsovermind.svg"
              />
              <div className={styles.mindmelddWrapper}>
                <img
                  className={styles.mindmelddIcon}
                  alt=""
                  src="/mindmeldd.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.linksWrapper}>
            <div className={styles.links}>
              <div className={styles.services}>Services</div>
              <div className={styles.experts}>Experts</div>
              <div className={styles.offerings}>Offerings</div>
            </div>
          </div>
          <div className={styles.textParent}>
            <div className={styles.text}>
              <span>Contact</span>
              <span className={styles.span}>{` `}</span>
              <span>:</span>
              <span className={styles.span1}> 73031 13594</span>
            </div>
            <div className={styles.text1}>
              <span>Address</span>
              <span className={styles.span2}>{` `}</span>
              <span>:</span>
              <span className={styles.sector116Noida}> Sector 116, Noida</span>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.credits}>
        <div className={styles.divider} />
        <div className={styles.row}>
          <div className={styles.mindmelddAllRights}>
            © 2024 Mindmeldd. All rights reserved.
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.termsOfService}>Terms of Service</div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
