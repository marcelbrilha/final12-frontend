import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  content: {
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  containerNavigation: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: "25px",
  },
  containerAdd: {
    marginLeft: "20px",
  },
  addButton: {
    cursor: "pointer",
  },
  addRemove: {
    marginLeft: "25px !important",
  },
  containerSearch: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  iconSearch: {
    marginLeft: "10px",
    cursor: "pointer",
  },
  pagination: {
    marginTop: "25px",
  },
});
