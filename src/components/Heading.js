import Style from "../styles/Heading";

function Heading({ title }) {
  const classes = Style();
  return (
    <>
      <h2 className={classes.heading}>{title}</h2>
      <span className={classes.detail}></span>
    </>
  );
}

export default Heading;
