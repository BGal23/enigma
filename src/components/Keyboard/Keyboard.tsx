import array from "../../assets/letters.json";

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
  const handleChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.key.toUpperCase();

    if (array.letters.some((letter) => letter === input)) {
      arrayNormalText.push(input);
      setText(arrayNormalText.join(""));
      setLetter(input);
    }
    event.preventDefault();
  };

  const handleClean = () => {
    arrayNormalText = [];
    setText("");
    setCrypt("");
    setLetter("");
    setCryptArray([]);
  };

  return (
    <div
      onKeyDown={(even) => {
        if (even.key === "Backspace") {
          handleClean();
        }
      }}
    >
      <input
        value={letter}
        type="text"
        onChange={() => {}}
        onKeyDown={handleChange}
      />
      <button type="button" onClick={handleClean}>
        Clean text
      </button>
    </div>
  );
};

export default Keyboard;
