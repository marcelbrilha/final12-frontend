import { TextField, Button } from "@material-ui/core";

import Style from "../styles/Login";

function Login() {
  const classes = Style();

  return (
    <section className={classes.content}>
      <h2 className={classes.heading}>ENTRAR</h2>

      <form className={classes.form}>
        <TextField label="Usuário" variant="outlined" />
        <TextField type="password" label="Senha" variant="outlined" />

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          ENTRAR
        </Button>
      </form>
    </section>
  );
}

export default Login;
