import axios from "axios";


export const api = axios.create({
  baseURL: "http://192.168.15.3:3001/graphql",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});