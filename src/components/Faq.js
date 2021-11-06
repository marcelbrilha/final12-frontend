import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import Heading from "./Heading";
import Style from "../styles/Faq";

function Faq() {
  const classes = Style();

  return (
    <section className={classes.content}>
      <Heading title="Dúvidas Frequentes" />

      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.title}>
            O que são ofertas 400 e 476?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ofertas 400 são ofertas destinadas a investidores em geral e ofertas
            476 são para investidores instiucionais.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.title}>O que é data base?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A Data-Base, ou Data COM, indica a data de corte para participar de
            uma emissão. Se você encerrar tal dia com cotas do fundo, você
            receberá direitos de preferência na proporção definida pela emissão.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.title}>
            O que é data de conversão?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A Data de Conversão é quando as cotas novas que foram emitidas na
            emissão são transformadas em cotas com final 11, passando a ser
            negociadas com todas as outras.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.title}>
            O que é data de liquidação?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A data de liquidação é o dia em que o dinheiro será debitado da sua
            conta para pagar pelas subscrições.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default Faq;
