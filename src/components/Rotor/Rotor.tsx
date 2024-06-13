import { ChangeEvent } from "react";
import rotors from "../../assets/rotors.json";
import { State } from "../../utils/encryption";
import useStyles from "./styles";
import { Box, Grid } from "@material-ui/core";

interface Props {
  rotorsState: State[];
  index: number;
  num: string;
  position: number;
  changeRotor: (newRotor: { num: string; position: number }[]) => void;
}

const Rotor: React.FC<Props> = ({
  rotorsState,
  index,
  num,
  position,
  changeRotor,
}) => {
  const keys = Object.keys(rotors);
  const classes = useStyles();

  const handleRotorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    rotorsState.splice(index, 1, {
      num: event.target.value,
      position: position,
    });

    changeRotor([...rotorsState]);
  };

  const handlePositionChange = (event: ChangeEvent<HTMLInputElement>) => {
    rotorsState.splice(index, 1, {
      num: num,
      position: Number(event.target.value),
    });

    changeRotor([...rotorsState]);
  };

  return (
    <Grid className={classes.rotorWrapper}>
      <select name="rotor" value={num} onChange={handleRotorChange}>
        {keys.map((value, index) => (
          <option key={index} value={value}>
            Rotor {value}
          </option>
        ))}
      </select>
      <Box className={classes.box}>
        <span>{rotors[num][position - 1].output}</span>
        <input
          type="number"
          value={rotors[num][position - 1].input}
          min={1}
          max={26}
          onChange={handlePositionChange}
        />
      </Box>
    </Grid>
  );
};

export default Rotor;
