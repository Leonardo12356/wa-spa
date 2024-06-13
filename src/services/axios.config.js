import axios from 'axios';

const http = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use(function (config){
	return config;

}, function (error){
	return Promise.reject(error)
})

export default http;
