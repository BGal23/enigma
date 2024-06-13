const correctedRotor = (rotorPosition: number, number: number) => {
  let correctedNumber = rotorPosition + number - 2;

  if (correctedNumber > 25) {
    correctedNumber = correctedNumber - 26;
  }
  return correctedNumber;
};

export default correctedRotor;
