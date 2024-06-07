import { Product } from "../../components/card/card"
import { Api } from "../axios-config"

interface Product {
    id: number,
    nome: string,
    descricao: string,
    price: number,
    img: string,

}

const getAll = async():Promise<Product | Error> => {
    try {
        const {data} = await Api.get('/produtos?_page=1&_limite=30')
        
        return data
    } catch (error) {
        console.log(error)
        return new Error((error as {message:string}).message || 'erro ao listar produtos')
    }
}
const deleteById = async():Promise<any> => {
    try {
        
    } catch (error) {
        
    }
}
const update = async():Promise<any> => {
    try {
        
    } catch (error) {
        
    }
}
const getById = async():Promise<any> => {
    try {
        
    } catch (error) {
        
    }
}
const create = async():Promise<any> => {
    try {
        
    } catch (error) {
        
    }
}


export const ProductService = {
    getAll,
    deleteById,
    update,
    getById,
    create
}