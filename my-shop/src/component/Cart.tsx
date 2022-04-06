import React from "react";
import "./../style/cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { DECEREMENT, INCEREMENT, DELETE_CART } from "./../actions/index";
const Cart = () => {
  let listCart = [];
  listCart = useSelector((state: any) => state._actionProduct.listCart);
  const dispatch = useDispatch();
  let totalCart = 0;
  listCart.forEach((item: any) => {
    totalCart += item?.quantity * item?.price;
  });
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
                    <span
                      onClick={() => dispatch(DECEREMENT(index))}
                      className="btn btn-primary"
                    >
                      -
                    </span>
                    <span className="btn btn-info">{item?.quantity}</span>
                    <span
                      onClick={() => dispatch(INCEREMENT(index))}
                      className="btn btn-primary"
                    >
                      +
                    </span>
                  </td>
                  <td className="wrap-cart__price">
                    {item?.price * item?.quantity}
                  </td>
                  <td className="wrap-cart__delete">
                    <button
                      className="btn btn-danger btn-sm rounded-0"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      onClick={() => dispatch(DELETE_CART(index))}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={3}>Total Carts</td>
              <td>{totalCart}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Cart;
