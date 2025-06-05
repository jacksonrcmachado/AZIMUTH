import axios from "axios";


export const api = axios.create({
  baseURL: "http://10.68.55.175:3001/graphql",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});