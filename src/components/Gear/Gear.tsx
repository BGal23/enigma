import { Slider } from "@material-ui/core";

const Gear = () => {
  return (
    <Slider
      orientation="vertical"
      // value={rotors[num][position - 1].input} // Wartość suwaka
      // min={1} // Minimalna wartość
      // max={26} // Maksymalna wartość
      // onChange={handleChange} // Obsługa zmiany wartości
      aria-labelledby="vertical-slider"
    />
  );
};

export default Gear;
