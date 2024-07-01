import { makeStyles } from "@mui/styles";
import paper from "../../assets/image/paper.avif";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1.5em 0",
  },
  textWrapper: {
    width: "40%",
    minHeight: "7em",
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

    "& p": {
      margin: "0.4em",
      maxWidth: "10em",
    },
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: "4em",
    marginTop: 3,
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
}));

export default useStyles;
