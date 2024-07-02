import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import verticalWood from "../../assets/image/verticalWood.jpg";
import horizontalWood from "../../assets/image/horizontalWood.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    verticalBox: {
      display: "flex",
      flexDirection: "row",
      minHeight: "100%",
    },
    verticalWood: {
      minWidth: "1em",
      minHeight: "100%",
      display: "block",
      backgroundImage: `url(${verticalWood})`,
      backgroundSize: "cover",
      border: "1px solid black",
    },
    childrenBox: {
      padding: "1em 0.5em 1em",
      [theme.breakpoints.up("sm")]: {
        padding: "1em",
      },
    },
    horizontalBox: {
      display: "flex",
      flexDirection: "column",
    },
    horizontalWood: {
      width: "100%",
      height: "1em",
      display: "block",
      backgroundImage: `url(${horizontalWood})`,
      backgroundSize: "cover",
      borderTop: "1px solid black",
      borderBottom: "1px solid black",
    },
  })
);

export default useStyles;
