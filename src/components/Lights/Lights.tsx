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
            background:
              light === letter
                ? "radial-gradient(circle, rgba(196,206,0,1) 0%, rgba(0,0,0,1) 100%)"
                : "",
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
