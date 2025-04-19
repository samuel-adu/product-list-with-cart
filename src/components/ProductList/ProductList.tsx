import ProductCard from './ProductCard';
import './ProductList.css';

function getImageUrl(path: string) {
  return new URL(`/src/assets/images/${path}`, import.meta.url).href;
}

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
        {products.map((product) => (
          <li>
            <ProductCard
              key={product.name}
              desktopImage={getImageUrl(product.image.desktop)}
              tabletImage={getImageUrl(product.image.tablet)}
              mobileImage={getImageUrl(product.image.mobile)}
              name={product.name}
              price={product.price}
              category={product.category}
              isInCart={true}
              quantity={2}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
