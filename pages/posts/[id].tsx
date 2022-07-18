// export const getStaticPaths = async () => {
//   const response = await fetch("");
//   const data = await response.json();
// };

import styles from "../../styles/Home.module.css";
import { Link } from "@mui/material";

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
      <div className={styles.subHeader}>
        <Link href="#">{props.category}</Link>{" "}
        {/* still need to redirect href to all props.category page */}
        <span>7/18/2022</span>
      </div>
      <p>
        Just some placeholder text for p2 that'll have to be added to firebase
        later.
        <br />
        7/16/2022: Got much better at working with objects recieved from
        firebase. For some reason it wasn't clicking for me, probably because I
        wasn't thinking about what the map method was doing correctly. Was stuck
        wrapping my brain around it for hours at work while making the regex
        script but it dawned on me almost immediately that weekend at home.
        <br />
        7/18/2022: Implemented getStaticPaths for the first time. Note to
        self:For dynamically generated sub-path pages you don't need to include
        that sub-path ie. for the posts/[id].tsx file it isn't necessary to
        include the '/paths' part, simply the page id like so '/1', '/2'. Of
        course it isn't ideal to hardcode these values so they'll have to fixed
        later down the line to be dynamically generated.
        <br />
        So it turns out a context object can be passed into getStaticProps and
        inside this object a params property containing the dynamic path can be
        accessed. Being able to access the dynamic url that's generated can be
        super useful, like in the [id] page I was able to send a fetch request
        for only the post that I needed instead of all of them. Which might not
        make much of a performance difference but is just cleaner and more
        precise, which is something I always aim for.
      </p>
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
