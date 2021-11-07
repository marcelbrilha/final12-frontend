import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  heading: {
    color: "#333",
    fontSize: "42px",
    margin: "10px 0 10px 0",

    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:500px)"]: {
      fontSize: "20px",
    },
  },
  detail: {
    width: "60px",
    height: "5px",
    background: "#ff3366",
    marginBottom: "30px",
  },
});
