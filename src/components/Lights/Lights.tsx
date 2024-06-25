import { Box, Grid } from "@material-ui/core";
import array from "../../assets/letters.json";
import useStyles from "./styles";

interface Props {
  light: string | undefined;
}

const Lights: React.FC<Props> = ({ light }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper}>
      {array.letters.map((letter, index) => (
        <Box
          style={{
            color: light === letter ? "yellow" : "",
            textShadow: light === letter ? "0px 0px 1em yellow" : "",
            fontWeight: light === letter ? "bold" : "",
          }}
          key={index}
          className={classes.light}
        >
          {letter}
        </Box>
      ))}
    </Grid>
  );
};

export default Lights;
