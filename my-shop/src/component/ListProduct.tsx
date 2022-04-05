import React, { useState, useEffect } from "react";
import ProductGird from "./ProductGird";
import { getProduct } from "./../api/getProduct";
import Loader from "./Loader";
import ModalInfo from "./Modal";
import {Product} from './../type/product'
import {ADD_TO_CART} from './../actions/index'
import { useDispatch } from 'react-redux';
const ListProduct = () => {
  useEffect(() => {
    let mounted = true;
    setStatusLoader(true);
    getProduct().then((items) => {
      if (mounted) {
        setStatusLoader(false);
        setProductList(items);
      }
    });
  }, []);

  const [productList, setProductList] = useState<Product[]>([]);
  const [statusLoader, setStatusLoader] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<Product>();
  const dispatch = useDispatch();
  const handleAddToCart = (dataModal:any) => {
    dispatch(ADD_TO_CART(dataModal))
  }

  return (
    <div>
      {statusLoader ? (
        <Loader></Loader>
      ) : (
        <>
        {dataModal ? <ModalInfo handleAddToCart={handleAddToCart} dataModal={dataModal} setDataModal={setDataModal}></ModalInfo> : ""}
          <ProductGird
            productList={productList}
            setDataModal={setDataModal}
          ></ProductGird>
        </>
      )}
    </div>
  );
};
export default ListProduct;
