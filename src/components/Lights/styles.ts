import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    gap: "1em",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  light: {
    width: "2.5em",
    height: "2.5em",
    borderRadius: "1.5em",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "inset 0px 0px 5px 1px black",

    "&:nth-child(10)": {
      marginLeft: "2em",
    },
    "&:nth-child(17)": {
      marginRight: "2em",
    },
  },
}));

export default useStyles;
