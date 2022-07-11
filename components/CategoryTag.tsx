import { Button } from "@mui/material";

const CategoryTag: React.FC<{ type: string }> = (props) => {
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
    <Button
      variant="contained"
      sx={{ bgcolor: tagColor }}
      onClick={() => alert("You clicked me!")}
    >
      {props.type}
    </Button>
  );
};

export default CategoryTag;
