import React, { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTeam = () => {
    const teamSection = document.getElementById("team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.content}>
          <div className={styles.logoContainerWrapper}>
            <div className={styles.logoContainer}>
              <img className={styles.asset21} alt="" src="/asset-2-1.svg" />
              <div className={styles.iconContainer}>
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
              <div className={styles.services} onClick={scrollToServices}>
                Services
              </div>
              <div className={styles.experts} onClick={scrollToTeam}>
                Experts
              </div>
              <div className={styles.offerings} onClick={scrollToFeatures}>
                Offerings
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
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
      <div className={styles.credits}>
        <div className={styles.divider} />
      </div>
    </section>
  );
};

export default Footer;
