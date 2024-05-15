import { FunctionComponent, useState } from "react";
import styles from "./NavbarM.module.css";

const NavbarM: FunctionComponent = () => {
  // State to manage whether the navbar is open or closed
  const [isOpen, setIsOpen] = useState(true);

  // Function to close the navbar when the iconX is clicked
  const closeNavbar = () => {
    setIsOpen(false);
    console.log("Navbar closed");
  };

  // Render the NavbarM component based on the isOpen state
  return (
    <div className={isOpen ? styles.navbarmOpen : styles.navbarmClosed}>
      <header className={styles.container}>
        <div className={styles.asset21Parent}>
          <img
            className={styles.asset21}
            loading="lazy"
            alt=""
            src="/asset-2-1.svg"
          />
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
        <div className={styles.icon} onClick={closeNavbar}>
          {/* IconX */}
          <img
            className={styles.iconX}
            loading="lazy"
            alt=""
            src="/icon--x.svg"
          />
        </div>
      </header>
      <main className={styles.row}>
        <section className={styles.column}>
          <div className={styles.column1}>
            <div className={styles.link}>
              <div className={styles.linkTwo}>Services</div>
            </div>
            <div className={styles.link1}>
              <div className={styles.linkThree}>Experts</div>
            </div>
            <div className={styles.link2}>
              <div className={styles.navLinkDropdown}>
                <div className={styles.linkFour}>Offerings</div>
              </div>
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.button1}>Login</div>
          </button>
        </section>
      </main>
    </div>
  );
};

export default NavbarM;
