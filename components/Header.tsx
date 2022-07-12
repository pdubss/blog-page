import { AppBar } from "@mui/material";
import React from "react";

const Header: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <React.Fragment>
      <AppBar>My Blog</AppBar>
      {props.children}
    </React.Fragment>
  );
};

export default Header;
