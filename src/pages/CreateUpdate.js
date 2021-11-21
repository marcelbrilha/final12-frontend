import { useRef } from "react";
import { Form } from "@unform/web";
import { Grid, Button } from "@material-ui/core";
import * as Yup from "yup";

import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Style from "../styles/CreateUpdate";
import TextField from "../components/form/Textfield";
import Select from "../components/form/Select";
import InputMoney from "../components/form/InputMoney";

function CreateUpdate() {
  const formRef = useRef(null);
  const classes = Style();

  const options = [
    {
      label: "Andamento",
      value: "andamento",
    },
    {
      label: "Encerrado",
      value: "encerrado",
    },
  ];

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        fundo: Yup.string().required("Campo é obrigatório"),
        preco: Yup.string().required("Campo é obrigatório"),
        taxa: Yup.string().required("Campo é obrigatório"),
        dataBase: Yup.string().required("Campo é obrigatório"),
        proporcaoPreferencia: Yup.string().required("Campo é obrigatório"),
        proporcaoSobras: Yup.string().required("Campo é obrigatório"),
        coordenadorLider: Yup.string().required("Campo é obrigatório"),
        emissao: Yup.string().required("Campo é obrigatório"),
        etapa: Yup.string().required("Campo é obrigatório"),
        periodoNegociacaoDe: Yup.string().required("Campo é obrigatório"),
        periodoNegociacaoAte: Yup.string().required("Campo é obrigatório"),
        PeriodoPreferenciaDe: Yup.string().required("Campo é obrigatório"),
        PeriodoPreferenciaAte: Yup.string().required("Campo é obrigatório"),
        periodoSobrasDe: Yup.string().required("Campo é obrigatório"),
        periodoSobrasAte: Yup.string().required("Campo é obrigatório"),
        periodoPublicoDe: Yup.string().required("Campo é obrigatório"),
        periodoPublicoAte: Yup.string().required("Campo é obrigatório"),
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
    <>
      <Header isRegister={false} logoff={true} />

      <section className={classes.container}>
        <Heading title="CRIAR" />

        <Form className={classes.form} ref={formRef} onSubmit={handleSubmit}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
            className={classes.content}
          >
            <Grid item xs={12} sm={4} md={4}>
              <TextField fullWidth label="Fundo" name="fundo" />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <InputMoney fullWidth label="Preço" name="preco" />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <InputMoney fullWidth label="Taxa" name="taxa" />
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
            className={classes.content}
          >
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                type="date"
                fullWidth
                label="Data Base"
                name="dataBase"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                fullWidth
                label="Proporção Preferência"
                name="proporcaoPreferencia"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                fullWidth
                label="Proporção Sobras"
                name="proporcaoSobras"
              />
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
            className={classes.content}
          >
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                fullWidth
                label="Coordenador Líder"
                name="coordenadorLider"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField fullWidth label="Emissão" name="emissao" />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Select label="Etapa" fullWidth options={options} name="etapa" />
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
            className={classes.content}
          >
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                type="date"
                fullWidth
                label="Período Negociação - De"
                name="periodoNegociacaoDe"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                type="date"
                fullWidth
                label="Período Negociação - Até"
                name="periodoNegociacaoAte"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                type="date"
                fullWidth
                label="Período Preferência - De"
                name="PeriodoPreferenciaDe"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
            className={classes.content}
          >
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                type="date"
                fullWidth
                label="Período Preferência - Até"
                name="PeriodoPreferenciaAte"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                type="date"
                fullWidth
                label="Período Sobras - De"
                name="periodoSobrasDe"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                type="date"
                fullWidth
                label="Período Sobras - Até"
                name="periodoSobrasAte"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
            className={classes.content}
          >
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                type="date"
                fullWidth
                label="Período Público - De"
                name="periodoPublicoDe"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                type="date"
                fullWidth
                label="Período Público - Até"
                name="periodoPublicoAte"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          <footer className={classes.containerButtons}>
            <Button variant="outlined" className={classes.buttons}>
              CANCELAR
            </Button>

            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.buttons}
            >
              SALVAR
            </Button>
          </footer>
        </Form>
      </section>

      <Footer />
    </>
  );
}

export default CreateUpdate;
