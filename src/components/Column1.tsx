import { FunctionComponent } from "react";
import styles from "./Column1.module.css";

export type Column1Type = {
  mingcutewechatLine?: string;
  text?: string;
};

const Column1: FunctionComponent<Column1Type> = ({
  mingcutewechatLine,
  text,
}) => {
  return (
    <div className={styles.column}>
      <div className={styles.avatar}>
        <img
          className={styles.mingcutewechatLineIcon}
          loading="lazy"
          alt=""
          src={mingcutewechatLine}
        />
        <div className={styles.avatarContent}>
          <h3 className={styles.imageProcessor}>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Column1;
