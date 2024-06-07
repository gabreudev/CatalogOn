import { AxiosError } from "axios";


export const errorInterceptors = (error:AxiosError) =>{

    if (error.response?.status === 404) {
        return Promise.reject(new Error('Não encontrado'))
    }

    if(error.message === 'Network Error') {
        return Promise.reject(new Error('Erro de conexão'))
    }
    
    return Promise.reject(error)
};
