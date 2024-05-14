import { FunctionComponent } from "react";
import styles from "./Column.module.css";

export type ColumnType = {
  materialSymbolscontactPho?: string;
  text?: string;
};

const Column: FunctionComponent<ColumnType> = ({
  materialSymbolscontactPho,
  text,
}) => {
  return (
    <div className={styles.column}>
      <div className={styles.avatar}>
        <img
          className={styles.materialSymbolscontactPhoneIcon}
          loading="lazy"
          alt=""
          src={materialSymbolscontactPho}
        />
        <div className={styles.avatarContent}>
          <h3 className={styles.text}>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Column;
