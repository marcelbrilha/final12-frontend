import UmbrellaImage from "../images/umbrella.svg";
import RudderImage from "../images/rudder.svg";
import WalletImage from "../images/wallet.svg";
import Style from "../styles/Information";

function Information() {
  const classes = Style();

  return (
    <section className={classes.content}>
      <article>
        <header>
          <figure>
            <img
              src={UmbrellaImage}
              alt="Tranquilidade"
              className={classes.image}
            />
          </figure>

          <h3 className={classes.heading}>Tranquilidade</h3>
        </header>

        <p className={classes.message}>
          Selecione os fundos imobiliários que você deseja ser notificado e pode
          deixar o resto com a gente.
        </p>
      </article>

      <article>
        <header>
          <figure>
            <img
              src={RudderImage}
              alt="Tomada de Decisão"
              className={classes.image}
            />
          </figure>

          <h3 className={classes.heading}>Tomada de Decisão</h3>
        </header>

        <p className={classes.message}>
          Com o final12 você consegue ter mais controle sobre todas as
          subscrições que estão acontecendo, melhorando sua tomada de decisão.
        </p>
      </article>

      <article>
        <header>
          <figure>
            <img
              src={WalletImage}
              alt="Ganho de Capital"
              className={classes.image}
            />
          </figure>

          <h3 className={classes.heading}>Ganho de Capital</h3>
        </header>

        <p className={classes.message}>
          Não sofra mais diluição de participação nos fundos que você tem em
          carteira devido a falta de informação.
        </p>
      </article>
    </section>
  );
}

export default Information;
