import axios from 'axios';

export default axios.create({
	baseURL: 'http://4f33dac7.ngrok.io/api', 
	responseType: 'json'
});