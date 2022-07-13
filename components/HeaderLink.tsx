import { Link } from "@mui/material";

const HeaderLink: React.FC<{ children: string; href: string }> = (props) => {
  return (
    <Link
      href={props.href}
      sx={{
        color: "black",
        padding: "1rem",
        textDecoration: "none",
        fontSize: "20px",
        "&:hover": { color: "#D3D3D3", textDecoration: "underline" },
      }}
    >
      {props.children}
    </Link>
  );
};

export default HeaderLink;
