import React from "react";
import styles from "../styles/Home.module.css";

const ModalShadow: React.FC<{
  children: React.ReactNode;
  closeModal: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <div className={styles.shadow} onClick={props.closeModal}>
      {props.children}
    </div>
  );
};

export default ModalShadow;
