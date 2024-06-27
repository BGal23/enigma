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
    <Box
      sx={{
        width: "7em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={logo} className={classes.logo} />
      <input type="checkbox" onChange={() => setIsShowText(!isShowText)} />
    </Box>
  );
};

export default TextSwitch;
