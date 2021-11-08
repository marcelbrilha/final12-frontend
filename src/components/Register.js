import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  TextField,
  Button,
  DialogActions,
  OutlinedInput,
} from "@material-ui/core";

import Style from "../styles/Register";

function Register({ open, handleOpenClose }) {
  const classes = Style();
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  };

  const [selectedFunds, setSelectedFunds] = useState([]);
  const [funds] = useState(["BCFF11", "ALZR11", "KNRI11", "HGLG11"]);

  function handleChange(event) {
    const value = event.target.value;
    setSelectedFunds(typeof value === "string" ? value.split(",") : value);
  }

  return (
    <Dialog open={open}>
      <DialogTitle className={classes.title}>NOTIFICAR INVESTIDOR</DialogTitle>

      <DialogContent>
        <DialogContentText className={classes.message}>
          Preencha os fundos imobiliários que você deseja receber a notificação
        </DialogContentText>

        <FormControl className={classes.textField}>
          <InputLabel>Fundos</InputLabel>
          <Select
            multiple
            value={selectedFunds}
            onChange={handleChange}
            input={<OutlinedInput label="Fundos" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {funds.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={selectedFunds.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField label="E-mail" type="email" fullWidth />
      </DialogContent>

      <DialogActions>
        <Button
          className={classes.btnCancel}
          onClick={() => handleOpenClose(false)}
        >
          Cancelar
        </Button>

        <Button color="secondary" variant="contained">
          Inscrever
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Register;
