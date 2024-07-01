import { Box } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  crypt: string;
  text: string;
  handleClean: () => void;
}

const Text: React.FC<Props> = ({ crypt, text, handleClean }) => {
  const classes = useStyles();

  const handleCopy = (copy: string) => {
    navigator.clipboard.writeText(copy);
  };

  return (
    <div className={classes.wrapper}>
      <Box className={classes.textWrapper}>
        <p>{text ? text : "Your text"}</p>
      </Box>
      <Box className={classes.textWrapper}>
        <p>{crypt ? crypt : "Enigma crypt"}</p>
      </Box>
      <div className={classes.buttons}>
        <button type="button" onClick={handleClean}>
          CLEAN
        </button>
        <button type="button" onClick={() => handleCopy(text)}>
          COPY TEXT
        </button>
        <button type="button" onClick={() => handleCopy(crypt)}>
          COPY CRYPT
        </button>
      </div>
    </div>
  );
};

export default Text;
