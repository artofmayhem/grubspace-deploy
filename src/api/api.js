import axios from 'axios';

const API = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://secret-family-recipes-101.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    });
}

export default API;

