import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.ts';
import cart from './slices/cartSlice.ts';
import pizzas from './slices/pizzasSlice.ts';

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
