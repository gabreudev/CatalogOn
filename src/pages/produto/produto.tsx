import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductService } from '../../services/product/productService'; 
import './produto.css'; 

interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  img: string;
}

export const Produto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      ProductService.getById(Number(id)).then((result) => {
        if (!(result instanceof Error)) {
          setProduct(result);
        } else {
          console.error('Error fetching product:', result.message);
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="row g-0">
          <div className="col-md-12">
            <div className="image-container">
              <img 
                src={product.img} 
                alt={product.nome} 
                className="img-fluid rounded-start" 
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="card-body">
              <h1 className="card-title">{product.nome}</h1>
              <p className="card-text">{product.descricao}</p>
              <h2 className="card-text">R$ {product.preco.toFixed(2)}</h2>
              <div className="mt-4">
                <button className="btn btn-outline-dark" style={{ marginRight: '10px' }}>Add to Cart</button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;
