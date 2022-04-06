import React from "react";
import { Container } from "react-bootstrap";
import CardItem from "./Card";
import './../style/productGird.scss'
import {Product} from './../type/product'
interface IPorps {
  productList: Product[];
  setDataModal: React.Dispatch<React.SetStateAction<any>>;
}
const ProductGird: React.FC<IPorps> = ({ productList,setDataModal }) => {
  return (
    <Container className="wrap-container">
      <div className="row wrap-container__list">
        {productList.map((item: any) => <div className="wrap-list col-md-4 col-xs-12"><CardItem setDataModal={setDataModal} data={item}></CardItem></div>)}
      </div>
    </Container>
  );
};
export default ProductGird;
