import { createStyles, makeStyles } from "@mui/styles";
import paper from "../../assets/image/paper.avif";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainTextWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      margin: "1.5em 0",
    },
    textAndCryptWrapper: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      gap: "0.2em",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    textWrapper: {
      width: "100%",
      minHeight: "3.4em",
      border: "2px solid #222222",
      borderRadius: "0.5em",
      overflowWrap: "break-word",
      background: `url("${paper}")`,
      objectFit: "cover",
      color: "#222222",
      fontFamily: "'Courier New', monospace",
      fontWeight: "bold",
      fontSize: "large",
      boxShadow: "inset 0px 0px 5px 1px #222222",
      [theme.breakpoints.up("sm")]: {
        minHeight: "7em",
      },

      "& p": {
        margin: "0.4em",
        maxWidth: "10.3em",
      },
    },
    buttons: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      width: "4em",
      margin: "3px 0 0 0.6em",
      gap: "0.5em",

      "& button": {
        border: "none",
        borderRadius: "0.5em",
        padding: 5,
        background:
          "radial-gradient(circle, rgba(48,48,48,1) 0%, rgba(0,0,0,1) 100%)",
        textAlign: "center",
        color: "whitesmoke",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        fontWeight: "bold",
        transition: "scale 200ms ease-in-out",
        boxShadow: "-2px 2px 5px 0px black",

        "&:first-child": {
          background:
            "radial-gradient(circle, rgba(255, 29, 33, 1) 0%, rgba(126, 26, 29, 1) 100%)",
          color: "black",
        },

        "&:hover": {
          scale: "1.05",
        },
        "&:active": {
          scale: "0.95",
        },
      },
    },
  })
);

export default useStyles;
