import React, { FunctionComponent } from "react";
import styles from "./Navbar.module.css";

const Navbar: FunctionComponent = () => {
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

  const scrollToFeatures = () => { // Add scrollToFeatures function
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.navbar1}>
      <div className={styles.container}>
        <div className={styles.heroImage}>
          <img className={styles.asset21} alt="" src="/asset-2-1.svg" />
          <div className={styles.mindmelddParent}>
            <img
              className={styles.mindmelddIcon}
              loading="lazy"
              alt=""
              src="/mindmeldd.svg"
            />
            <div className={styles.loremIpsumDolor}>Untangled Thoughts</div>
          </div>
        </div>
        <div className={styles.column}>
          <nav className={styles.column1}>
            <div className={styles.linkTwo} onClick={scrollToServices}>Services</div>
            <div className={styles.linkThree} onClick={scrollToTeam}>Experts</div>
            <div className={styles.linkThree1} onClick={scrollToFeatures}>Offerings</div> {/* Add onClick event */}
          </nav>
          <button className={styles.actions}>
            <div className={styles.button}>
              <div className={styles.button1}>Login</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
