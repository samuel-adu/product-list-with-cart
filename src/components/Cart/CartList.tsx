import CartItem from './CartItem';

interface Item {
  name: string;
  price: number;
  quantity: number;
}

type CartListProps = {
  items: Item[];
};

function CartList({ items }: CartListProps) {
  return (
    <div>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.name}>
            <CartItem
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;
