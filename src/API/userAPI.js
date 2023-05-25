import {$authhost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (username, password) => {
  const {data} = await $host.post("/account/register/", {username, password, role: "ADMIN"});
  return jwtDecode(data.access);
};

export const login = async (username, password) => {
  const {data} = await $host.post("/account/token/", {username, password});
  return jwtDecode(data.access);
};

export const check = async () => {
  const {data} = await $host.post("/account/register/");
  return jwtDecode(data.access);
};
