import React, { useState, useEffect } from 'react';
import { CartItem } from "./../../interface/carrinho";

export const Carrinho: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <div>O carrinho está vazio.</div>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} alt={item.title} className="img-fluid" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">R$ {item.price.toFixed(2)}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remover</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Carrinho;
