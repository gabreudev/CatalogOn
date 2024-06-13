import { Api } from '../axios-config';
import { Product } from "./../../interface/Produto";



const getAll = async (): Promise<Product[] | Error> => {
    try {
        const { data } = await Api.get('/product');
        return data;
    } catch (error) {
        console.error('Erro ao listar produtos:', error);
        return new Error((error as { message: string }).message || 'Erro ao listar produtos');
    }
};

const deleteById = async (id: number): Promise<Product | Error> => {
    try {
        const { data } = await Api.delete(`/product/${id}`);
        return data;
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        return new Error((error as { message: string }).message || 'Erro ao deletar produto');
    }
};

const update = async (id: number, dados: Product): Promise<void | Error> => {
    try {
        await Api.put(`/product/${id}`, dados);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        return new Error((error as { message: string }).message || 'Erro ao atualizar produto');
    }
};

const getById = async (id: number): Promise<Product | Error> => {
    try {
        const { data } = await Api.get(`/product/${id}`);
        return data;
    } catch (error) {
        console.error('Erro ao retornar produto:', error);
        return new Error((error as { message: string }).message || 'Erro ao retornar produto');
    }
};

const create = async (dados: Omit<Product, 'id'>): Promise<number | Error> => {
    try {
        const { data } = await Api.post('/product', dados);
        return data.id;
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        return new Error((error as { message: string }).message || 'Erro ao criar produto');
    }
};

export const ProductService = {
    getAll,
    deleteById,
    update,
    getById,
    create
};
