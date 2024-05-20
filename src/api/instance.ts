import axios from "axios";

/* 
  These values should be place to .env file and excluded from git.
  Adding them here for simplicity.
*/
const SOME_I = "tt3896198";
const API_KEY = "8523cbb8";

export const axiosInstance = axios.create({
  baseURL: `https://www.omdbapi.com`,
  timeout: 3000,
  params: {
    i: SOME_I,
    apiKey: API_KEY,
  },
});
