import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    gap: "1em",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "1em",
  },
  button: {
    color: "whitesmoke",
    border: "none",
    background: "transparent",
    fontFamily: '"FreeMono", sans-serif',
    width: "2.5em",
    display: "flex",
    fontSize: "1.1em",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5em",

    "&:nth-child(10)": {
      marginLeft: "2em",
    },
    "&:nth-child(17)": {
      marginRight: "2em",
    },
  },
  plugBox: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5em",
  },
  plug: {
    width: "0.5em",
    height: "0.5em",
    background: "black",
    border: "4px solid whitesmoke",
    borderRadius: "1em",
  },
}));

export default useStyles;
