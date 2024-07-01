import { ReactNode } from "react";
import useStyles from "./styles";

interface WoodenBoxProps {
  children: ReactNode;
}

const WoodenBox: React.FC<WoodenBoxProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.verticalBox}>
      <div className={classes.verticalWood}></div>
      <div className={classes.horizontalBox}>
        <div className={classes.horizontalWood}></div>
        <div className={classes.childrenBox}>{children}</div>
        <div className={classes.horizontalWood}></div>
      </div>
      <div className={classes.verticalWood}></div>
    </div>
  );
};

export default WoodenBox;
