import { IoCloseSharp } from 'react-icons/io5';

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
}

function CartItem({ name, price, quantity }: CartItemProps) {
  const amount = price * quantity;

  return (
    <div className="cart-item">
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
      <button className="btn btn-remove-item cart-item__btn">
        <IoCloseSharp />
      </button>
    </div>
  );
}

export default CartItem;
