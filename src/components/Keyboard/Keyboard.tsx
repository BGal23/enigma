import { Grid } from "@material-ui/core";
import array from "../../assets/letters.json";
import useStyles from "./styles";
import React, { useEffect } from "react";

interface Props {
  letter: string;
  setLetter: (letter: string) => void;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const Keyboard: React.FC<Props> = ({ letter, setLetter, setText }) => {
  const classes = useStyles();

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      handleChange(event.key.toUpperCase());
    };

    window.document.addEventListener("keydown", handleKeydown);
    return () => {
      window.document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleChange = (key: string) => {
    if (array.letters.some((letter) => letter === key)) {
      setText((prevText: string) => prevText + key);
      setLetter(key);
    }
  };

  return (
    <Grid container className={classes.keyboardWrapper}>
      {array.letters.map((element, index) => (
        <button
          key={index}
          className={classes.button}
          onClick={() => handleChange(element)}
          style={{ scale: element === letter ? "0.8" : "" }}
        >
          {element}
        </button>
      ))}
    </Grid>
  );
};

export default Keyboard;
