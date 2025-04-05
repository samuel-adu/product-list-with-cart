import cartIcon from '/src/assets/images/icon-add-to-cart.svg';

function ProductCard({
  desktopImage,
  tabletImage,
  mobileImage,
  name,
  category,
  price,
}: {
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
  name: string;
  category: string;
  price: number;
}) {
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
        <button className="btn btn-add-to-cart">
          <img src={cartIcon} alt="" className="btn__icon" />
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

export default ProductCard;
