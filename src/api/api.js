import axios from "axios";
// import path from "path";
// import dotenv from "dotenv";

// dotenv.config({ path: path.join(__dirname, "../../.env") });

export const baseURL = "http://9b22e7e3325a.ngrok.io";

export default axios.create({
  baseURL,
});
