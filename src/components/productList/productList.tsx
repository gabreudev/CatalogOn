import React from 'react';
import Product from '../card/card';

interface ProductListProps {
  products: {
    id: number;
    image: string;
    price: number;
    title: string;
    description: string;
  }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;