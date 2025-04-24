import ProductCard from './ProductCard';
import './ProductList.css';

interface Product {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

type ProductListProps = {
  products: Product[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <div className="productlist">
      <h1 className="productlist__heading">Desserts</h1>

      <ul className="product__list">
        {products.map((product) => {
          return <ProductCard key={product.name} product={product} />;
        })}
      </ul>
    </div>
  );
}

export default ProductList;
