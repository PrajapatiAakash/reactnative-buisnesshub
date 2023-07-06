import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6050-2401-4900-1c02-39e0-e58d-f071-a6c7-16ad.ngrok-free.app/laravel-businesshub-api/public',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

api.interceptors.request.use((config) => {
    console.log('Request URL:', config.url);
    return config;
});

export default api;