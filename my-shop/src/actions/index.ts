import { Dispatch, Action } from "redux"
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
export function GET_ALL_PRODUCT(payload:any){
  return {
      type:'GET_ALL_PRODUCT',
      payload
  }
}
export async function getProduct(dispatch: Dispatch<Action>) {
  return await fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(item => dispatch(GET_ALL_PRODUCT(item)))
}