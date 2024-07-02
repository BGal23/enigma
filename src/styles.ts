import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rotorsAndSwitch: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      gap: "1em",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        alignItems: "center",
      },
    },
    rotors: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
    },
  })
);

export default useStyles;
