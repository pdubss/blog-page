import styles from "../styles/Home.module.css";
import CategoryTag from "./CategoryTag";
import { useRouter } from "next/router";

const Post: React.FC<{
  id: string;
  title: string;
  category: string;
  image?: string;
  key: string;
}> = (props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`posts/${props.id}`)}
      className={styles.card}
    >
      <img src={props.image}></img>
      <h2>{props.title}</h2>
      <CategoryTag key={props.id} type={props.category}></CategoryTag>
    </div>
  );
};

export default Post;
