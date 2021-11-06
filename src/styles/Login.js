import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  content: {
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    backgroundColor: "#ff3366 !important",
    height: "60px",
  },
});
