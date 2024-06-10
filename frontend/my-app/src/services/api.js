import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';

axios.interceptors.request.use(config => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    return config;
  });

const api = axios.create({
    baseURL: 'http://3.18.213.92:8080'
})

export default api;