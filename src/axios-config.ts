import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.bearxsh.com/'
});

export default instance;