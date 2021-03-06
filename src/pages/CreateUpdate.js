import { useRef, useState, useEffect } from "react";
import { Form } from "@unform/web";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import * as Yup from "yup";

import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Style from "../styles/CreateUpdate";
import TextField from "../components/form/Textfield";
import Select from "../components/form/Select";
import InputMoney from "../components/form/InputMoney";
import stageService from "../services/stage";
import { parseMoney } from "../utils/money";
import { create, update, findOneSubscription } from "../services/subscription";

function CreateUpdate() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const classes = Style();
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState(null);

  useEffect(() => {
    async function loadStage() {
      const { data: stages } = await stageService();
      const stagesMapped = stages.map(({ id, descricao }) => ({
        label: descricao,
        value: id,
      }));

      setOptions(stagesMapped);
    }

    loadStage();
  }, []);

  useEffect(() => {
    async function loadSubscription(base64) {
      setIsUpdate(true);

      try {
        const idAndSalt = atob(base64);
        const id = idAndSalt.replace(process.env.REACT_APP_SALT, "");
        const { data } = await findOneSubscription(id);

        if (!!data) {
          setIdUpdate(data.id);
          formRef.current.setData({
            ...data,
            etapa: +data.etapa.id,
            proporcaoSobras: String(data.proporcaoSobras).replaceAll(".", ","),
            preco: String(data.preco).replaceAll(".", ","),
            taxa: String(data.preco).replaceAll(".", ","),
            proporcaoPreferencia: String(data.proporcaoPreferencia).replaceAll(
              ".",
              ","
            ),
          });
        }
      } catch (error) {
        swal("Erro", "Ocorreu um erro ao carregar informa????es", "error");
        console.log(
          `Ocorreu um erro ao carregar informa????es: ${error.message}`
        );
      }
    }

    if (!!state) loadSubscription(state);
  }, [state]);

  function mapData(data) {
    const response = {};
    const keysFormat = [
      "preco",
      "taxa",
      "proporcaoPreferencia",
      "proporcaoSobras",
    ];

    Object.keys(data).forEach((key) => {
      if (keysFormat.includes(key)) {
        response[key] = parseMoney(data[key]);
      } else {
        response[key] = data[key];
      }
    });

    return response;
  }

  async function handleSubmit(data) {
    try {
      setLoading(true);

      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        fundo: Yup.string().required("Campo ?? obrigat??rio"),
        preco: Yup.string().required("Campo ?? obrigat??rio"),
        taxa: Yup.string().required("Campo ?? obrigat??rio"),
        dataBase: Yup.string().required("Campo ?? obrigat??rio"),
        proporcaoPreferencia: Yup.string().required("Campo ?? obrigat??rio"),
        proporcaoSobras: Yup.string().required("Campo ?? obrigat??rio"),
        coordenadorLider: Yup.string().required("Campo ?? obrigat??rio"),
        emissao: Yup.string().required("Campo ?? obrigat??rio"),
        etapa: Yup.string().required("Campo ?? obrigat??rio"),
        periodoNegociacaoDe: Yup.string().required("Campo ?? obrigat??rio"),
        periodoNegociacaoAte: Yup.string().required("Campo ?? obrigat??rio"),
        periodoPreferenciaDe: Yup.string().required("Campo ?? obrigat??rio"),
        periodoPreferenciaAte: Yup.string().required("Campo ?? obrigat??rio"),
        periodoSobrasDe: Yup.string().required("Campo ?? obrigat??rio"),
        periodoSobrasAte: Yup.string().required("Campo ?? obrigat??rio"),
        periodoPublicoDe: Yup.string().required("Campo ?? obrigat??rio"),
        periodoPublicoAte: Yup.string().required("Campo ?? obrigat??rio"),
      });

      await schema.validate(data, { abortEarly: false });
      const body = mapData(data);

      if (!isUpdate) {
        await create(body);
        formRef.current.reset();
        swal("Subscri????o Criada", "Subscri????o criada com sucesso", "success");
      } else {
        await update(body, idUpdate);
        swal(
          "Subscri????o Atualizada",
          "Subscri????o atualizada com sucesso",
          "success"
        );
      }
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      } else {
        swal("Erro", "Ocorreu um erro ao realizar opera????o", "error");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header isRegister={false} logoff={true} />

      <section className={classes.container}>
        <Heading title={!!isUpdate ? "EDITAR" : "CRIAR"} />

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
              <TextField
                fullWidth
                label="Fundo"
                name="fundo"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <InputMoney
                fullWidth
                label="Pre??o"
                name="preco"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <InputMoney
                fullWidth
                label="Taxa"
                name="taxa"
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
                label="Data Base"
                name="dataBase"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <InputMoney
                fullWidth
                label="Propor????o Prefer??ncia"
                name="proporcaoPreferencia"
                prefix=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <InputMoney
                fullWidth
                label="Propor????o Sobras"
                name="proporcaoSobras"
                prefix=""
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
                fullWidth
                label="Coordenador L??der"
                name="coordenadorLider"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                fullWidth
                label="Emiss??o"
                name="emissao"
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
                label="Per??odo Negocia????o - De"
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
                label="Per??odo Negocia????o - At??"
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
                label="Per??odo Prefer??ncia - De"
                name="periodoPreferenciaDe"
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
                label="Per??odo Prefer??ncia - At??"
                name="periodoPreferenciaAte"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                type="date"
                fullWidth
                label="Per??odo Sobras - De"
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
                label="Per??odo Sobras - At??"
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
                label="Per??odo P??blico - De"
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
                label="Per??odo P??blico - At??"
                name="periodoPublicoAte"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          <footer className={classes.containerButtons}>
            <Button
              variant="outlined"
              className={classes.buttons}
              disabled={loading}
              onClick={() => navigate("/adm")}
            >
              VOLTAR
            </Button>

            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.buttons}
              disabled={loading}
            >
              {!loading && <>{!!isUpdate ? "EDITAR" : "SALVAR"}</>}
              {loading && <CircularProgress color="inherit" />}
            </Button>
          </footer>
        </Form>
      </section>

      <Footer />
    </>
  );
}

export default CreateUpdate;
