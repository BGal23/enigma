import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lightWrapper: {
      display: "flex",
      gap: "0.3em",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: "0.5em",
      marginTop: "0.5em",

      "&:after": {
        content: '""',
        display: "block",
        position: "relative",
        width: "calc(100% + 2em)",
        height: "2em",
        margin: "0 -0.5em 0",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0) 0%, #1a1a1a 80%, rgba(0,0,0,0) 100%)",
      },
      [theme.breakpoints.up("sm")]: {
        gap: "0.5em",
        marginBottom: "1em",
        marginTop: "1em",

        "&:after": {
          margin: "0 -1em 0",
        },
      },
    },
    light: {
      width: "1.7em",
      height: "1.7em",
      borderRadius: "1.5em",
      border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "inset 0px 0px 5px 1px black",

      [theme.breakpoints.up("sm")]: {
        width: "2.5em",
        height: "2.5em",
        marginLeft: 0,

        "&:nth-child(10)": {
          marginLeft: "2em",
        },
        "&:nth-child(17)": {
          marginRight: "2em",
        },
      },
    },
  })
);

export default useStyles;
