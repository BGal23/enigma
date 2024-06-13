import array from "../assets/letters.json";

export const changeLetters = (letter: string) => {
  return array.letters.indexOf(letter) + 1;
};

export const changeNumbers = (number: number | undefined) => {
  return array.letters[Number(number) - 1];
};
