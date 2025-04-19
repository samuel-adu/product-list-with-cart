import cartIcon from '/src/assets/images/icon-add-to-cart.svg';
import { IoRemoveSharp } from 'react-icons/io5';
import { IoAddSharp } from 'react-icons/io5';

function ProductCard({
  desktopImage,
  tabletImage,
  mobileImage,
  name,
  category,
  price,
  isInCart,
  quantity,
}: {
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
  name: string;
  category: string;
  price: number;
  isInCart: boolean;
  quantity: number;
}) {
  return (
    <div className="product__card">
      <div className="product__preview">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopImage} />
          <source media="(min-width: 640px)" srcSet={tabletImage} />
          <img
            src={mobileImage}
            alt="product image"
            className={`product__image ${isInCart ? 'added' : ''}`}
          />
        </picture>

        <div className="product-card__control">
          {isInCart ? (
            <div className="added-item-quantity">
              <button className="btn btn-increment btn-quantity">
                <IoRemoveSharp />
              </button>

              <p className="cart-item-quantity">{quantity}</p>

              <button className="btn btn-decrement btn-quantity">
                <IoAddSharp />
              </button>
            </div>
          ) : (
            <button className="btn btn-add-to-cart">
              <img src={cartIcon} alt="" className="btn__icon" />
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <div className="product__info">
        <p className="product__category">{category}</p>
        <p className="product__name">{name}</p>
        <p className="product__price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;
