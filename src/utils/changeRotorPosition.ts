import { State } from "./encryption";

const changeRotorPosition = (
  rotorsState: State[],
  index: number = 2
): State[] => {
  let oldPosition = rotorsState[index].position;

  if (oldPosition === 26) {
    oldPosition = 0;
    if (index > 0) {
      rotorsState = changeRotorPosition(rotorsState, index - 1);
    }
  }

  rotorsState.splice(index, 1, {
    num: rotorsState[index].num,
    position: oldPosition + 1,
  });

  return rotorsState;
};

export default changeRotorPosition;
