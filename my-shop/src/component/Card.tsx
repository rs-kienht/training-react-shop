import React from "react";
import { Button } from "react-bootstrap";
import './../style/card.scss'
import {Product} from './../type/product'

interface IPropsDetials {
  data: Product,
  setDataModal: React.Dispatch<React.SetStateAction<Product>>
}
const CardItem: React.FC<IPropsDetials> = ({ data, setDataModal }) => {
  const { title, price, description, image } = data;
  const handleClickItemCard = (data:Product) => {
    setDataModal(data)
  }
  return (
    <div onClick={() => handleClickItemCard(data)} className="wrap-card-item">
      <div className="wrap-card-item__img">
        <img alt="img" className="wrap-card-item__image" src={image} />
      </div>
      <div className="wrap-card-item__content">
        <h1 className="wrap-card-item__title">{title}</h1>
        <span className="wrap-card-item__description">{description}</span>
        <p className="wrap-card-item__price">Price {price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
        <Button variant="primary">Add To Cart</Button>
      </div>
    </div>
  );
};
export default CardItem;
