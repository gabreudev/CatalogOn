import React from 'react';

interface ProductProps {
  image: string;
  price: number;
  title: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({ image, price, title, description }) => {
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
            <p className="card-text">{description}</p>
            <span>R$ {price.toFixed(2)}</span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" style={{ marginRight: '10px' }}>Add to Cart</button>
            <button className="btn btn-primary mt-auto">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
