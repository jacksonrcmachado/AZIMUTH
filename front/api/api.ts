import axios from "axios";


export const api = axios.create({
  baseURL: "http://26.115.98.87:3001/graphql",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});