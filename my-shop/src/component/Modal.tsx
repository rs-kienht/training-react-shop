import React from "react";
import { Button } from "react-bootstrap";
import "./../style/modal.scss";
interface Irops {
  dataModal: any;
  setDataModal: React.Dispatch<React.SetStateAction<any>>;
  handleAddToCart: React.Dispatch<React.SetStateAction<any>>;
}
const ModalInfo: React.FC<Irops> = ({
  dataModal,
  setDataModal,
  handleAddToCart,
}) => {
  const handleCloseModal = () => {
    let Obj = null;
    setDataModal(Obj);
  };
  const { category, description, image, price, title } = dataModal;
  return (
    <div onClick={handleCloseModal} className="wrap-modal">
      <section className="wrap-modal__content">
        <div className="wrap-modal__picture">
          <img alt="img" className="wrap-modal__image" src={image} />
        </div>
        <div className="wrap-modal__info">
          <h1 className="wrap-modal__category">{category}</h1>
          <h1 className="wrap-modal__title">{title}</h1>
          <span className="wrap-modal__description">{description}</span>
          <p className="wrap-modal__price">Price {price}$</p>
          <div className="wrap-modal__button">
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button
              onClick={() => handleAddToCart(dataModal)}
              variant="primary"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ModalInfo;
