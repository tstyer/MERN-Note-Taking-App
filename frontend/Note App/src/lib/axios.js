import axios from 'axios';

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
    baseURL: BASE_URL,
});


export default api;

// This becomes a shortcut to the url, instead of having to type it out in code. 

