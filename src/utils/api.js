import axios from 'axios';

// Create an Axios instance
const API = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
  timeout: 10000, // Optional timeout for requests (10 seconds)
});

// Optional: Add interceptors for adding Authorization header
API.interceptors.request.use(
  (config) => {
    // Add the Authorization header if token exists
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
