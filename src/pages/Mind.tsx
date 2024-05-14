import { FunctionComponent } from "react";
import Homepage from "../components/Homepage";
import Services from "../components/Services";
import Conditions from "../components/Conditions";
import Features from "../components/Features";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import styles from "./Mind.module.css";

const Mind: FunctionComponent = () => {
  return (
    <div className={styles.mind}>
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

export default Mind;
