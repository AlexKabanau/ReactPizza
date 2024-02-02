import { CartItem } from '../redux/cart/slice';

export const CalcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
