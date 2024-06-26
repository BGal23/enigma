import { Grid } from "@material-ui/core";
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

      setButtonsArray([...buttonsArray]);
    } else if (!selectedButton) {
      setSelectedButton(letter);
    } else if (letter === selectedButton || handlePlug(letter) !== undefined) {
      setSelectedButton("");
    } else {
      const newLettersArray = [selectedButton, letter];
      setButtonsArray([...buttonsArray, newLettersArray]);
      setSelectedButton("");
    }
  };

  const handlePlug = (letter: string) => {
    for (const array of buttonsArray) {
      if (array[0] === letter) {
        return (
          <div className={classes.plug}>
            <span>{array[1]}</span>
            <div className={classes.screw}></div>
          </div>
        );
      } else if (array[1] === letter) {
        return (
          <div className={classes.plug}>
            <span>{array[0]}</span>
            <div className={classes.screw}></div>
          </div>
        );
      }
    }
    return;
  };

  return (
    <Grid container className={classes.wrapper}>
      {array.letters.map((letter, index) => (
        <button
          type="button"
          key={index}
          onClick={() => handleClick(letter)}
          className={classes.button}
          style={{ background: selectedButton === letter ? "#F5F5F550" : "" }}
        >
          <Grid className={classes.plugBox}>
            {letter}
            <div className={classes.outlet}></div>
            <div className={classes.outlet}></div>
            {handlePlug(letter)}
          </Grid>
        </button>
      ))}
    </Grid>
  );
};

export default Plugboard;
