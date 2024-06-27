import useStyles from "./styles";

const WoodenBox = ({ children }) => {
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
