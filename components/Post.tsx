import styles from "../styles/Home.module.css";
import React, { Children } from "react";

const Post: React.FC<{ title: string; blurb: string }> = (props) => {
  return (
    <div className={styles.card}>
      <h2>{props.title}</h2>
      <p>{props.blurb}</p>
    </div>
  );
};

export default Post;
