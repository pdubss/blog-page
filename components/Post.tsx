import styles from "../styles/Home.module.css";
import CategoryTag from "./CategoryTag";

const Post: React.FC<{
  id: string;
  title: string;
  category: string;
  image?: string;
  key: string;
}> = (props) => {
  return (
    <div onClick={() => alert("You clicked the div!")} className={styles.card}>
      <img src={props.image}></img>
      <h2>{props.title}</h2>
      <CategoryTag key={props.id} type={props.category}></CategoryTag>
    </div>
  );
};

export default Post;
