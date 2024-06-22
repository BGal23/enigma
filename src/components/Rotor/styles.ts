import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  rotorWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "5.5em",
    gap: "1em",

    "& select": {
      width: "100%",
    },
  },
  numberChangeWrapper: {
    display: "flex",
    flexDirection: "row",
    height: "6em",
    gap: "1em",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "3em",
    height: "calc(100% - 4px)",
    backgroundColor: "#D4D4D4",
    borderRadius: "50%",
    border: "2px solid silver",
    gap: "0.5em",
  },
  screw: {
    content: '""',
    position: "relative",
    height: "0.8em",
    width: "0.8em",
    backgroundColor: "#D4D4D4",
    borderRadius: "50%",
    border: "2px solid silver",

    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      height: 2,
      backgroundColor: "silver",
      transform: "translate(-50%, -50%) rotate(45deg)",
    },
  },
  input: {
    backgroundColor: "while",
    borderRadius: 3,
    border: "2px solid silver",
    textAlign: "center",
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&[type=number]": {
      "-moz-appearance": "textfield",
    },
  },
  gearBox: {
    height: "100%",
    width: "1em",
    backgroundColor: "#D4D4D4",
    borderRadius: 4,
    // border: "2px solid black",
    cursor: "row-resize",
    overflow: "hidden",
  },
  line: {
    width: "200%",
    height: 2,
    backgroundColor: "silver",
    position: "relative",
    right: "50%",
    top: "50%",
    boxShadow: "0px 0px 5px 0px black",
    transition: "transform 100ms ease-in-out",
    transform: "translateY(0)",

    "&.moveLineUp": {
      transform: "translateY(10px)",
    },

    "&.moveLineDown": {
      transform: "translateY(-10px)",
    },

    "&.resetTransition": {
      transition: "none",
    },
  },
}));

export default useStyles;
