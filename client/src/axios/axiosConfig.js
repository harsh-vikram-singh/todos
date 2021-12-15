import configValues from "../config";
const {SERVER_URL: url, SERVER_PORT: port} = configValues;

const axiosConfig = {
  baseURL: `http://${url}:${port}`
};

export default axiosConfig;