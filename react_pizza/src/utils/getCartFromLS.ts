import { CalcTotalPrice } from './calcTotalPrice.ts';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = CalcTotalPrice(items);
  return {
    items,
    totalPrice,
  };
};
