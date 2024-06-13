import { Box, Button, Grid } from "@material-ui/core";
import array from "../../assets/letters.json";
import useStyles from "./styles";

interface Props {
  selectedButton: string;
  setSelectedButton: (selectedButton: string) => void;
}

const Plugboard: React.FC<Props> = ({ selectedButton, setSelectedButton }) => {
  const classes = useStyles();

  const handleClick = (letter: string) => {
    setSelectedButton(letter);

    console.log(selectedButton);
  };
  return (
    <Grid container className={classes.wrapper}>
      {array.letters.map((letter, index) => (
        <Box key={index}>
          <Button onClick={() => handleClick(letter)}>{letter}</Button>
        </Box>
      ))}
    </Grid>
  );
};

export default Plugboard;
