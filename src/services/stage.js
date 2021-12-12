import api from "./api";

function search() {
  return api.get("/final12-subscription/api/v1/etapas");
}

export default search;
