import { Link } from "@mui/material";

const CategoryTag: React.FC<{ type: string; key: string }> = (props) => {
  let tagColor;
  switch (props.type) {
    case "BASEBALL":
      tagColor = "red";
      break;
    case "CODING":
      tagColor = "green";
      break;
    case "PHILOSOPHY":
      tagColor = "purple";
      break;
    case "POLITICS":
      tagColor = "blue";
      break;
  }

  return (
    <Link
      href={`/${props.type}-posts`}
      sx={{
        bgcolor: tagColor,
        color: "white",
        padding: "0.25rem 0.5rem",
        borderRadius: "5px",
        textDecoration: "none",
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {props.type}
    </Link>
  );
};

export default CategoryTag;
