import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Cambia esto si tu backend está en otra URL
    withCredentials: true, // Si usas cookies para autenticación
});

export default API;
