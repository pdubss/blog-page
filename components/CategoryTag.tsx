import { Link } from "@mui/material";
import { useRouter } from "next/router";

const CategoryTag: React.FC<{ type: string; key?: string }> = (props) => {
  const router = useRouter();
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
      href={`/posts/${props.type}`}
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
