import axios from 'axios'

const API_GET_USER_URL = "http://localhost:8080/getUsers";
export const userList = () => axios.get(API_GET_USER_URL);