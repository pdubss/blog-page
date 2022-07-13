import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import HeaderLink from "./HeaderLink";

const Header: React.FC = () => {
  return (
    <AppBar
      sx={{
        bgcolor: "white",
        borderBottom: "1px solid #D3D3D3",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: "1rem" }}>
        <Typography variant="h4" sx={{ color: "black", fontWeight: 300 }}>
          Perry's Blog Project
        </Typography>
        <div>
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/about">About</HeaderLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
