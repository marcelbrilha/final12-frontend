import Style from "../styles/Main";
import Information from "../components/Information";

function Main() {
  const classes = Style();

  return (
    <main className={classes.main}>
      <Information />
    </main>
  );
}

export default Main;
