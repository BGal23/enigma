import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      alignItems: "center",
      height: "6em",

      "& div": {
        "& button": {
          transition: "color 200ms ease-in-out",
        },
      },

      "&:hover": {
        "& div": {
          "& button": {
            color: "whitesmoke",
          },
        },
      },
    },
    inputWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "2em",
      height: "calc(100% - 4px)",
      background: "radial-gradient(circle, #dbdbdb 0%, #505050 100%)",
      borderRadius: "50%",
      gap: "0.5em",
      [theme.breakpoints.up("sm")]: {
        width: "3em",
      },
    },
    screw: {
      content: '""',
      position: "relative",
      height: "0.8em",
      width: "0.8em",
      background: "radial-gradient(circle, #dbdbdb 0%, #505050 100%)",
      borderRadius: "50%",

      "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        height: 2,
        backgroundColor: "#6b6b6b",
        transform: "translate(-50%, -50%) rotate(45deg)",
      },
    },
    selectWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      height: "1.5em",
      background: "radial-gradient(circle, #dbdbdb 0%, #505050 100%)",
      borderRadius: 3,
      gap: "0.5em",
    },
    select: {
      maxWidth: "6.5em",
      backgroundColor: "while",
      borderRadius: 3,
      border: "1px solid black",
      textAlign: "center",
      boxShadow: "inset 0px 0px 5px 0px",
      color: "black",
      fontSize: "10px",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "5.5em",
        fontSize: "13px",
      },
    },
    input: {
      backgroundColor: "while",
      width: "1.5em",
      borderRadius: 3,
      border: "1px solid black",
      textAlign: "center",
      boxShadow: "inset 0px 0px 5px 0px",
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
      borderTop: "5px solid #1c1c1c",
      borderBottom: "5px solid #1c1c1c",
      borderRight: "1px solid #1c1c1c",
      borderLeft: "1px solid #1c1c1c",
      borderRadius: 6,
      cursor: "row-resize",
      overflow: "hidden",
    },
    line: {
      width: "200%",
      height: 2,
      backgroundColor: "#D4D4D4",
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
    gearWhole: {
      height: "6.2em",
      width: "1em",
      background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%)",
      position: "absolute",
      zIndex: 2,
      pointerEvents: "none",
      top: 81,
    },
    buttons: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      marginLeft: "-0.5em",
      width: "1em",
      [theme.breakpoints.up("sm")]: {
        width: "1.5em",
      },
    },
    button: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: "large",
      color: "transparent",
      transition: "scale 200ms ease-in-out",
      width: "100%",

      "&:hover": {
        scale: "1.1",
      },
    },
  })
);

export default useStyles;
