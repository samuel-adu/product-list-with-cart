import cartImage from '/src/assets/images/illustration-empty-cart.svg';

function CartEmpty() {
  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__heading">your cart (0)</h2>
      </div>

      <div className="cart__empty">
        <img src={cartImage} alt="cupcake" />
        <p className="cart__empty-text text-preset-4--bold">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export default CartEmpty;
