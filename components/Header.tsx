import { AppBar, Toolbar, Link, Typography } from "@mui/material";
import HeaderLink from "./HeaderLink";
import React from "react";

const Header: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <React.Fragment>
      <AppBar
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid #D3D3D3",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h4" sx={{ color: "black", fontWeight:600, }}>
            Perry's Blog Project
          </Typography>
          <div>
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>About</HeaderLink>
          </div>
        </Toolbar>
      </AppBar>
      {props.children}
    </React.Fragment>
  );
};

export default Header;
