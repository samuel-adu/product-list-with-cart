import CartList from './CartList';
import TreeIcon from '/src/assets/images/icon-carbon-neutral.svg';
import './Cart.css';

interface Item {
  name: string;
  price: number;
  quantity: number;
}

type addedItemsProps = {
  addedItems: Item[];
};

function Cart({ addedItems }: addedItemsProps) {
  const orderTotal = 46.5;
  const orderCount = 7;

  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="section-heading text-preset-2">
          your cart ({orderCount})
        </h2>
      </div>
      <div className="cart__body">
        <CartList items={addedItems} />

        <div className="seperator"></div>

        <div className="order-total">
          <p className="text-preset-4">Order Total</p>
          <p className="text-preset-2">${orderTotal}</p>
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
