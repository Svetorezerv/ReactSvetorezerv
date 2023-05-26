import { $host } from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, username, password, password2) => {
  const response = await fetch('https://tetreco.com/api/account/register/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": email,
      "first_name": " ",
      "last_name": "",
      "password": password,
      "password2": password2,
      "username": username,
      "profile": {
        "photo": null,
        "date_of_birth": null
      }
    }),
  });
  return response;
};

export const login = async (username, password) => {
  const { data } = await $host.post("/account/token/", { username, password });
  localStorage.setItem('token', data.access)
  console.log(jwtDecode(data.access));
  return jwtDecode(data.access);
};
