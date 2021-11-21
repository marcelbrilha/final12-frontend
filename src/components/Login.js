import { useRef } from "react";
import { Button } from "@material-ui/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import TextField from "./form/Textfield";

import Heading from "./Heading";
import Style from "../styles/Login";

function Login() {
  const formRef = useRef(null);
  const classes = Style();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        usuario: Yup.string().required("Usuário é obrigatório"),
        senha: Yup.string()
          .min(6, "Senha deve ter mais que 5 caracteres")
          .required("Senha é obrigatória"),
      });

      await schema.validate(data, { abortEarly: false });

      console.log(data);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <section className={classes.content}>
      <Heading title="ENTRAR" />

      <Form className={classes.form} ref={formRef} onSubmit={handleSubmit}>
        <TextField label="Usuário" variant="outlined" name="usuario" />
        <TextField
          type="password"
          label="Senha"
          variant="outlined"
          name="senha"
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          ACESSAR
        </Button>
      </Form>
    </section>
  );
}

export default Login;
