import cartIcon from '/src/assets/images/icon-add-to-cart.svg';
import { IoRemoveSharp } from 'react-icons/io5';
import { IoAddSharp } from 'react-icons/io5';
import { useCart } from '../../contexts/CartContext';

type Product = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

interface ProductCardProps {
  product: Product;
}

function Card({ product }: ProductCardProps) {
  function getImageUrl(path: string) {
    return new URL(`/src/assets/images/${path}`, import.meta.url).href;
  }

  const { cart, dispatch } = useCart();

  const isInCart = cart.some((item) => item.name === product.name);

  const productInCart = cart.find((item) => item.name === product.name);
  const quantity = productInCart?.quantity;

  return (
    <li className="product__card">
      <div className="product__preview">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={getImageUrl(product.image.desktop)}
          />
          <source
            media="(min-width: 640px)"
            srcSet={getImageUrl(product.image.tablet)}
          />
          <img
            src={getImageUrl(product.image.mobile)}
            alt={`a plate ${product.name.toLocaleLowerCase()}`}
            className={`product__image ${isInCart ? 'added' : ''}`}
          />
        </picture>

        <div className="product-card__control">
          {isInCart ? (
            <div className="added-item-quantity">
              <button
                className="btn btn-decrement btn-quantity"
                onClick={() =>
                  dispatch({ type: 'DECREMENT', name: product.name })
                }
                disabled={quantity ? quantity < 2 : false}
              >
                <IoRemoveSharp />
              </button>

              <p className="cart-item-quantity">{quantity}</p>

              <button
                className="btn btn-increment btn-quantity"
                onClick={() =>
                  dispatch({ type: 'INCREMENT', name: product.name })
                }
              >
                <IoAddSharp />
              </button>
            </div>
          ) : (
            <button
              className="btn btn-add-to-cart"
              onClick={() => dispatch({ type: 'ADD_TO_CART', item: product })}
            >
              <img src={cartIcon} alt="" className="btn__icon" />
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <div className="product__info">
        <p className="product__category">{product.category}</p>
        <p className="product__name">{product.name}</p>
        <p className="product__price">${product.price.toFixed(2)}</p>
      </div>
    </li>
  );
}

export default Card;
