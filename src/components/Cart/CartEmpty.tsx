import cartImage from '../assets/images/illustration-empty-cart.svg';

function CartEmpty() {
  return (
    <div>
      <div className="cart__empty">
        <h2 className="section-heading text-preset-2">your cart (0)</h2>

        <img src={cartImage} alt="cupcake" />
        <p className="cart__empty-text text-preset-4--bold">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export default CartEmpty;
