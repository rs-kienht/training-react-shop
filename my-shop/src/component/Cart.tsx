import React, {useEffect} from "react";
import "./../style/cart.scss";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {DECEREMENT, INCEREMENT} from './../actions/index'
const Cart = () => {
  let listCart = [];
  listCart = useSelector((state: any) => state._actionProduct.listCart);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="wrap-cart">
        <h3>Cart Shop</h3>
        <table className="wrap-cart__table">
          <tbody className="wrap-cart__body">
            {listCart?.map((item: any, index: any) => {
              return (
                <tr>
                  <td className="wrap-cart__image">
                    <img alt="img" src={item?.image}></img>
                  </td>
                  <td className="wrap-cart__title">{item?.title}</td>
                  <td className="wrap-cart__quantity">
                    <span onClick={() => dispatch(DECEREMENT(index)) } className="btn btn-primary">-</span>
                    <span className="btn btn-info">{item?.quantity}</span>
                    <span onClick={() => dispatch(INCEREMENT(index)) } className="btn btn-primary">+</span>
                  </td>
                  <td className="wrap-cart__price">{item?.price * item?.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Cart;
