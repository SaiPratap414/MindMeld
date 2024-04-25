import { FunctionComponent } from "react";
import styles from "./Column.module.css";

const Column: FunctionComponent = () => {
  return (
    <div className={styles.column}>
      <div className={styles.avatar}>
        <img
          className={styles.avatarImageIcon}
          loading="lazy"
          alt=""
          src="/avatar-image@2x.png"
        />
        <div className={styles.avatarContent}>
          <div className={styles.text}>Name Surname</div>
          <div className={styles.text1}>Position, Company name</div>
        </div>
      </div>
      <div className={styles.textSuspendisseVarius}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique."
      </div>
    </div>
  );
};

export default Column;
