import { useEffect, useState } from 'react';
import { ProductService } from '../../services/product/productService';
import { Product } from '../../components/card/card';
import "./home.css";

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

    return (
        <div className="container my-4">
            <h1 className="mb-4">Produtos</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {products.map(product => (
                    <div className="col" key={product.id}>
                        <Product
                            image={product.img}
                            preco={product.preco}
                            title={product.nome}
                            description={product.descricao}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
