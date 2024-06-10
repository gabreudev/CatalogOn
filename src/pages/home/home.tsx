// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import { ProductService } from '../../services/product/productService';
import ProductList from '../../components/productList/productList';
import Navbar from '../../components/navbar/navbar';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  img: string;
}

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await ProductService.getAll();

      if (result instanceof Error) {
        setError(result.message);
      } else {
        setProducts(result);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div className="alert alert-danger" role="alert">{error}</div>;
  }

  const formattedProducts = products.map(product => ({
    id: product.id,
    image: product.img,
    price: product.preco,
    title: product.nome,
    description: product.descricao,
  }));

  return (
    <>
      <Navbar />
      <Header />
      <div className="container my-4">
        <h1 className="mb-4">Produtos</h1>
        <ProductList products={formattedProducts} />
      </div>
      <Footer />
    </>
  );
};
