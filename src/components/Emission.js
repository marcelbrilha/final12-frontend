import { useEffect, useState, useRef } from "react";
import { KeyboardArrowUp, KeyboardArrowDown, Search } from "@material-ui/icons";
import * as moment from "moment";
import swal from "sweetalert";
import {
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  IconButton,
  Collapse,
  Box,
  TextField,
  Tooltip,
  Pagination,
  CircularProgress,
} from "@material-ui/core";

import Style from "../styles/Emission";
import { search } from "../services/emission";
import { formatMoney } from "../utils/money";

function Row({ row, classes }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.fundo}</TableCell>
        <TableCell>{row.preco}</TableCell>
        <TableCell>{row.dataBase}</TableCell>
        <TableCell>
          {row.periodoNegociacaoDe} - {row.periodoNegociacaoAte}
        </TableCell>
        <TableCell>
          {row.periodoPreferenciaDe} - {row.periodoPreferenciaAte}
        </TableCell>
        <TableCell>{row.etapa}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className={classes.container} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.detail}>
                    Período de Sobras
                  </TableCell>
                  <TableCell className={classes.detail}>
                    Período Público
                  </TableCell>
                  <TableCell className={classes.detail}>Preço + Taxa</TableCell>
                  <TableCell className={classes.detail}>
                    Proporção de Preferência
                  </TableCell>
                  <TableCell className={classes.detail}>
                    Proporção de Sobras
                  </TableCell>
                  <TableCell className={classes.detail}>
                    Coordenador Líder
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                    {row.periodoSobrasDe} - {row.periodoSobrasAte}
                  </TableCell>
                  <TableCell>
                    {row.periodoPublicoDe} - {row.periodoPublicoAte}
                  </TableCell>
                  <TableCell>
                    {row.preco} + {row.taxa}
                  </TableCell>
                  <TableCell>{row.proporcaoPreferencia}</TableCell>
                  <TableCell>{row.proporcaoSobras}</TableCell>
                  <TableCell>{row.coordenadorLider}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function Emission({ etapa }) {
  const fundRef = useRef();
  const classes = Style();
  const [rows, setRows] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [params, setParams] = useState({ etapa });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function formatDate(date) {
      if (!!date) {
        return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
      }

      return null;
    }

    async function load() {
      try {
        setLoading(true);
        const { data } = await search(params);

        setRows([]);

        if (!!data && data.content.length > 0) {
          const subscriptions = data.content.map((curr) => ({
            ...curr,
            dataBase: formatDate(curr.dataBase),
            periodoNegociacaoAte: formatDate(curr.periodoNegociacaoAte),
            periodoNegociacaoDe: formatDate(curr.periodoNegociacaoDe),
            periodoPreferenciaAte: formatDate(curr.periodoPreferenciaAte),
            periodoPreferenciaDe: formatDate(curr.periodoPreferenciaDe),
            periodoPublicoAte: formatDate(curr.periodoPublicoAte),
            periodoPublicoDe: formatDate(curr.periodoPublicoDe),
            periodoSobrasAte: formatDate(curr.periodoSobrasAte),
            periodoSobrasDe: formatDate(curr.periodoSobrasDe),
            preco: formatMoney(curr.preco),
            taxa: formatMoney(curr.taxa),
          }));

          setRows(subscriptions);
          setTotalPages(data.totalPages);
        }
      } catch (error) {
        console.log(`Ocorreu um erro ao carregar emissões: ${error.message}`);
        swal("Erro", "Ocorreu um erro ao carregar emissões", "error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [params]);

  function searchFund() {
    const value = fundRef.current.value;
    const fundo = String(value).toLocaleUpperCase();
    setParams({ etapa, fundo });
  }

  function paginate(event, page) {
    const currPage = page - 1;
    setParams({ ...params, page: currPage });
  }

  return (
    <section className={classes.container}>
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

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Fundo</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Data Base</TableCell>
              <TableCell>Período de Negociação</TableCell>
              <TableCell>Período de Preferência</TableCell>
              <TableCell>Etapa</TableCell>
            </TableRow>
          </TableHead>

          {!!rows && rows.length > 0 && !loading && (
            <TableBody>
              {rows.map((row) => (
                <Row key={row.fundo} row={row} classes={classes} />
              ))}
            </TableBody>
          )}

          {!loading && (!rows || rows.length === 0) && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={7} align="center">
                  Sem registros
                </TableCell>
              </TableRow>
            </TableBody>
          )}

          {!!loading && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={7} align="center">
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
  );
}

export default Emission;
