import { useEffect, useState } from "react";
import Keyboard from "./components/Keyboard/Keyboard";
import MakeRotor from "./components/MakeRotor/MakeRotor";
import Rotor from "./components/Rotor/Rotor";
import Plugboard from "./components/Plugboard/Plugboard";
import { Grid } from "@material-ui/core";
import { changeLetters, changeNumbers } from "./utils/change";
import { runCrypt, turnBackCrypt, State } from "./utils/encryption";
import changeRotorPosition from "./utils/changeRotorPosition";
import rotors from "./assets/rotors.json";

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

  const encryption = () => {
    const step0 = changeLetters(letter);
    const step1 = runCrypt(rotorsState[2], step0);
    const step2 = runCrypt(rotorsState[1], step1);
    const step3 = runCrypt(rotorsState[0], step2);
    const step4 = rotors.ROT[step3 - 1].output;
    const step5 = turnBackCrypt(rotorsState[0], step4);
    const step6 = turnBackCrypt(rotorsState[1], step5);
    const step7 = turnBackCrypt(rotorsState[2], step6);

    cryptArray.push(changeNumbers(step7));
    setCrypt(cryptArray.join(""));
  };

  useEffect(() => {
    if (text) {
      encryption();
      const newPosition = changeRotorPosition(rotorsState);
      setRotorState([...newPosition]);
    }
  }, [text]);

  return (
    <>
      <Grid container justifyContent="space-between">
        {rotorsState.map((element, index) => (
          <Rotor
            {...element}
            rotorsState={rotorsState}
            index={index}
            key={index}
            changeRotor={setRotorState}
          />
        ))}
      </Grid>

      <p>Your crypt: {crypt}</p>

      <p>Your text: {text}</p>

      <Keyboard
        letter={letter}
        setLetter={setLetter}
        setText={setText}
        setCrypt={setCrypt}
        setCryptArray={setCryptArray}
      />
      <Plugboard
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <div> </div>
      <MakeRotor />
    </>
  );
};

export default App;
