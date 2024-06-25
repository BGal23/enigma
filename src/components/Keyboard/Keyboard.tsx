import { Grid } from "@material-ui/core";
import array from "../../assets/letters.json";
import useStyles from "./styles";
import { MouseEvent } from "react";

interface Props {
  letter: string;
  setLetter: (letter: string) => void;
  setText: (text: string) => void;
  setCrypt: (crypt: string) => void;
  setCryptArray: (cryptArray: string[]) => void;
}

let arrayNormalText: string[] = [];

const Keyboard: React.FC<Props> = ({
  letter,
  setLetter,
  setText,
  setCrypt,
  setCryptArray,
}) => {
  const classes = useStyles();

  // window.document.addEventListener("keydown", (event) => {
  // handleChange(event.key.toUpperCase());
  // console.log(event.key.toUpperCase());
  // });

  const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
    const key = (event.target as HTMLButtonElement).innerText;

    if (array.letters.some((letter) => letter === key)) {
      arrayNormalText.push(key);
      setText(arrayNormalText.join(""));
      setLetter(key);
    }
  };

  const handleClean = () => {
    arrayNormalText = [];
    setText("");
    setCrypt("");
    setLetter("");
    setCryptArray([]);
  };

  return (
    <Grid container className={classes.wrapper}>
      {array.letters.map((element, index) => (
        <button
          key={index}
          className={classes.button}
          onClick={handleChange}
          style={{ scale: element === letter ? "0.8" : "" }}
        >
          {element}
        </button>
      ))}
    </Grid>
  );
};

export default Keyboard;
