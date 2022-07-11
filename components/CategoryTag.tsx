import { Button } from "@mui/material";

const CategoryTag: React.FC<{ type: string }> = (props) => {
  return <Button>{props.type}</Button>;
};

export default CategoryTag;
