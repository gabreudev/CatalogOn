import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductService } from '../../services/product/productService'; // Ajuste o caminho conforme necessário

interface Product {
  id: number;
  nome: string;
  descricao: string;
  price: number;
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
          console.error(result.message);
        }
        setLoading(false);
      });
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
      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.img} 
            alt={product.nome} 
            className="img-fluid" 
            style={{ height: '400px', width: '100%', objectFit: 'contain' }} 
          />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bolder">{product.nome}</h1>
          <p>{product.descricao}</p>
          <h2>R$ {product.price.toFixed(2)}</h2>
          <div className="mt-4">
            <button className="btn btn-outline-dark" style={{ marginRight: '10px' }}>Add to Cart</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;
