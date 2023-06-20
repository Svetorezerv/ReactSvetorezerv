import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const registration = async (email, username, password, password2) => {
  const response = await fetch('https://tetreco.com/api/account/register/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": email,
      "first_name": "",
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
  const { data } = await $host.post("/account/login/", { username, password });
  console.log(data);
  localStorage.setItem('data', JSON.stringify(data));
  return data;
};

export const logoutAPI = async (username, password) => {
  const { data } = await $host.delete("/account/", { username, password });
  localStorage.removeItem('data');
  return data;
};

