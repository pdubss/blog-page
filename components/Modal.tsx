import styles from "../styles/Home.module.css";
import React from "react";
import ModalStepper from "./ModalStepper";

interface ModalProps {
  closeModal: (event: React.MouseEvent) => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div className={styles.modal}>
      <h2>Welcome to my blog project!</h2>
      <p className={styles.modalText}>
        It's still a work in progress but it's regularly being updated whenever
        I have inspiration for new features to implement
      </p>
      <ModalStepper></ModalStepper>

    </div>
  );
};

export default Modal;
