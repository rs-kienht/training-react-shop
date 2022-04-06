import React, { useState, useEffect } from "react";
import ProductGird from "./ProductGird";
import { getProduct } from "./../actions/index";
import Loader from "./Loader";
import ModalInfo from "./Modal";
import { Product } from "./../type/product";
import { ADD_TO_CART } from "./../actions/index";
import { useDispatch, useSelector } from "react-redux";
const ListProduct = () => {
  useEffect(() => {
    dispatch(getProduct);
  });
  let listProductItem = [];
  listProductItem = useSelector((state: any) => state._actionProduct.product);
  const [dataModal, setDataModal] = useState<Product>();
  const dispatch = useDispatch();
  const handleAddToCart = (dataModal: any) => {
    dispatch(ADD_TO_CART(dataModal));
  };

  return (
    <>
      {listProductItem.length > 0 ? (
        <>
          {dataModal ? (
            <ModalInfo
              handleAddToCart={handleAddToCart}
              dataModal={dataModal}
              setDataModal={setDataModal}
            ></ModalInfo>
          ) : (
            ""
          )}
          <ProductGird
            productList={listProductItem}
            setDataModal={setDataModal}
          ></ProductGird>
        </>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};
export default ListProduct;
