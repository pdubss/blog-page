// export const getStaticPaths = async () => {
//   const response = await fetch("");
//   const data = await response.json();
// };

import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

type propsType = {
  category: string;
  id: number;
  image: string;
  title: string;
};

const postPage: React.FC<propsType> = (props) => {
  console.log(props);
  return (
    <main className={styles.main}>
      <h1>{props.title}</h1>
    </main>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
      {
        params: {
          id: "4",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const pageID = context.params.id;
  const response = await fetch(
    `https://blogpage-posts-default-rtdb.firebaseio.com/posts/p${pageID}.json`
  );
  const data = await response.json();

  return {
    props: data,
  };
}

export default postPage;
