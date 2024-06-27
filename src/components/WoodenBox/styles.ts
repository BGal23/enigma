import { makeStyles } from "@mui/styles";
import verticalWood from "../../assets/image/verticalWood.jpg";
import horizontalWood from "../../assets/image/horizontalWood.jpg";

const useStyles = makeStyles(() => ({
  verticalBox: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100%",
  },
  verticalWood: {
    minWidth: "1em",
    minHeight: "100%",
    display: "block",
    backgroundImage: `url("${verticalWood}")`,
    border: "1px solid black",
  },
  childrenBox: {
    padding: "1em",
  },
  horizontalBox: {
    display: "flex",
    flexDirection: "column",
  },
  horizontalWood: {
    width: "100%",
    height: "1em",
    display: "block",
    backgroundImage: `url("${horizontalWood}")`,
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
  },
}));

export default useStyles;
