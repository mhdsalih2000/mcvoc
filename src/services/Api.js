// src/axiosConfig.js

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.polygon.io/v2/aggs/ticker',
    headers: {
        Authorization: 'Bearer X9ipD2XvDaogSCH22Iu6ig0nPZfQyTbm'
    }
});

export default axiosInstance;
