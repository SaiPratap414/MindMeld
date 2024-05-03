import { FunctionComponent } from "react";
import Homepage from "../components/Homepage";
import Services from "../components/Services";
import Conditions from "../components/Conditions";
import Weoffer from "../components/Weoffer";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import styles from "./Dev.module.css";

const Dev: FunctionComponent = () => {
  return (
    <div className={styles.dev}>
      <Homepage />
      <Services />
      <Conditions />
      <Weoffer />
      <Team />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default Dev;
