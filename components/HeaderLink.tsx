import { Link } from "@mui/material";

const HeaderLink: React.FC<{ children: string }> = (props) => {
  return (
    <Link
      href={`/${props.children}`}
      sx={{
        color: "black",
        padding: "1rem",
        textDecoration: "none",
        fontSize: "20px",
        "&:hover": { color: "red" },
      }}
    >
      {props.children}
    </Link>
  );
};

export default HeaderLink;
