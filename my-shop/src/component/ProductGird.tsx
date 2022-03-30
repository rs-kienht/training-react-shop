import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardItem from "./Card";
import './../style/productGird.scss'
interface IPorps {
  productList: any;
  clickItemProduct: any;
}
const ProductGird: React.FC<IPorps> = ({ productList,clickItemProduct }) => {
  return (
    <Container className="wrap-container">
      <div className="row wrap-container__list">
        {productList.map((item: any) => {
          return <div className="wrap-list col-md-4 col-xs-12"><CardItem clickItemProduct={clickItemProduct} data={item}></CardItem></div>;
        })}
      </div>
    </Container>
  );
};
export default ProductGird;
