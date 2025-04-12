import { Fragment, useId } from 'react';
import CartItem from './CartItem';
import TreeIcon from '/src/assets/images/icon-carbon-neutral.svg';
import CartEmpty from './CartEmpty';

import './Cart.css';

interface Item {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  quantity: number;
}

type addedItemsProps = {
  addedItems: Item[];
};

function Cart({ addedItems }: addedItemsProps) {
  const orderTotal = 46.5;
  const orderCount = 7;

  const id = useId();

  if (addedItems.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__heading">your cart ({orderCount})</h2>
      </div>

      <div className="cart__body">
        <ul className="cart-list">
          {addedItems.map((item, index) => (
            <Fragment key={id}>
              <li>
                <CartItem
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              </li>
              {index < addedItems.length - 1 && (
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

        <button className="btn btn--primary">Confirm Order</button>
      </div>
    </div>
  );
}

export default Cart;
