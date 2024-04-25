import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
const Navbar: FunctionComponent = () => {
  return (
    <header className={styles.navbar1}>
      <div className={styles.container}>
        <div className={styles.gameIconsovermindParent}>
          <img
            className={styles.gameIconsovermind}
            alt=""
            src="/gameiconsovermind.svg"
          />
          <img
            className={styles.mindmelddIcon}
            loading="lazy"
            alt=""
            src="/mindmeldd.svg"
          />
        </div>
        <div className={styles.column}>
          <nav className={styles.column1}>
            {/* Use Link from react-scroll for smooth scrolling */}
            <Link
              className={styles.linkTwo}
              to="services"
              smooth={true}
              duration={500}
            >
              Services
            </Link>
            <Link
              className={styles.linkThree}
              to="team"
              smooth={true}
              duration={500}
            >
              Experts
            </Link>
            <Link
              className={styles.linkThree1}
              to="offer"
              smooth={true}
              duration={500}
            >
              Offerings
            </Link>
          </nav>
          <div className={styles.actions}>
            <div className={styles.button}>
              <div className={styles.button1}>Get Started</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
