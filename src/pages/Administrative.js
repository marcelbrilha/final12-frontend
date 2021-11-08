import { Edit, Delete, AddCircle } from "@material-ui/icons";
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
} from "@material-ui/core";

import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Style from "../styles/Administrative";

function Administrative() {
  const classes = Style();

  return (
    <>
      <Header isRegister={false} />

      <section className={classes.content}>
        <Heading title="SUBSCRIÇÕES" />

        <Box className={classes.containerAdd}>
          <Tooltip title="Criar">
            <AddCircle className={classes.addButton} />
          </Tooltip>
        </Box>

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
