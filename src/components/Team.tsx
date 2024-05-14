import { FunctionComponent } from "react";
import Card from "./Card";
import styles from "./Team.module.css";

const Team: FunctionComponent = () => {
  return (
    <section className={styles.team} id="team">
      <div className={styles.sectionTitleParent}>
        <div className={styles.sectionTitle}>
          <div className={styles.content}>
            <h1 className={styles.heading}>Our Founders</h1>
          </div>
        </div>
        <div className={styles.teamImage}>
          <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.row}>
          <div className={styles.content2}>
            <Card name1="Ektaa Chaudhary" jobTitle="Founder" />
            <Card name1="Simran" jobTitle="Psychologist" image="/team1.jpg" /> {/* Pass a different image for the second Card */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
