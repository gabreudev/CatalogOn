
import './App.css'
import { Product } from './components/products';
import { productData } from './interface/ProductData';

function App() {
  const data: productData[] = [];

  return (
    <>
      <div className="container">
          <h1>Catáogo</h1>
      </div>
      <div className="card-grid">
            {data.map(productData =>
            <Product
              price = {productData.price} 
              title={productData.title} 
              description={productData.description} 
              image={productData.image}
            />
            )}
      </div>
    </>
  )
}

export default App
