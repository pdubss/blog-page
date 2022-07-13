// export const getStaticPaths = async () => {
//   const response = await fetch("");
//   const data = await response.json();
// };

import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

const postPage: React.FC = () => {
  return <main className={styles.main}>This is the detailed post page</main>;
};

export default postPage;
