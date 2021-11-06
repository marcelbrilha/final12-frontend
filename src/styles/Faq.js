import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  content: {
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:700px)"]: {
      padding: "0",
    },
  },
  accordion: {
    width: "100%",
  },
  title: {
    color: "#ff3366",
    fontWeight: "bold !important",
  },
});
