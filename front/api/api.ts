import axios from "axios";


export const api = axios.create({
  baseURL: "http://192.168.122.98:3001/graphql",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});