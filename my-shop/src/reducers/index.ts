import { combineReducers } from 'redux';
import { AnyAction } from 'redux'
import {Product} from './../type/product'
interface CartType {
  numberCart: number,
  listCart: Cart[],
  product: Product[],
}
const initState: CartType = {
  listCart: [],
  numberCart: 0,
  product: [],
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
      if(state.numberCart === 0) {
        let itemObj:Cart = {
          title: action?.payload?.title,
          id: action?.payload?.id,
          image: action?.payload?.image,
          price: action?.payload?.price,
          quantity: 1,
        };
        state.listCart.push(itemObj);
      } else {
        let check = false;
        state.listCart.map((item, index) => {
          if(item.id === action?.payload?.id ) {
            state.listCart[index].quantity++;
            check = true;
          }
        })
        if(!check) {
          let itemObj:Cart = {
            title: action?.payload?.title,
            id: action?.payload?.id,
            image: action?.payload?.image,
            price: action?.payload?.price,
            quantity: 1,
          }
          state.listCart.push(itemObj);
        }
      }
      return{
        ...state,
        numberCart: state.numberCart +1
      }
    case 'DECEREMENT':
      if(state.listCart[action.index].quantity > 1) {
        state.numberCart--;
        state.listCart[action.index].quantity--;
      }
      return {
        listCart:[...state.listCart],
        numberCart: state.numberCart,
        product: state.product
      }
    case 'INCEREMENT':
      if(state.listCart[action.index].quantity > 0) {
        state.numberCart++;
        state.listCart[action.index].quantity++;
      }
    return {
      listCart:[...state.listCart],
      numberCart: state.numberCart,
      product: state.product
    }
    case 'DELETE_CART':
      state.listCart.splice(action.index, 1);
    return {
      listCart:[...state.listCart],
      numberCart: state.numberCart -1,
      product: state.product
    }
    case 'GET_ALL_PRODUCT':
      return {
        ...state,
        product: action.payload
      }
      default:
        return state;
  }
}
const manageShop = combineReducers ({
  _actionProduct: actionProduct
});

export default manageShop;