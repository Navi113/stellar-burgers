import {
  GET_MENU_REQUEST,
  GET_MENU_REQUEST_FAILED,
  GET_MENU_REQUEST_FINISH,
  GET_MENU_REQUEST_SUCCESS,
} from "../actions/ingredientsAction";

const defaultState = {
  ingredients: [],
  itemsRequest: null,
  itemsRequestFailed: null,
  itemsRequestFailedMessage: null,
};

export const ingredientsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MENU_REQUEST_SUCCESS:
      return {
        ...state,
        ingredients: action.items,
      };
    case GET_MENU_REQUEST_FAILED: {
      return {
        ...state,
        items: [],
        itemsRequestFailed: true,
        itemsRequestFailedMessage: action.err,
      };
    }
    case GET_MENU_REQUEST_FINISH: {
      return {
        ...state,
        itemsRequest: false,
      };
    }
    case GET_MENU_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
        itemsRequestFailed: false,
        itemsRequestFailedMessage: "",
      };
    }
    default:
      return state;
  }
};
