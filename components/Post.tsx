import styles from "../styles/Home.module.css";
import CategoryTag from "./CategoryTag";

const Post: React.FC<{
  id: string;
  title: string;
  category: string;
  image?: string;
}> = (props) => {
  return (
    <div className={styles.card}>
      <a href={`/blog-post${props.id}`}>
        <img src={props.image}></img>
        <h2>{props.title}</h2>
        <CategoryTag type={props.category}></CategoryTag>
      </a>
    </div>
  );
};

export default Post;
