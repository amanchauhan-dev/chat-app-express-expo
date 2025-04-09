import axios from "axios";
import { server_url } from "@/constants/server"

const api = axios.create({
    baseURL: server_url + '/api',
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
