import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3500/api/',
  timeout: 1000,
});

axiosInstance.interceptors.request.use(req => {
  console.info(`[REQ] on ${req.url}`);
  return req;
}, error => {
  console.error('[REQ][ERR]', error);
});

axiosInstance.interceptors.response.use(res => {
  console.info(`[RES] on ${res.config.url} with ${res.status} ${res.statusText}`);
  return res;
}, error => {
  console.error('[RES][ERR]', error);
});

export default axiosInstance;
