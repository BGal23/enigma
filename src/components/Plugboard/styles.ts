import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    columnGap: "0.5em",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "1em",
  },
  plug: {
    width: "1.5em",
    height: "2.6em",
    background:
      "radial-gradient(circle, rgba(48,48,48,1) 0%, rgba(0,0,0,1) 100%)",
    position: "relative",
    borderRadius: "1em",
    margin: "0.5em 0 -4em 0",
    padding: "0.2em",
    top: "-3.8em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.4em",
    color: "transparent",
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
    borderRadius: "1.0em",
    cursor: "pointer",
    transition: "background 200ms ease-in-out",
    paddingBottom: "0.3em",

    "&:hover": {
      background: "#F5F5F520",

      "& div": {
        "& span": {
          color: "whitesmoke",
        },
      },
    },

    "& div": {
      "& span": {
        transition: "color 200ms ease-in-out",
      },
    },

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
    alignItems: "center",
  },
  outlet: {
    width: "0.5em",
    height: "0.5em",
    background: "black",
    border: "4px solid whitesmoke",
    borderRadius: "1em",
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
}));

export default useStyles;
