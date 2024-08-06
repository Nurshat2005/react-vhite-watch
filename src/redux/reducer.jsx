const obj = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  heart: false,
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  displa1:"block",
  displa2:"none"
};
export const Reducer = (state = obj, action) => {
  switch (action.type) {
    case "ADD":
      let res = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(res));
      return {
        ...state,
        product: res,
      };
    case "ADDFAVORITE":
      let addfav = [...state.favorite, action.payload];
      localStorage.setItem("favorite", JSON.stringify(addfav));
      return {
        ...state,
        favorite: addfav,
        heart: true,
      };
    case "DELETE":
      let del = state.product.filter((el) => el.id !== action.payload);
      localStorage.setItem("product", JSON.stringify(del));
      return {
        ...state,
        product: del,
      };
    case "DEL_FAV":
      let dele = state.favorite.filter((el) => el.id !== action.payload);
      localStorage.setItem("favorite", JSON.stringify(dele));
      return {
        ...state,
        favorite: dele,
      };

    default:
      return state;
  }
};
