import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Post from "../components/Post";

const postPlaceholder = [
  {
    id: "1",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    category: "BASEBALL",
    image:
      "https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1536/mlb/cuqotciu4extbppy1dkt.jpg",
  },
  {
    id: "2",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    category: "CODING",
  },
  {
    id: "3",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    category: "PHILOSOPHY",
  },
  {
    id: "4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    category: "POLITICS",
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
        </section>
      </main>

      <footer className={styles.footer}>
        Powered by lots of tears and coffee
      </footer>
    </div>
  );
};

export default Home;
