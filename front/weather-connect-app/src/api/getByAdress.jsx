import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.opencagedata.com/geocode/v1/json?q=',
});

export default api;