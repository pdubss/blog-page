import styles from "../styles/Home.module.css";
import { List, ListItem } from "@mui/material";

type postProps = {
  id: number;
  category: string;
  title: string;
  image: string;
};

const allPosts: React.FC<postProps[]> = (props) => {
  const postArray = Object.values(props);
  // const postTitles = postArray.map((post) => post.title);

  return (
    <div className={styles.main}>
      <List>
        {postArray.map((post) => (
          <ListItem key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://blogpage-posts-default-rtdb.firebaseio.com/posts.json"
  );
  const data = await response.json();

  return {
    props: data,
  };
}

export default allPosts;
