import React from 'react';

interface ProductProps {
  id: number;
  image: string;
  price: number;
  title: string;
  description: string;
  onClick: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ id, image, price, title, onClick }) => {
  const addToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation(); // Prevent the parent onClick from firing
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productExists = currentCart.some((product: any) => product.id === id);
    
    if (!productExists) {
      const updatedCart = [...currentCart, { id, image, price, title }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert('Produto adicionado ao carrinho');
    } else {
      alert('Produto já está no carrinho');
    }
  };

  return (
    <div className="col mb-5" onClick={() => onClick(id)} style={{ cursor: 'pointer' }}>
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
            <button 
              className="btn btn-outline-dark mt-auto" 
              style={{ marginRight: '10px' }} 
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <button className="btn btn-primary mt-auto">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
