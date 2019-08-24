import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-49874.firebaseio.com/'
})

export default instance;