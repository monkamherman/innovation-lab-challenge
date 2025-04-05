import axios from "axios"

const Base_url = "http://localhost:3000"

const axiosinstance = axios.create({
    baseURL: Base_url
})

export default axiosinstance