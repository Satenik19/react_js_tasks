import axios from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT;

const axiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token') ? `Bearer ${localStorage.getItem('access_token')}` : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            window.location.href = '/login';
            localStorage.removeItem('access_token');
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;
