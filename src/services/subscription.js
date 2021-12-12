import api from "./api";

export function create(data) {
  return api.post("/final12-subscription/api/v1/subscricoes", data);
}
