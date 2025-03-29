import './App.css';
import Product from './components/Product';
import productData from './data.json';
import cartImage from './assets/images/illustration-empty-cart.svg';

function App() {
  function getImageUrl(path: string) {
    return new URL(`./assets/images/${path}`, import.meta.url).href;
  }

  const productList = productData.map((product) => (
    <Product
      key={product.name}
      desktopImage={getImageUrl(product.image.desktop)}
      tabletImage={getImageUrl(product.image.tablet)}
      mobileImage={getImageUrl(product.image.mobile)}
      name={product.name}
      price={product.price}
      category={product.category}
    />
  ));
  return (
    <main className="container">
      <div className="grid-container">
        <section>
          <h1 className="main-heading text-preset-1">Desserts</h1>

          <div className="product__list">{productList}</div>
        </section>

        <section className="cart">
          <h2 className="section-heading text-preset-2">your cart (0)</h2>

          <div className="cart__empty">
            <img src={cartImage} alt="cupcake" />
            <p className="cart__empty-text text-preset-4--bold">
              Your added items will appear here
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
