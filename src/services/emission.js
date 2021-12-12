import api from "./api";

export function search(params) {
  return api.get("/final12-subscription/api/v1/emissoes", { params });
}
