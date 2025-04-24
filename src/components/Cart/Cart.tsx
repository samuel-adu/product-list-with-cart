import { Fragment } from 'react';
import CartItem from './CartItem';
import TreeIcon from '/src/assets/images/icon-carbon-neutral.svg';
import CartEmpty from './CartEmpty';

import './Cart.css';
import { useCart } from '../../contexts/CartContext';

function Cart({ showModal }: { showModal: () => void }) {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <CartEmpty />;
  }

  const orderCount = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const orderTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__heading">your cart ({orderCount})</h2>
      </div>

      <div className="cart__body">
        <ul className="cart-list">
          {cart.map((item, index) => (
            <Fragment key={item.name}>
              <CartItem
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
              {index < cart.length - 1 && (
                <div className="separator separator--sm"></div>
              )}
            </Fragment>
          ))}
        </ul>

        <div className="separator separator--lg"></div>

        <div className="order-total">
          <p className="text-preset-4">Order Total</p>
          <p className="text-preset-2">${orderTotal.toFixed(2)}</p>
        </div>

        <div className="delivery-info">
          <img src={TreeIcon} alt="" />
          <p className="text-preset-4">
            This is a
            <span className="text-preset-4--bold"> carbon-neutral </span>
            delivery
          </p>
        </div>

        <button className="btn btn--primary" onClick={showModal}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
