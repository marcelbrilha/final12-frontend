import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  content: {
    padding: "25px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "50px",

    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:700px)"]: {
      flexWrap: "wrap",
    },
  },
  image: {
    width: "55px",
    height: "55px",
    display: "block",
    margin: "20px auto",
  },
  heading: {
    textAlign: "center",
    fontSize: "20px",
    color: "#333",
  },
  message: {
    color: "#333",
    fontSize: "14px",
    marginTop: "15px",
  },
});
