const obj = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) ||[],
  search:""
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
    case "DELETE":
      let del = state.product.filter((el) => el.id !== action.payload);
      localStorage.setItem("product", JSON.stringify(del));
      return {
        ...state,
        product: del,
      };
    case "ADDFAVORITE":
      let addfav = [...state.favorite, action.payload];
      localStorage.setItem("favorite", JSON.stringify(addfav));
      return {
        ...state,
        favorite: addfav,
      };

    case "DEL_FAV":
      let dele = state.favorite.filter((el) => el.id !== action.payload);
      localStorage.setItem("favorite", JSON.stringify(dele));
      return {
        ...state,
        favorite: dele,
      };

    case "BASKET":
      let basketAdd = [...state.basket, action.payload];
      return {
        ...state,
        basket: basketAdd,
      };
    case "DEL_BASKET":
      let delbasket = state.basket.filter((el) => el.id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(delbasket));
      return {
        ...state,
        basket: delbasket,
      };
      case "SEARCH":
        return{
          ...state,search:action.payload
        }

    default:
      return state;
  }
};
