import axios from "axios";
import { responseInterceptor } from "./interceptors/ResponseInterceptors";
import { errorInterceptors } from "./interceptors/ErrorInterceptor";

const Api = axios.create({
    baseURL: 'localhost:8080'
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptors(error)
);

export {Api}