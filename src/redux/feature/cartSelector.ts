
import { RootState } from "../store";
import { TProduct } from "./cartSlice";

// Selector to get all products
export const selectProducts = (state: RootState): TProduct[] => state.product.product;

// Selector to get items in the cart
export const selectCartItems = (state: RootState): TProduct[] => state.product.cart;