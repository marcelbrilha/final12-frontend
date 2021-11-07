import { useState } from "react";
import { KeyboardArrowUp, KeyboardArrowDown, Search } from "@material-ui/icons";
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
} from "@material-ui/core";

import Style from "../styles/Emission";

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
        <TableCell>{row.cotacao}</TableCell>
        <TableCell>{row.dataBase}</TableCell>
        <TableCell>{row.periodoNegociacao}</TableCell>
        <TableCell>{row.periodoPreferencia}</TableCell>
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
                    Período de Público
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
                  <TableCell>{row.periodoSobras}</TableCell>
                  <TableCell>{row.periodoPublico}</TableCell>
                  <TableCell>{row.precoTaxa}</TableCell>
                  <TableCell>{row.proporcaoPreferencia}</TableCell>
                  <TableCell>{row.proporcaoSobras}</TableCell>
                  <TableCell>{row.coordernadorLider}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function Emission() {
  const classes = Style();
  const [rows] = useState([
    {
      fundo: "PBBI11",
      preco: "R$ 95,50",
      cotacao: "R$ 87,84",
      dataBase: "29/07/2021",
      periodoNegociacao: "21/05 até 31/05",
      periodoPreferencia: "21/05 até 02/06",
      etapa: "Andamento",
      periodoSobras: "21/05 até 02/06",
      periodoPublico: "21/07 até 02/09",
      precoTaxa: "Cota: R$ 95,38 + Taxa: R$ 0,12",
      proporcaoPreferencia: "0,36089032921 (36,09%)",
      proporcaoSobras: "25,7106403772 (2571,06%)",
      coordernadorLider: "Itaú BBA",
    },
  ]);

  return (
    <>
      <Box className={classes.containerSearch}>
        <TextField label="Pesquisar Fundo" variant="standard" />

        <Tooltip title="Pesquisar Fundo">
          <Search className={classes.iconSearch} />
        </Tooltip>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Fundo</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Cotação</TableCell>
              <TableCell>Data Base</TableCell>
              <TableCell>Período de Negociação</TableCell>
              <TableCell>Período de Preferência</TableCell>
              <TableCell>Etapa</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <Row key={row.fundo} row={row} classes={classes} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Emission;
