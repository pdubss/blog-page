import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Post from "../components/Post";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://blogpage-posts-default-rtdb.firebaseio.com/posts.json"
  );
  const data = await response.json();
  console.log(data);

  return {
    props: { posts: data },
  };
};

const postPlaceholder = [
  {
    id: "1",
    title: "Thoughts on the 2022 MLB All-Star Game",
    category: "BASEBALL",
    image:
      "https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1536/mlb/cuqotciu4extbppy1dkt.jpg",
  },
  {
    id: "2",
    title: "My Journey in Building This Site",
    category: "CODING",
  },
  {
    id: "3",
    title: "Why Existentialism is Sad but Necessary",
    category: "PHILOSOPHY",
  },
  {
    id: "4",
    title: "The Complexity of the Issue of Abortion in America",
    category: "POLITICS",
  },
  {
    id: "5",
    title: "The Joys of Using Libraries and Frameworks",
    category: "CODING",
  },
];

const latest = postPlaceholder[0];
const theRest = postPlaceholder.filter((post) => post.id !== "1");

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My own personal blog project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.latest}>
          {
            <Post
              key={latest.id}
              id={latest.id}
              title={latest.title}
              category={latest.category}
              image={latest.image}
            ></Post>
          }
        </section>
        <section className={styles.secondary}>
          {theRest.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              category={post.category}
            ></Post>
          ))}
          <Link href="/all">All Posts</Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
