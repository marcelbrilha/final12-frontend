import api from "./api";
import qs from "querystring";

export function login({ email: username, senha: password }) {
  const client = process.env.REACT_APP_CLIENT;
  const secret = process.env.REACT_APP_SECRET;
  const basic = btoa(`${client}:${secret}`);
  const data = qs.stringify({
    username,
    password,
    grant_type: process.env.REACT_APP_GRANT_TYPE,
  });

  return api({
    url: "/final12-auth/oauth/token",
    method: "POST",
    data,
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

export function isAuthorized() {
  const token = sessionStorage.getItem("token");
  return !!token;
}
