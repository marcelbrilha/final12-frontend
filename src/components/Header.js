import Button from "@material-ui/core/Button";

import Style from "../styles/Header";

function Header() {
  const classes = Style();

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          FINAL<span className={classes.detail}>12</span>
        </h1>
      </header>

      <section className={classes.register}>
        <div className={classes.contentRegister}>
          <h2 className={classes.heading}>TUDO SOBRE SUBSCRIÇÕES</h2>

          <p className={classes.message}>
            Selecione os fundos que você deseja ser notificado e fique
            tranquilo!
          </p>

          <Button
            variant="contained"
            color="secondary"
            className={classes.btnRegister}
          >
            CADASTRAR
          </Button>
        </div>
      </section>
    </>
  );
}

export default Header;
