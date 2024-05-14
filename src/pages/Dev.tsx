import { FunctionComponent } from "react";
import Homepage from "../components/Homepage";
import Services from "../components/Services";
import Conditions from "../components/Conditions";
import Features from "../components/Features";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import styles from "./DEV.module.css";

const DEV: FunctionComponent = () => {
  return (
    <div className={styles.dev}>
      <Homepage />
      <Services />
      <Conditions />
      <Features />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default DEV;
