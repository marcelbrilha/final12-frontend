import api from "./api";

export function create(data) {
  return api.post("/final12-subscription/api/v1/subscricoes", data);
}

export function update(data, id) {
  return api.put(`/final12-subscription/api/v1/subscricoes/${id}`, data);
}

export function search(params) {
  return api.get("/final12-subscription/api/v1/subscricoes", { params });
}

export function removeSubscription(id) {
  return api.delete(`/final12-subscription/api/v1/subscricoes/${id}`);
}

export function findOneSubscription(id) {
  return api.get(`/final12-subscription/api/v1/subscricoes/${id}`);
}
