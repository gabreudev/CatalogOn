import { AxiosError } from "axios";


export const errorInterceptors = (error:AxiosError) =>{

    if (error.response?.status === 404) {
        return Promise.reject(new Error('Não encontrado'))
    }
    
    return Promise.reject(error)
};
