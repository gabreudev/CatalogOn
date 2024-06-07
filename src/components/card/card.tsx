interface ProductProps {
    image: string,
    price: number,
    title: string,
    description: string
}

export function Product({price, title, description, image}: ProductProps){
    return (
        <div className="card">
            <img />
            <h1></h1>
            <h2></h2>
            <h3></h3>
        </div>
    )
}