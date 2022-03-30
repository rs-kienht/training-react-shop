import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import './../style/card.scss'

interface IPropsDetials {
  data: any,
  clickItemProduct: any
}
const CardItem: React.FC<IPropsDetials> = ({ data, clickItemProduct }) => {
  const { title, price, description, image } = data;
  const handleClickItemCard = () => {
    clickItemProduct(data)
  }
  return (
    <div onClick={handleClickItemCard} className="wrap-card-item">
      <div className="wrap-card-item__img">
        <img alt="img" className="wrap-card-item__image" src={image} />
      </div>
      <div className="wrap-card-item__content">
        <h1 className="wrap-card-item__title">{title}</h1>
        <span className="wrap-card-item__description">{description}</span>
        <p className="wrap-card-item__price">Price {price}$</p>
        <Button variant="primary">Add To Cart</Button>
      </div>
    </div>
  );
};
export default CardItem;
