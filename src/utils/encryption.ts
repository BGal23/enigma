import rotorsData from "../assets/rotors.json";
import correctedRotor from "./correctedRotor";

export interface State {
  num: string;
  position: number;
}

interface Rotor {
  input: number;
  output: number;
}

interface Rotors {
  [key: string]: Rotor[];
}

const rotors: Rotors = rotorsData;

export const runCrypt = (rotorPosition: State, step: number) => {
  return rotors[rotorPosition.num][correctedRotor(rotorPosition.position, step)]
    .output;
};

export const turnBackCrypt = (
  rotorPosition: State,
  step: number | undefined
) => {
  const checkIndex =
    1 +
    rotors[rotorPosition.num].findIndex(
      (number: Rotor) => number.output === step
    ); // sprawdzany jest index w króry trafia

  let correctedNumber = checkIndex - rotorPosition.position;
  if (correctedNumber < 0) {
    correctedNumber = correctedNumber + 26;
  }
  const outputIndexMore = rotors[rotorPosition.num][correctedNumber].output; // to jest output liczby z większym indexem

  return rotors[rotorPosition.num].find(
    (number: Rotor) => number.output === outputIndexMore
  )?.input; // znajdujemy w którym indexie jest wyzej obliczony output i podajemy input
};
