import { useState, useRef } from "react";
import { Form } from "@unform/web";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
  Alert,
} from "@material-ui/core";
import * as Yup from "yup";

import Style from "../styles/Register";
import Select from "./form/Select";
import TextField from "./form/Textfield";

function Register({ open, handleOpenClose }) {
  const formRef = useRef(null);
  const classes = Style();

  const [funds] = useState([
    {
      label: "BCFF11",
      value: "BCFF11",
    },
    {
      label: "ALZR11",
      value: "ALZR11",
    },
    {
      label: "KNRI11",
      value: "KNRI11",
    },
    {
      label: "HGLG11",
      value: "HGLG11",
    },
    {
      label: "HGRU11",
      value: "HGRU11",
    },
  ]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        fundos: Yup.array().min(1, "Campo é obrigatório"),
        email: Yup.string()
          .email("E-mail deve ser válido")
          .required("Campo é obrigatório"),
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
    <Dialog open={open}>
      <DialogTitle className={classes.title}>NOTIFICAÇÕES</DialogTitle>

      <DialogContent>
        <DialogContentText className={classes.message}>
          <span className={classes.messageSpan}>
            Preencha os fundos imobiliários que você deseja receber a
            notificação
          </span>

          <Alert severity="info" className="mt-2">
            Funcionalidade em DESENVOLVIMENTO
          </Alert>
        </DialogContentText>

        <Form className={classes.form} ref={formRef} onSubmit={handleSubmit}>
          <Select multiple options={funds} name="fundos" label="Fundos" />
          <TextField
            label="E-mail"
            type="email"
            fullWidth
            name="email"
            className={classes.textField}
          />
        </Form>
      </DialogContent>

      <DialogActions>
        <Button
          className={classes.btnCancel}
          onClick={() => handleOpenClose(false)}
        >
          Cancelar
        </Button>

        <Button
          color="secondary"
          variant="contained"
          onClick={() => formRef.current.submitForm()}
        >
          Inscrever
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Register;
