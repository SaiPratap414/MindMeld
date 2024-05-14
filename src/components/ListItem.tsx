import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListItem.module.css";

export type ListItemType = {
  group?: string;
  heading?: string;
  text?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propOverflow?: CSSProperties["overflow"];
};

const ListItem: FunctionComponent<ListItemType> = ({
  group,
  heading,
  text,
  propWidth,
  propHeight,
  propOverflow,
}) => {
  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      overflow: propOverflow,
    };
  }, [propWidth, propHeight, propOverflow]);

  return (
    <div className={styles.listItem}>
      <img
        className={styles.groupIcon}
        alt=""
        src={group}
        style={groupIconStyle}
      />
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default ListItem;
