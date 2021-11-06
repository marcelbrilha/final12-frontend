import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  content: {
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    color: "#333",
    fontSize: "42px",
    margin: "10px 0 30px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    gap: "30px",

    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:700px)"]: {
      width: "100%",
    },
  },
  button: {
    height: "60px",
  },
});
