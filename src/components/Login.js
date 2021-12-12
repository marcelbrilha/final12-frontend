import { useRef, useState } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { Form } from "@unform/web";
import { useNavigate } from "react-router-dom";
import TextField from "./form/Textfield";
import * as Yup from "yup";
import swal from "sweetalert";

import loginService from "../services/login";
import Heading from "./Heading";
import Style from "../styles/Login";

function Login() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const classes = Style();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    try {
      setLoading(true);
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("E-mail inválido")
          .required("E-mail é obrigatório"),
        senha: Yup.string()
          .min(6, "Senha deve ter mais que 5 caracteres")
          .required("Senha é obrigatória"),
      });

      await schema.validate(data, { abortEarly: false });
      const response = await loginService.login(data);
      sessionStorage.setItem("token", response.data.access_token);

      setLoading(false);
      navigate("/adm");
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      } else {
        swal("Acesso Negado", "Usuário ou senha inválidos", "error");
      }

      setLoading(false);
    }
  }

  return (
    <section className={classes.content}>
      <Heading title="ENTRAR" />

      <Form className={classes.form} ref={formRef} onSubmit={handleSubmit}>
        <TextField label="E-mail" variant="outlined" name="email" />
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
          disabled={loading}
        >
          {!loading && <>ACESSAR</>}
          {loading && <CircularProgress color="inherit" />}
        </Button>
      </Form>
    </section>
  );
}

export default Login;
