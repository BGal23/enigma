import { Box, Button } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  crypt: string;
  text: string;
  handleClean: () => void;
}

const Text: React.FC<Props> = ({ crypt, text, handleClean }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Box className={classes.textWrapper}>
        <p>{text ? text : "Your text"}</p>
      </Box>
      <Button onClick={handleClean}>Clean</Button>
      <Box className={classes.textWrapper}>
        <p>{crypt ? crypt : "Enigma crypt"}</p>
      </Box>
    </div>
  );
};

export default Text;
