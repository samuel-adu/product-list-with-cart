import './product.css';
import cartIcon from '../assets/images/icon-add-to-cart.svg';

interface productProps {
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
  name: string;
  category: string;
  price: number;
}

export default function Product({
  desktopImage,
  tabletImage,
  mobileImage,
  name,
  category,
  price,
}: productProps) {
  return (
    <div className="product__card">
      <div className="product__preview">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={desktopImage}
            className="product__image"
          />
          <source
            media="(min-width: 640px)"
            srcSet={tabletImage}
            className="product__image"
          />
          <img
            src={mobileImage}
            alt="product image"
            className="product__image"
          />
        </picture>
        <button className="btn btn__add-to-cart">
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>
      </div>

      <div className="product__info">
        <p className="product__category">{category}</p>
        <p className="product__name">{name}</p>
        <p className="product__price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
