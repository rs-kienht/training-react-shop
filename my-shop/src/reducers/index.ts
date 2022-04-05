import { combineReducers } from 'redux';
import { AnyAction } from 'redux'
interface CartType {
  numberCart: number,
  listCart: Cart[],
}
const initState: CartType = {
  listCart: [],
  numberCart: 0,
};
interface Cart {
  title: string,
  id: number,
  image: string,
  price: number,
  quantity: number
}

function actionProduct (state = initState, action:AnyAction) {
  switch(action.type) {
    case 'ADD_TO_CART':
      let itemObj:Cart = {
        title: action?.payload?.title,
        id: action?.payload?.id,
        image: action?.payload?.image,
        price: action?.payload?.price,
        quantity: 1,
      };
      return{
        listCart:[...state.listCart, itemObj],
        numberCart: state.numberCart +1
      }
    case 'DECEREMENT':
      if(state.listCart[action.index].quantity > 1) {
        state.numberCart--;
        state.listCart[action.index].quantity--;
      }
      return {
        listCart:[...state.listCart],
        numberCart: state.numberCart
      }
    case 'INCEREMENT':
      if(state.listCart[action.index].quantity > 0) {
        state.numberCart++;
        state.listCart[action.index].quantity++;
      }
    return {
      listCart:[...state.listCart],
      numberCart: state.numberCart
    }
      default:
        return state;
  }
}
const manageShop = combineReducers ({
  _actionProduct: actionProduct
});

export default manageShop;