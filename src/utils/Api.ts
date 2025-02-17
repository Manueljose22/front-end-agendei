import axios from 'axios';

const token = localStorage.getItem("token");


export const Api = axios.create({
    baseURL: "http://localhost:3000",
    headers:{
        Authorization: `Bearer ${token}`
    }
})

