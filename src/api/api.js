import axios from "axios";

export const serverURL = "http://korjarvis.hopto.org:8086";
export const baseURL = "http://localhost:3000";

export default axios.create({
  baseURL,
});
