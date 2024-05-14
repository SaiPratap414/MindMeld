import { FunctionComponent } from "react";
import styles from "./Card.module.css";

export type CardType = {
  name1?: string;
  jobTitle?: string;
  image?: string; // Adding an image prop
};

const Card: FunctionComponent<CardType> = ({ name1, jobTitle, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapperPlaceholderImage}>
        <img className={styles.placeholderImageIcon} alt="" src={image || "/team1.jpg"} /> {/* Use the passed image or default */}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.name}>{name1}</div>
          <div className={styles.bio}></div>
          <div className={styles.jobTitle}>{jobTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
