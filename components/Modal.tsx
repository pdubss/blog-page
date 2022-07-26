import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import React from "react";

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
      <Button onClick={props.closeModal}>Proceed</Button>
    </div>
  );
};

export default Modal;
