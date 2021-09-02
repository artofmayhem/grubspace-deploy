import axios from 'axios';

const api = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://grubspace-server.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    });
}

export default api;

