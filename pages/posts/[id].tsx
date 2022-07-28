import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import CategoryTag from "../../components/CategoryTag";

type propsType = {
  category: string;
  id?: number | string;
  image: string;
  title: string;
  content: string;
  date: string;
};

const postPage: React.FC<propsType> = (props) => {
  const router = useRouter();
  console.log(router.asPath);
  console.log(router.pathname);
  console.log(props);

  return (
    <div className={styles.detailPageContainer}>
      <div className={styles.detailPageHeader}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.subHeader}>
          <CategoryTag type={props.category}></CategoryTag>
          {/* still need to redirect href to all props.category page */}
          <span>{props.date}</span>
        </div>
      </div>
      <main>
        <img className={styles.contentImage} src={props.image} />
        <p className={styles.text}>{props.content}</p>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const response = await fetch(
    "https://blogpage-posts-default-rtdb.firebaseio.com/posts.json"
  );
  const posts: propsType[] = await response.json();
  const paths = Object.values(posts).map((post) => ({
    params: { id: post.id?.toString() },
  }));
  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context: any) {
  const pageID = context.params.id;
  const response = await fetch(
    `https://blogpage-posts-default-rtdb.firebaseio.com/posts/p${pageID}.json`
  );
  const data: propsType[] = await response.json();

  return {
    props: data,
  };
}

export default postPage;
