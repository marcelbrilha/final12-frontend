import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  container: {
    padding: "0 !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  detail: {
    background: "black",
    color: "#fff !important",
    fontSize: "15px !important",
  },
  containerSearch: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: "10px",
  },
  iconSearch: {
    marginLeft: "10px",
    cursor: "pointer",
  },
  pagination: {
    marginTop: "25px",
  },
});
