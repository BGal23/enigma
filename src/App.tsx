import { useEffect, useState } from "react";
import Keyboard from "./components/Keyboard/Keyboard";
import Rotor from "./components/Rotor/Rotor";
import Plugboard from "./components/Plugboard/Plugboard";
import { Container, Grid } from "@material-ui/core";
import { changeLetters, changeNumbers } from "./utils/change";
import { runCrypt, turnBackCrypt, State } from "./utils/encryption";
import changeRotorPosition from "./utils/changeRotorPosition";
import turnRotors from "./assets/turnRotor.json";
import changePlugboard from "./utils/changePlugboard";
import Lights from "./components/Lights/Lights";
import WoodenBox from "./components/WoodenBox/WoodenBox";
import Text from "./components/Text/Text";
import TextSwitch from "./components/TextSwitch/TextSwitch";
import useStyles from "./styles";

const App = () => {
  const [rotorsState, setRotorState] = useState<State[]>([
    { num: "III", position: 1 },
    { num: "II", position: 1 },
    { num: "I", position: 1 },
  ]);
  const [letter, setLetter] = useState<string>("");
  const [text, setText] = useState("");
  const [crypt, setCrypt] = useState<string>("");
  const [cryptArray, setCryptArray] = useState<string[]>([]);
  const [selectedButton, setSelectedButton] = useState("");
  const [buttonsArray, setButtonsArray] = useState<string[][]>([]);
  const [light, setLights] = useState<string>("");
  const [isShowText, setIsShowText] = useState<boolean>(false);

  const classes = useStyles();

  const encryption = () => {
    const firstPlugChange = changePlugboard(letter, buttonsArray);

    if (firstPlugChange !== undefined) {
      const step0 = changeLetters(firstPlugChange);
      const step1 = runCrypt(rotorsState[2], step0);
      const step2 = runCrypt(rotorsState[1], step1);
      const step3 = runCrypt(rotorsState[0], step2);
      const step4 = turnRotors.TURN[step3 - 1].output;
      const step5 = turnBackCrypt(rotorsState[0], step4);
      const step6 = turnBackCrypt(rotorsState[1], step5);
      const step7 = turnBackCrypt(rotorsState[2], step6);

      const newLetter = changePlugboard(changeNumbers(step7), buttonsArray);

      if (newLetter !== undefined) {
        setLights(newLetter);
        cryptArray.push(newLetter);
        setCrypt(cryptArray.join(""));
      }
    }
  };

  useEffect(() => {
    if (text) {
      encryption();
      const newPosition = changeRotorPosition(rotorsState);
      setRotorState([...newPosition]);
    }
  }, [text]);

  const handleClean = () => {
    setText("");
    setCrypt && setCrypt("");
    setLetter("");
    setCryptArray && setCryptArray([]);
  };

  return (
    <Container maxWidth="sm">
      <WoodenBox>
        <Grid className={classes.rotors}>
          {rotorsState.map((element, index) => (
            <Rotor
              {...element}
              rotorsState={rotorsState}
              index={index}
              key={index}
              changeRotor={setRotorState}
            />
          ))}
          <TextSwitch isShowText={isShowText} setIsShowText={setIsShowText} />
        </Grid>

        {isShowText ? (
          <Text crypt={crypt} text={text} handleClean={handleClean} />
        ) : (
          <br />
        )}

        <Lights light={light} />

        <Keyboard letter={letter} setLetter={setLetter} setText={setText} />
        <Plugboard
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          buttonsArray={buttonsArray}
          setButtonsArray={setButtonsArray}
        />
      </WoodenBox>
    </Container>
  );
};

export default App;
