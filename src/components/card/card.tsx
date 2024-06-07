import './card.css'

interface ProductProps {
    image: string;
    price: number;
    title: string;
    description: string;
}

export function Product({ price, title, description, image }: ProductProps) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <h2>R$ {price}</h2>
            <h3>{description}</h3>
        </div>
    );
}
