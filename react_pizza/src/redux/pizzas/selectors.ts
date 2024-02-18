import { RootState } from '../store.ts';

export const selectPizzasData = (state: RootState) => state.pizzas;
