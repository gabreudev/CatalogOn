import React from 'react';
import {CartItem} from './../../interface/carrinho'

interface ProductProps {
  id: number;
  image: string;
  price: number;
  title: string;
  description: string;
  onClick: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ id, image, price, title, description, onClick }) => {
  const addToCart = (product: Omit<ProductProps, 'onClick'>) => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img 
          className="card-img-top" 
          src={image} 
          alt={title} 
          style={{ height: '200px', width: '100%', objectFit: 'contain' }} 
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            <span>R$ {price.toFixed(2)}</span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" style={{ marginRight: '10px' }} onClick={() => addToCart({ id, image, price, title, description })}>Add to Cart</button>
            <button className="btn btn-primary mt-auto" onClick={() => onClick(id)}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
