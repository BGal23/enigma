import { ChangeEvent, WheelEvent, useEffect, useRef, useState } from "react";
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
  const [isMove, setIsMove] = useState(false);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const isFirstRender = useRef(true);
  const prevPosition = useRef(position);

  const gear = [0, 10, 20, 30, 40, 50, 60, 70, 80];

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (position > prevPosition.current) {
      setIsIncreasing(true);
      prevPosition.current = position;
    } else {
      setIsIncreasing(false);
      prevPosition.current = position;
    }

    setIsMove(true);
    setTimeout(() => {
      setIsMove(false);
    }, 100);
  }, [position]);

  const handleRotorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    rotorsState.splice(index, 1, {
      num: event.target.value,
      position: position,
    });

    changeRotor([...rotorsState]);
  };

  const handlePositionChange = (value: number) => {
    rotorsState.splice(index, 1, {
      num: num,
      position: value,
    });

    changeRotor([...rotorsState]);
  };

  const handleMouseWheel = (event: WheelEvent) => {
    const delta = event.deltaY;

    if (delta > 0) {
      changePosition(false);
    } else if (delta < 0) {
      changePosition(true);
    }
  };

  const changePosition = (isAdd: boolean) => {
    if (!isAdd) {
      if (position <= 1) {
        handlePositionChange(26);
      } else {
        handlePositionChange(position - 1);
      }
    } else if (isAdd) {
      if (position >= 26) {
        handlePositionChange(1);
      } else {
        handlePositionChange(position + 1);
      }
    }
  };

  return (
    <Grid className={classes.rotorWrapper}>
      <div className={classes.selectWrapper}>
        <select
          className={classes.select}
          name="rotor"
          value={num}
          onChange={handleRotorChange}
        >
          {keys.map((value, index) => (
            <option key={index} value={value}>
              Rotor {value}
            </option>
          ))}
        </select>
      </div>
      <Box className={classes.numberChangeWrapper}>
        <Box className={classes.inputWrapper}>
          <div className={classes.screw}></div>
          <input
            className={classes.input}
            type="number"
            value={rotors[num][position - 1].input}
            min={1}
            max={26}
            onChange={() => {}}
          />

          <div className={classes.screw}></div>
        </Box>
        <div className={classes.buttons}>
          <button
            type="button"
            className={classes.button}
            onClick={() => changePosition(true)}
          >
            +
          </button>
          <button
            type="button"
            className={classes.button}
            onClick={() => changePosition(false)}
          >
            -
          </button>
        </div>
        <div className={classes.gearBox} onWheel={handleMouseWheel}>
          {gear.map((element, index) => (
            <div
              key={index}
              style={{ top: element }}
              className={`${classes.line} ${
                isMove
                  ? isIncreasing
                    ? "moveLineUp"
                    : "moveLineDown"
                  : "resetTransition"
              }`}
            ></div>
          ))}
          <div className={classes.gearWhole}></div>
        </div>
      </Box>
    </Grid>
  );
};

export default Rotor;
