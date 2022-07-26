// export const getStaticPaths = async () => {
//   const response = await fetch("");
//   const data = await response.json();
// };

import styles from "../../styles/Home.module.css";
import CategoryTag from "../../components/CategoryTag";

type propsType = {
  category: string;
  id: number;
  image: string;
  title: string;
};

const postPage: React.FC<propsType> = (props) => {
  console.log(props);
  return (
    <main className={styles.content}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.subHeader}>
        <CategoryTag type={props.category}></CategoryTag>
        {/* still need to redirect href to all props.category page */}
        <span>7/18/2022</span>
      </div>
      <p className={styles.text}>
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
        <br />
        7/26/2022: Surpsingly I think today was the first time I've had to pass
        a function through props. It took a bit to figure out how to do so with
        type checking, turns out it mostly just involves adding a property to
        the props object with type function and passing an event parameter with
        type React.mouseEvent type and a return type of void. It's something
        basic like adding a clickHandler to the modal button and modalshadow
        that feels foreign for me at the moment with Typescript.
        <br />
        7/26/22: How I got the modal to only render on first visit was by using
        the useState and useEffect hooks in combination with localStorage. First
        the showModal state had to be set to false initially because otherwise
        the modal would show for a split second before useEffect would take
        effect. Speaking of which the reason useEffect has to be used is that
        it's checking the window object for any localStorage entries with the
        key of 'hasVisited'. If the user had closed the modal or clicked on the
        modal shadow then a localstorage 'hasVisited' pair would have been
        created via the closeModalHandler. So if hasVisited exists, regardless
        of its value it would return truthy and using the ternary operator set
        the showModal to false otherwise it would be set to true because it was
        their very first time visiting. So in the end because localStorage pairs
        can only store strings, and not boolean values I had to use the fact
        that that pair actually existed to return a truthy value that would then
        affect the showModal state.
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
      {
        params: {
          id: "5",
        },
      },
    ],
  };
}

export async function getStaticProps(context: any) {
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
