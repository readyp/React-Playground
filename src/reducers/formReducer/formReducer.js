export const InitialState = {
  title: "",
  ingredients: [],
  cookingTime: null,
  method: "",
};

export const ACTION_TYPE = {
  HANDLE_ONCHANGE: "HANDLE_ONCHANGE",
  ADD_INGREDIENT: "ADD_INGREDIENT",
  REMOVE_INGREDIENT: "REMOVE_INGREDIENT",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_ONCHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: [...action.payload],
      };
    default:
      return state;
  }
};
