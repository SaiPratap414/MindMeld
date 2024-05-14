import { FunctionComponent } from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <section className={styles.homepage}>
      <Navbar />
      <Body />
    </section>
  );
};

export default Homepage;
