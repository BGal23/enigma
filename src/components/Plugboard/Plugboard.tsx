import { Box, Button, Grid } from "@material-ui/core";
import array from "../../assets/letters.json";
import useStyles from "./styles";

interface Props {
  selectedButton: string;
  setSelectedButton: (selectedButton: string) => void;
  buttonsArray: string[][];
  setButtonsArray: (buttonsArray: string[][]) => void;
}

const Plugboard: React.FC<Props> = ({
  selectedButton,
  setSelectedButton,
  buttonsArray,
  setButtonsArray,
}) => {
  const classes = useStyles();

  const handleClick = (letter: string) => {
    if (
      !selectedButton &&
      buttonsArray.some((array) => array[0] === letter || array[1] === letter)
    ) {
      const deleteLetterArray = buttonsArray.findIndex(
        (array) => array[0] === letter || array[1] === letter
      );
      buttonsArray.splice(deleteLetterArray, 1);

      // console.log(deleteLetterArray, newLettersArray);

      setButtonsArray([...buttonsArray]);
    } else if (!selectedButton) {
      setSelectedButton(letter);
    } else if (letter === selectedButton || handleColor(letter).length > 1) {
      setSelectedButton("");
    } else {
      const newLettersArray = [selectedButton, letter];
      setButtonsArray([...buttonsArray, newLettersArray]);
      setSelectedButton("");
    }
  };

  const handleColor = (letter: string) => {
    for (const array of buttonsArray) {
      if (array[0] === letter) {
        return `${array[0]} 🔄 ${array[1]}`;
      } else if (array[1] === letter) {
        return `${array[1]} 🔄 ${array[0]}`;
      }
    }
    return letter;
  };

  return (
    <Grid container className={classes.wrapper}>
      {array.letters.map((letter, index) => (
        <Box key={index}>
          <Button
            onClick={() => handleClick(letter)}
            // color={handleColor(letter)}
            style={{ background: selectedButton === letter ? "yellow" : "" }}
            // disabled={handleColor(letter).length > 1}
          >
            {handleColor(letter)}
          </Button>
        </Box>
      ))}
    </Grid>
  );
};

export default Plugboard;
