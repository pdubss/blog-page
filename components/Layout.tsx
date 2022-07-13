import Header from "./Header";
import React from "react";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
