import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Post from "../components/Post";

const postPlaceholder = [
  {
    title: "Post 1",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et posuere lorem, at tristique arcu.",
  },
  {
    title: "Post 2",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et posuere lorem, at tristique arcu.",
  },
  {
    title: "Post 3",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et posuere lorem, at tristique arcu.",
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My own personal blog project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>My Blog Post</h1>
      </header>
      <main className={styles.main}>
        {postPlaceholder.map((post) => (
          <Post title={post.title} blurb={post.blurb}></Post>
        ))}
        <button>Load More</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
