import axios from "axios";

const api = axios.create({
    baseURL: "https://127.0.0.1:3000",
    headers:{
        'Content-Type': 'application/json'
    }
})

export default api