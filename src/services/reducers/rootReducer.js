import {
  combineReducers
} from "redux";

import {
  ingredientsReducer
} from "./ingredientsReducer";

import {
  ingredientDetailsReducer
} from "./ingredientDetailsReducer";

import {
  orderReducer
} from "./orderReducer";

import {
  orderDetailsReducer
} from "./orderDetailsReducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  order: orderReducer,
  orderDetails: orderDetailsReducer,
});
