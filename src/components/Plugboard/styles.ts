import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    gap: "1em",
    flexWrap: "wrap",
    margin: "1em",
  },
  activeLetters: {
    color: "red",
  },
}));

export default useStyles;
