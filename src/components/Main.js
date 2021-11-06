import Style from "../styles/Main";
import Information from "../components/Information";
import Faq from "../components/Faq";

function Main() {
  const classes = Style();

  return (
    <main className={classes.main}>
      <Information />
      <Faq />
    </main>
  );
}

export default Main;
