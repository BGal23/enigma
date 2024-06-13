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
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "1em",
    width: "100%",

    "& span": {
      width: "1em",
      textAlign: "center",
    },
  },
}));

export default useStyles;
