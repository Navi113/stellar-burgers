import {
  CLOSE_INGREDIENT_MODAL,
  OPEN_INGREDIENT_MODAL
} from "../actions/ingredientDetailsAction";

const defaultState = {
  openingredientModal: false,
  modalDetails: [],
};

export const ingredientDetailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_MODAL: {
      return {
        ...state,
        openingredientModal: true,
        modalDetails: action.payload,
      };
    }
    case CLOSE_INGREDIENT_MODAL: {
      return {
        ...state,
        openingredientModal: false,
        modalDetails: {},
      };
    }
    default:
      return state;
  }
};
