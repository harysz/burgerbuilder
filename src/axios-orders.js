import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://burgerapi-18a48-default-rtdb.firebaseio.com/'
});

export default instance;