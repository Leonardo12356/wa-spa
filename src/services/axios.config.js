import axios from 'axios';
import {obterTokenNaStorage} from "@/utils/localStorage.js";

const http = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.request.use(
	(config) => {
		const token = obterTokenNaStorage();
		config.headers.Authorization = "Bearer " + token;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default http;
