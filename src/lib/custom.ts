import axios from "axios";

const baseUrl = axios.create({
  baseURL: `https://upskilling-egypt.com:3000`,
});
export default baseUrl;
