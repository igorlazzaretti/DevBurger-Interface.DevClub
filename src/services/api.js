// Serviço Axios de Conexão com o Backend
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001'
});

api.interceptors.request.use((config) => {
    // Pega o token do localStorage e adiciona no header Authorization
    // para que o backend possa identificar o usuário logado
    const token = localStorage.getItem('devburguer:token');

    config.headers.authorization = `Bearer ${token}`;
    return config;
})
