import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    gap: "0.5em",
    flexWrap: "wrap",
    justifyContent: "space-between",

    "&:after": {
      content: '""',
      display: "block",
      width: "calc(100% + 2em)",
      height: "2em",
      margin: "0 -1em 0",
      background: "linear-gradient(0deg, #1a1a1a 0%, rgba(0,0,0,0) 100%)",
    },
  },
  button: {
    width: "2.5em",
    height: "2.5em",
    borderRadius: "1.5em",
    border: "3px solid silver",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "-5px 5px 5px 0px black",
    background:
      "radial-gradient(circle, rgba(7, 7, 7, 1) 0%, rgba(31, 31, 31, 1) 100%)",
    color: "white",
    fontFamily: '"FreeMono", sans-serif',
    fontSize: "1.1em",
    cursor: "pointer",
    transition: "scale 200ms ease-in-out",

    "&:hover": {
      scale: "1.05",
    },

    "&:nth-child(10)": {
      marginLeft: "2em",
    },
    "&:nth-child(17)": {
      marginRight: "2em",
    },
  },
}));

export default useStyles;
