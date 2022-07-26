import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Post from "../components/Post";
import Modal from "../components/Modal";
import ModalShadow from "../components/ModalShadow";
import { useState } from "react";

type postProps = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const Home: NextPage<postProps[]> = (props) => {
  const [showModal, setShowModal] = useState(true);
  const postArray = Object.values(props);

  const latest = postArray[0];
  const theRest = postArray.filter((post) => post.id !== 1);
  const nextFour = theRest.slice(0, 4);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="My own personal blog project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.latest}>
          {showModal && (
            <ModalShadow>
              <Modal></Modal>
            </ModalShadow>
          )}

          {
            <Post
              key={latest.id.toString()}
              id={latest.id.toString()}
              title={latest.title}
              category={latest.category}
              image={latest.image}
            ></Post>
          }
        </section>
        <section className={styles.secondary}>
          {nextFour.map((post) => (
            <Post
              key={post.id.toString()}
              id={post.id.toString()}
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

// export async function getStaticPaths(){
//   return {
//     fallback:false,
//     paths:[
//       {
//         params: {
//           postId
//         }
//       }
//     ]
//   }
// }

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://blogpage-posts-default-rtdb.firebaseio.com/posts.json"
  );
  const data = await response.json();

  return {
    props: data,
  };
};

export default Home;
