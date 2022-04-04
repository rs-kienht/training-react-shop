import { combineReducers } from 'redux';
// import {Product} from './../type/product'
import { AnyAction } from 'redux'
import {ADD_TO_CART} from './../actions/index'
interface CartType {
  numberCart: number,
  listCart: [],
}
const initState: CartType = {
  listCart: [],
  numberCart: 0,
};

const actionProduct = (state = initState, action:AnyAction) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return{
        ...state,
        action
      }
  }
}

const manageShop = combineReducers ({
  actionProduct: actionProduct
});

export default manageShop;