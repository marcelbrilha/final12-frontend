import { useEffect, useState, useRef } from "react";
import { Edit, Delete, AddCircle, Search } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  IconButton,
  Tooltip,
  Box,
  TextField,
  Pagination,
  CircularProgress,
} from "@material-ui/core";

import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Style from "../styles/Administrative";
import { search, removeSubscription } from "../services/subscription";

function Administrative() {
  const fundRef = useRef();
  const navigate = useNavigate();
  const classes = Style();
  const [subscriptions, setSubscriptions] = useState([]);
  const [params, setParams] = useState({});
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSubscriptions() {
      try {
        setLoading(true);
        const { data } = await search(params);
        setSubscriptions(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        swal("Erro", "Ocorreu um erro ao carregar as informações", "error");
      } finally {
        setLoading(false);
      }
    }

    loadSubscriptions();
  }, [params]);

  function paginate(event, page) {
    const currPage = page - 1;
    setParams({ ...params, page: currPage });
  }

  function searchFund() {
    const value = fundRef.current.value;
    const fundo = String(value).toLocaleUpperCase();
    setParams({ fundo });
  }

  async function remove(id) {
    const value = await swal("Deseja realmente remover essa subscrição?", {
      buttons: {
        cancel: "Cancelar",
        remove: {
          text: "Remover",
          value: "remove",
        },
      },
    });

    try {
      if (value === "remove") {
        await removeSubscription(id);
        const newSubscriptions = subscriptions.filter((curr) => curr.id !== id);
        setSubscriptions(newSubscriptions);
        swal("Removido", "Subscrição removida com sucesso", "success");
      }
    } catch (error) {
      swal("Erro", "Ocorreu um erro ao realizar exclusão", "error");
    }
  }

  function update(id) {
    const idAndSalt = `${process.env.REACT_APP_SALT}${id}`;
    const state = btoa(idAndSalt);
    navigate("/subscription", { state });
  }

  return (
    <>
      <Header isRegister={false} logoff={true} />

      <section className={classes.content}>
        <Heading title="SUBSCRIÇÕES" />

        <nav className={classes.containerNavigation}>
          <Box className={classes.containerSearch}>
            <TextField
              label="Pesquisar Fundo"
              variant="standard"
              inputRef={fundRef}
            />

            <Tooltip title="Pesquisar Fundo">
              <Search className={classes.iconSearch} onClick={searchFund} />
            </Tooltip>
          </Box>

          <Box className={classes.containerAdd}>
            <Tooltip title="Criar">
              <AddCircle
                className={classes.addButton}
                onClick={() => navigate("/subscription")}
              />
            </Tooltip>
          </Box>
        </nav>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Fundo</TableCell>
                <TableCell>Emissão</TableCell>
                <TableCell>Etapa</TableCell>
              </TableRow>
            </TableHead>

            {!loading && subscriptions && subscriptions.length > 0 && (
              <TableBody>
                {subscriptions.map((subscription, index) => (
                  <TableRow key={`subscription-${index}`}>
                    <TableCell>
                      <Tooltip title="Editar">
                        <IconButton
                          size="small"
                          onClick={() => update(subscription.id)}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Remover">
                        <IconButton
                          size="small"
                          className={classes.addRemove}
                          onClick={() => remove(subscription.id)}
                        >
                          <Delete color="secondary" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>

                    <TableCell>{subscription.fundo}</TableCell>
                    <TableCell>{subscription.emissao}</TableCell>
                    <TableCell>{subscription.etapa}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}

            {!loading && (!subscriptions || subscriptions.length === 0) && (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    Sem registros
                  </TableCell>
                </TableRow>
              </TableBody>
            )}

            {!!loading && (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    <CircularProgress color="inherit" />
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>

        {!!totalPages && totalPages !== 1 && (
          <Pagination
            count={totalPages}
            color="secondary"
            className={classes.pagination}
            onChange={paginate}
          />
        )}
      </section>

      <Footer />
    </>
  );
}

export default Administrative;
