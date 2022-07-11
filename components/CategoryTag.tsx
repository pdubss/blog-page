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
      sx={{ bgcolor: tagColor }}
      onClick={(e) => {
        e.stopPropagation();
        alert("You clicked the tag!");
      }}
    >
      {props.type}
    </Link>
  );
};

export default CategoryTag;
