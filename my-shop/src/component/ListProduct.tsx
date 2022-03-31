import React, { useState, useEffect } from "react";
import ProductGird from "./ProductGird";
import { getProduct } from "./../api/getProduct";
import Loader from "./Loader";
import ModalInfo from "./Modal";
import {Product} from './../type/product'

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

  return (
    <div>
      {statusLoader ? (
        <Loader></Loader>
      ) : (
        <>
        {dataModal ? <ModalInfo dataModal={dataModal} setDataModal={setDataModal}></ModalInfo> : ""}
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
