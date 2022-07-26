import React from "react";
import styles from "../styles/Home.module.css";

const ModalShadow: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={styles.shadow}>{props.children}</div>;
};

export default ModalShadow;
