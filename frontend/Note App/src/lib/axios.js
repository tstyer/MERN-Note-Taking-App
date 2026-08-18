import axios from 'axios';

const api = axios.create({
    url : "http://localhose:5001/api"
});


export default api;

// This becomes a shortcut to the url, instead of having to type it out in code. 

