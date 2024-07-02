import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    switchBox: {
      width: "100%",
      display: "flex",
      gap: "1em",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      height: "100%",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "column",
        width: "7em",
        justifyContent: "start",
      },
    },
    logo: {
      width: "8em",
      [theme.breakpoints.up("sm")]: {
        width: "6em",
      },
    },
    checkbox: {
      display: "block",
      cursor: "pointer",
    },
    enigmaSwitch: {
      display: "block",
      width: "6em",
      height: "4em",
      position: "relative",

      "&::after": {
        content: "'OFF'",
        display: "block",
        position: "relative",
        color: "#6b6b6b",
        rotate: "-45deg",
        width: "2em",
        fontSize: "small",
        fontWeight: "bold",
        bottom: "78%",
        left: "10%",
      },
      "&::before": {
        content: "'ON'",
        display: "block",
        position: "relative",
        color: "#6b6b6b",
        rotate: "45deg",
        width: "2em",
        fontSize: "small",
        fontWeight: "bold",
        top: "48%",
        left: "66%",
      },
    },
    input: {
      display: "none",
      "&:checked + $enigmaSwitch $array $switch": {
        transform: "rotate(90deg)",
      },
    },
    array: {
      display: "block",
      width: "100%",
      height: "100%",
      background: "radial-gradient(circle, #dbdbdb 0%, #505050 100%)",
      borderRadius: "3em  3em 0 0",

      "&::after": {
        content: '""',
        display: "block",
        position: "relative",
        width: "50%",
        height: "50%",
        background: "#2b2b2b",
        borderRadius: "3em  3em 0 0",
        bottom: "80%",
        left: "25%",
        zIndex: "1",
      },
      "&::before": {
        content: '""',
        display: "block",
        position: "relative",
        width: "100%",
        height: "1.3em",
        background: "#2b2b2b",
        top: "70%",
        zIndex: "1",
      },
    },
    switch: {
      display: "block",
      width: "1em",
      height: "3.5em",
      background:
        "radial-gradient(circle, rgba(48,48,48,1) 0%, rgba(0,0,0,1) 100%)",
      borderRadius: "0.3em",
      position: "relative",
      left: "calc(50% - 0.5em)",
      bottom: "0.2em",
      rotate: "-45deg",
      transition: "transform 200ms ease-in-out",
      zIndex: 3,
    },
    screw: {
      content: '""',
      position: "relative",
      height: "0.6em",
      width: "0.6em",
      background: "radial-gradient(circle, #dbdbdb 0%, #505050 100%)",
      borderRadius: "50%",
      top: "1.5em",
      left: "3px",

      "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        height: 2,
        backgroundColor: "#6b6b6b",
        transform: "translate(-50%, -50%) rotate(-45deg)",
      },
    },
    text: {
      margin: 0,
      fontSize: "xx-small",
      fontWeight: "bold",
      color: "rgba(20, 20, 20)",
      position: "relative",
      zIndex: 2,
    },
  })
);

export default useStyles;
