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
    width: "47%",
    height: "7em",
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
    },
  },
}));

export default useStyles;
