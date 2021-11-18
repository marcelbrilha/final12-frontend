import { Edit, Delete, AddCircle, Search } from "@material-ui/icons";
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
} from "@material-ui/core";

import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Style from "../styles/Administrative";

function Administrative() {
  const classes = Style();

  return (
    <>
      <Header isRegister={false} logoff={true} />

      <section className={classes.content}>
        <Heading title="SUBSCRIÇÕES" />

        <nav className={classes.containerNavigation}>
          <Box className={classes.containerSearch}>
            <TextField label="Pesquisar Fundo" variant="standard" />

            <Tooltip title="Pesquisar Fundo">
              <Search className={classes.iconSearch} />
            </Tooltip>
          </Box>

          <Box className={classes.containerAdd}>
            <Tooltip title="Criar">
              <AddCircle className={classes.addButton} />
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

            <TableBody>
              <TableRow>
                <TableCell>
                  <Tooltip title="Editar">
                    <IconButton size="small">
                      <Edit />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Remover">
                    <IconButton size="small" className={classes.addRemove}>
                      <Delete color="secondary" />
                    </IconButton>
                  </Tooltip>
                </TableCell>

                <TableCell>BCFF11</TableCell>
                <TableCell>10ª</TableCell>
                <TableCell>Andamento</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>

      <Footer />
    </>
  );
}

export default Administrative;
