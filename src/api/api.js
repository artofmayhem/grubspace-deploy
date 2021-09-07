import axios from 'axios';

const API = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://grubspace-server.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    });
}

export default API;

