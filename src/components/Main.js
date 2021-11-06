import Style from "../styles/Main";
import Information from "../components/Information";
import Faq from "../components/Faq";
import Subscription from "../components/Subscription";

function Main() {
  const classes = Style();

  return (
    <main className={classes.main}>
      <Information />
      <Subscription />
      <Faq />
    </main>
  );
}

export default Main;
