import { Box } from "@material-ui/core";
import logo from "../../assets/image/logo.svg";
import useStyles from "./styles";

interface Props {
  isShowText: boolean;
  setIsShowText: (isShowText: boolean) => void;
}

const TextSwitch: React.FC<Props> = ({ isShowText, setIsShowText }) => {
  const classes = useStyles();
  return (
    <Box className={classes.switchBox}>
      <img src={logo} className={classes.logo} />
      <div>
        <label className={classes.checkbox}>
          <input
            type="checkbox"
            onChange={() => setIsShowText(!isShowText)}
            className={classes.input}
          />
          <div className={classes.enigmaSwitch}>
            <div className={classes.array}>
              <div className={classes.switch}>
                <div className={classes.screw}></div>
              </div>
            </div>
          </div>
        </label>
        <p className={classes.text}>SHOW TEXT & CRYPT</p>
      </div>
    </Box>
  );
};

export default TextSwitch;
