import { makeStyles } from "@material-ui/styles";

import BackgroundImage from "../images/bg-header.jpg";

export default makeStyles({
  header: {
    height: "70px",
    backgroundColor: "#28282a",
    fontFamily: "Roboto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },
  btnPerson: {
    position: "absolute",
    right: "10px",
    color: "#fff",
    cursor: "pointer",
  },
  logo: {
    color: "#FFF",
  },
  detail: {
    color: "#ff3366",
  },
  register: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "80vh",
    minHeight: "500px",
    maxHeight: "1300px",
  },
  contentRegister: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.75)",
  },
  heading: {
    fontSize: "48px",
    color: "#FFF",

    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:700px)"]: {
      fontSize: "25px",
      textAlign: "center",
    },
  },
  message: {
    color: "#FFF",
    fontSize: "18px",
    margin: "20px 0 35px 0",

    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:700px)"]: {
      fontSize: "15px",
      textAlign: "center",
    },
  },
  btnRegister: {
    width: "200px",
    height: "80px",
    backgroundColor: "#ff3366 !important",
  },
});
