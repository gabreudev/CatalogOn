import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../card/card';

interface ProductListProps {
  products: {
    id: number;
    image: string;
    preco: number;
    title: string;
    description: string;
  }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/produto/${id}`);
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.preco}
              title={product.title}
              description={product.description}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;

