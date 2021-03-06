import { combineReducers } from 'redux';
import { AnyAction } from 'redux'
import {Product, PromoCode, Preview} from './../type/product'
interface CartType {
  numberCart: number,
  listCart: Cart[],
  product: Product[],
  listPromo: PromoCode[],
  listPreview: Preview[],
}
const initState: CartType = {
  listCart: [],
  numberCart: 0,
  product: [],
  listPromo: [],
  listPreview: [],
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
        state.listCart.forEach((item:any, index:any) => {
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
        product: state.product,
        listPromo: state.listPromo,
        listPreview: state.listPreview,
    }
    case 'INCEREMENT':
      if(state.listCart[action.index].quantity > 0 && state.listCart[action.index].quantity < 8 ) {
        state.numberCart++;
        state.listCart[action.index].quantity++;
      }
    return {
      listCart:[...state.listCart],
      numberCart: state.numberCart,
      product: state.product,
      listPromo: state.listPromo,
      listPreview: state.listPreview,
    }
    case 'DELETE_CART':
      state.listCart.splice(action.index, 1);
    return {
      listCart:[...state.listCart],
      numberCart: state.numberCart -1,
      product: state.product,
      listPromo: state.listPromo,
      listPreview: [...state.listPreview],
    }
    case 'GET_ALL_PRODUCT':
      return {
        ...state,
        product: action.payload
    }
    case 'ADD_PROMO':
      state.listPromo.push(action.payload);
      return {
        listCart:[...state.listCart],
        numberCart: state.numberCart,
        product: state.product,
        listPromo: [...state.listPromo],
        listPreview: [...state.listPreview],
    }
    case 'REMOVE_PROMO':
      state.listPromo.splice(action.index, 1);
      return {
        listCart:[...state.listCart],
        numberCart: state.numberCart,
        product: state.product,
        listPromo: [...state.listPromo],
        listPreview: [...state.listPreview],
    }
    case 'ADD_REVIEW':
      state.listPreview.push(action?.payload)
      return {
        listCart:state.listCart,
        numberCart: state.numberCart,
        product: state.product,
        listPromo: state.listPromo,
        listPreview: [...state.listPreview],
      }
    default:
      return state;
  }
}
const manageShop = combineReducers ({
  _actionProduct: actionProduct
});

export default manageShop;