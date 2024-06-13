import array from "../../assets/letters.json";

const randomNumber = (count: number) => {
  const randomNumber = Math.floor(Math.random() * count);
  return randomNumber;
};

const MakeRotor = () => {
  const makeNewRotor = () => {
    const newRotor = [];
    let newPosition = {};
    let count = array.letters.length;
    const inputArray = [];

    for (let i = 1; i <= 26; i++) {
      inputArray.push(i);
    }
    for (let i = 1; i <= 26; i++) {
      const outputNumber = inputArray[randomNumber(count)];
      const indexDeleteNumber = inputArray.indexOf(outputNumber);
      inputArray.splice(indexDeleteNumber, 1);
      count--;

      newPosition = {
        input: i,
        output: outputNumber,
      };

      newRotor.push(newPosition);
    }
    console.log(newRotor);
  };

  return (
    <>
      <button onClick={makeNewRotor}>Make new rotor</button>
    </>
  );
};

export default MakeRotor;
