import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

axios.interceptors.request.use(
    config => {
        config.headers['x-apikey'] = import.meta.env.VITE_API_KEY;
        config.headers['cache-control'] = 'no-cache';
        config.headers['content-type'] = 'application/json';
        
        return config;
    },
    error => {
        Promise.reject(error)
    });

export default axios;