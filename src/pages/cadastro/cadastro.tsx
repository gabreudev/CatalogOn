import React, { useState } from 'react';
import { ProductService } from '../../services/product/productService';
import 'bootstrap/dist/css/bootstrap.min.css';


interface Product {
  nome: string;
  descricao: string;
  preco: number;
  img: string;
}

export const Cadastro: React.FC = () => {
  const [product, setProduct] = useState<Product>({ nome: '', descricao: '', preco: 0, img: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { nome, descricao, preco, img } = product;

    if (!nome || !descricao || !preco || !img) {
      setError('Todos os campos são obrigatórios.');
      setLoading(false);
      return;
    }

    try {
      await ProductService.create({ nome, descricao, preco: Number(preco), img });
      setSuccess(true);
      setProduct({ nome: '', descricao: '', preco: 0, img: '' });
    } catch (error) {
      setError('Erro ao cadastrar produto.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h1 className="card-title">Cadastro de Produto</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                value={product.nome}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">Descrição</label>
              <textarea
                className="form-control"
                id="descricao"
                name="descricao"
                rows={3}
                value={product.descricao}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="preco" className="form-label">Preço</label>
              <input
                type="number"
                className="form-control"
                id="preco"
                name="preco"
                value={product.preco}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="img" className="form-label">URL da Imagem</label>
              <input
                type="text"
                className="form-control"
                id="img"
                name="img"
                value={product.img}
                onChange={handleChange}
              />
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">Produto cadastrado com sucesso!</p>}
            <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
