import { Product } from "../../components/card/card";
import { Api } from "../axios-config";

interface Product {
    id: number,
    nome: string,
    descricao: string,
    price: number,
    img: string,
}

const getAll = async (): Promise<Product[] | Error> => {
    try {
        const { data } = await Api.get('/produtos?_page=1&_limite=30');
        return data;
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar produtos');
    }
};

const deleteById = async (id: number): Promise<Product | Error> => {
    try {
        const { data } = await Api.delete(`/produtos/${id}`);
        return data;
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao deletar produto');
    }
};

const update = async (id: number, dados: Product): Promise<void | Error> => {
    try {
        await Api.put(`/produtos/${id}`, dados);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao atualizar produto');
    }
};

const getById = async (id: number): Promise<Product | Error> => {
    try {
        const { data } = await Api.get(`/produtos/${id}`);
        return data;
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao retornar produto');
    }
};

const create = async (dados: Omit<Product, 'id'>): Promise<number | Error> => {
    try {
        const { data } = await Api.post('/produtos', dados);
        return data.id;
    } catch (error) {
        console.error(error);
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
