import axios from 'axios';

let axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	headers: {}
});


export default {
	getUsers: axiosInstance.get('/users')
};
