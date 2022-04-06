// import {ADD_CART} from './../constants/index'
export function ADD_TO_CART(payload:any){
  return {
      type:'ADD_TO_CART',
      payload
  }
}
export function DECEREMENT(index:any){
  return {
      type:'DECEREMENT',
      index
  }
}
export function INCEREMENT(index:any){
  return {
      type:'INCEREMENT',
      index
  }
}
export function DELETE_CART(index:any){
  return {
      type:'DELETE_CART',
      index
  }
}

