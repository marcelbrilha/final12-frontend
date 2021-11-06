import { TextField, Button } from "@material-ui/core";

import Heading from "./Heading";
import Style from "../styles/Login";

function Login() {
  const classes = Style();

  return (
    <section className={classes.content}>
      <Heading title="ENTRAR" />

      <form className={classes.form}>
        <TextField label="Usuário" variant="outlined" />
        <TextField type="password" label="Senha" variant="outlined" />

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          ACESSAR
        </Button>
      </form>
    </section>
  );
}

export default Login;
