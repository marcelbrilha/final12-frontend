import { useState } from "react";
import { Button, Tooltip, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

import Register from "./Register";
import Style from "../styles/Header";

function Header({ isRegister = true, logoff = false }) {
  const classes = Style();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleOpenCloseRegister(openClose) {
    setOpen(openClose);
  }

  return (
    <>
      <Register open={open} handleOpenClose={handleOpenCloseRegister} />

      <header className={classes.header}>
        <h1 className={classes.logo}>
          FINAL<span className={classes.detail}>12</span>
        </h1>

        {logoff && (
          <>
            <Tooltip title="Administrador">
              <AccountCircle
                className={classes.btnPerson}
                onClick={handleMenu}
              />
            </Tooltip>

            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Sair</MenuItem>
            </Menu>
          </>
        )}
      </header>

      {isRegister && (
        <section className={classes.register}>
          <div className={classes.contentRegister}>
            <h2 className={classes.heading}>TUDO SOBRE SUBSCRIÇÕES</h2>

            <p className={classes.message}>
              Selecione os fundos que você deseja ser notificado e fique
              tranquilo!
            </p>

            <Button
              variant="contained"
              color="secondary"
              className={classes.btnRegister}
              onClick={() => handleOpenCloseRegister(true)}
            >
              CADASTRAR
            </Button>
          </div>
        </section>
      )}
    </>
  );
}

export default Header;
