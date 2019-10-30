import axios from 'axios';

const API_PATH = axios.create({
  baseURL: process.env.REACT_APP_API
});

export default API_PATH;