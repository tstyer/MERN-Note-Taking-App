import axios from 'axios';

const api = axios.create({
    baseURL : "http://localhost:5001/api"
});


export default api;

// This becomes a shortcut to the url, instead of having to type it out in code. 

