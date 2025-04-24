import { IoCloseSharp } from 'react-icons/io5';
import { useCart } from '../../contexts/CartContext';

interface ItemProps {
  name: string;
  price: number;
  quantity: number;
}

function CartItem({ name, price, quantity }: ItemProps) {
  const amount = price * quantity;

  const { dispatch } = useCart();

  return (
    <li className="cart-item">
      <div className="cart-item__info">
        <p className="cart-item__name text-preset-4--bold">{name}</p>
        <div className="cart-item__summary">
          <p className="cart-item__quantity text-preset-4--bold">{quantity}x</p>
          <p className="cart-item__price text-preset-4">
            @ ${price.toFixed(2)}
          </p>
          <p className="cart-item__amount text-preset-4--bold">
            ${amount.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className="btn btn-remove-item cart-item__btn"
        onClick={() => dispatch({ type: 'REMOVE_ITEM', name })}
      >
        <IoCloseSharp />
      </button>
    </li>
  );
}

export default CartItem;
