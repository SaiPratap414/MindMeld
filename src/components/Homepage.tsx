import { FunctionComponent } from "react";
import Navbar from "./Navbar";
import FrameComponent from "./FrameComponent";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <section className={styles.homepage}>
      <Navbar />
      <div className={styles.frameParent}>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame@2x.png"
        />
        <img className={styles.frameChild} alt="" src="/group-140@2x.png" />
      </div>
      <FrameComponent />
    </section>
  );
};

export default Homepage;
