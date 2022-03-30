import React, { useState, useEffect } from "react";
import ProductGird from "./ProductGird";
import { getProduct } from "./../api/getProduct";
import Loader from "./Loader";
import ModalInfo from "./Modal";

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

  const [productList, setProductList] = useState([]);
  const [statusLoader, setStatusLoader] = useState<boolean>(false);
  const [statusModal, setStausModal] = useState<boolean>(true);
  const clickItemProduct = (val:any) => {
    if(val) {
      setStausModal(true);
    }
  };
  const handeSetStausModal = (val:any) => {
    setStausModal(val)
  }

  return (
    <div>
      {statusLoader ? (
        <Loader></Loader>
      ) : (
        <>
        {statusModal ? <ModalInfo setStausModal={handeSetStausModal}></ModalInfo> : ""}
          <ProductGird
            productList={productList}
            clickItemProduct ={clickItemProduct}
          ></ProductGird>
        </>
      )}
    </div>
  );
};
export default ListProduct;
