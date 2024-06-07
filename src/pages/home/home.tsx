import { useEffect, useState } from 'react';
import { ProductService } from '../../services/product/productService';
import { Product } from '../../components/card/card';

interface Product {
    id: number;
    nome: string;
    descricao: string;
    price: number;
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
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Produtos</h1>
            <div className="product-list">
                {products.map(product => (
                    <Product
                        key={product.id}
                        image={product.img}
                        price={product.price}
                        title={product.nome}
                        description={product.descricao}
                    />
                ))}
            </div>
        </div>
    );
};
