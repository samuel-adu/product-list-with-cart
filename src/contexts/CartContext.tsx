import { createContext, ReactNode, use, useEffect, useReducer } from 'react';

interface Product {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

type CartItem = {
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
};

type CartState = CartItem[];

type CartAction =
  | { type: 'ADD_TO_CART'; item: Product }
  | { type: 'REMOVE_ITEM'; name: string }
  | { type: 'DECREMENT'; name: string }
  | { type: 'INCREMENT'; name: string }
  | { type: 'CLEAR_CART' };

function cartStateReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return [...state, { ...action.item, quantity: 1 }];
    }
    case 'REMOVE_ITEM': {
      return state.filter((item) => item.name !== action.name);
    }
    case 'INCREMENT': {
      return state.map((item) =>
        item.name === action.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    case 'DECREMENT': {
      return state.map((item) =>
        item.name === action.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
    case 'CLEAR_CART': {
      return [];
    }
    default: {
      return state;
    }
  }
}

type CartContextType = {
  cart: CartState;
  dispatch: React.ActionDispatch<[action: CartAction]>;
};

const CartContext = createContext<CartContextType | null>(null);

const localStorageKey = 'cart';
function getInitialCartState() {
  const localStorageValue = localStorage.getItem(localStorageKey);
  return localStorageValue ? JSON.parse(localStorageValue) : [];
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(
    cartStateReducer,
    null,
    getInitialCartState
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(cart));
  }, [cart]);

  const value = { cart, dispatch };

  return <CartContext value={value}>{children}</CartContext>;
}

export function useCart() {
  const context = use(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
}
