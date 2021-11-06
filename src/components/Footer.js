import { useState } from "react";
import Style from "../styles/Footer";

function Footer() {
  const classes = Style();
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className={classes.footer}>
      <small>Versão: 1.0.0 - {year}</small>
    </footer>
  );
}

export default Footer;
