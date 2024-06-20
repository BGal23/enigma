const changePlugboard = (letter: string, buttonsArray: string[][]) => {
  if (buttonsArray.length === 0) {
    return letter;
  } else {
    for (const array of buttonsArray) {
      if (array[0] === letter) {
        return array[1];
      } else if (array[1] === letter) {
        return array[0];
      } else {
        return letter;
      }
    }
  }
};

export default changePlugboard;
