import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  rotorWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "5.5em",

    "& select": {
      width: "100%",
    },
  },
  numberChangeWrapper: {},
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "6em",
    width: "3em",
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
}));

export default useStyles;
