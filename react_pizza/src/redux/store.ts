import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice.ts';
import cart from './cart/slice.ts';
import pizzas from './pizzas/slice.ts';

export const store = configureStore({
  reducer: {
    filter: filter,
    cart: cart,
    pizzas: pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
