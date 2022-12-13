import {
  combineReducers
} from 'redux';

import {
  ingredientsReducer
} from './ingridientsReducer';

import {
  orderReducer
} from './orderReducer';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer
});