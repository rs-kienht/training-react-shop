import React, { useState } from "react";
import "./../style/cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { DECEREMENT, INCEREMENT, DELETE_CART } from "./../actions/index";
import { PromoCode } from "./../type/product";
const Cart = () => {
  let listCart = [];
  const [priceDiscount, setPriceDisCount] = useState(0);
  listCart = useSelector((state: any) => state._actionProduct.listCart);
  let listPromo = [] as PromoCode[];
  listPromo = useSelector((state: any) => state._actionProduct.listPromo);
  const dispatch = useDispatch();
  let totalCart = 0;
  listCart.forEach((item: any) => {
    totalCart += item?.quantity * item?.price;
  });
  const [valCode, setValCode] = useState<string>("");
  const handleBlurPromo = (e:any) => {
    if (e.key === 'Enter') {
      let found = listPromo.some((el) => el.code === valCode);
      if(found) {
        listPromo.forEach((item: any) => {
          if (item?.unit === "percent") {

            setPriceDisCount((totalCart * (+item?.discount / 100)))
          } else {
            setPriceDisCount(+item?.discount)
          }
        })
      } else {
        setPriceDisCount(0);
      }
      setValCode('')
    }
  };
  const total = totalCart - priceDiscount;
  const fortmatCurrenyVND = (item:any) => {
    return item.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    })
  }
  return (
    <div className="container">
      {listCart.length > 0 ? (
        <div className="wrap-cart">
          <h3>Cart Shop</h3>
          <div className="row">
            <div className="col-md-8">
              <table className="wrap-cart__table">
                <tbody className="wrap-cart__body">
                  {listCart?.map((item: any, index: any) => {
                    return (
                      <tr key={index}>
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
                          {(item?.price * item?.quantity).toLocaleString(
                            "it-IT",
                            { style: "currency", currency: "VND" }
                          )}
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
                    <td>
                      {fortmatCurrenyVND(totalCart)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <div className="wrap-cart__calc">
                <div className="wrap-cart__promo-title">
                  Nhập mã code để nhận ưu đãi
                </div>
                <input
                  className="wrap-cart__promo-code"
                  type="text"
                  onChange={(e: any) => setValCode(e.target.value)}
                  value={valCode}
                  placeholder="Nhập mã Code"
                  onBlur={handleBlurPromo}
                  onKeyDown={handleBlurPromo}
                ></input>
              </div>
              <div className="wrap-cart__box-calc">
                <div className="wrap-cart__info-total">
                  <div className="wrap-cart__title-total">Price Total</div>
                  <div className="wrap-cart__price-total">
                    {fortmatCurrenyVND(totalCart)}
                  </div>
                </div>
                <div className="wrap-cart__info-total">
                  <div className="wrap-cart__title-discount">
                    Price Discount
                  </div>
                  <div className="wrap-cart__price-discount">
                    {fortmatCurrenyVND(priceDiscount)}
                  </div>
                </div>
                <div className="wrap-cart__info-total">
                  <div className="wrap-cart__total-label">Total</div>
                  <div className="wrap-cart__price-total">
                    {fortmatCurrenyVND(total)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="wrap-cart">
          <h3>Giỏ hàng của ban đang trống</h3>
        </div>
      )}
    </div>
  );
};
export default Cart;
