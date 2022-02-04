import axios from "axios";

const api = axios.create({
    baseURL: "https://web1adonis.herokuapp.com/",
    headers:{
        'Content-Type': 'application/json'
    }
})

export default api