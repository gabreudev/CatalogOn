
interface ProductProps {
    image: string;
    price: number;
    title: string;
    description: string;
}

export function Product({ price, title, description, image }: ProductProps) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">R$ {price}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
