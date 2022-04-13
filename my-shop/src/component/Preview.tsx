import React, { useState, useEffect } from "react";
import "./../style/preview.scss";
import { Button } from "react-bootstrap";
import ModalAddPreview from "./../component/ModalAddReview";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "./../actions/index";
// import { Preview } from "./../type/product";
import {useNavigate} from "react-router-dom"
const Preview = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct);
  });
  const [displayModal, setDisplayModal] = useState(false);
  let listPreview = [] as any;
  listPreview = useSelector((state: any) => state._actionProduct.listPreview);
  const handleClickItemPreview = (item:any) => {
    let id = item?.title.toLowerCase().replaceAll(' ', '-')
    navigate(`/details/${id}`)
  }
  return (
    <div className="container wrap-preview">
      <h3>Preview</h3>
      <Button onClick={() => setDisplayModal(true)} variant="primary">
        Add review
      </Button>
      <h3>List Preview</h3>
      <ul className="wrap-preview__list">
        {listPreview.map((item: any, index: any) => {
          return (
            <li onClick={() => handleClickItemPreview(item)} key={index} className="wrap-preview__item">
              <div className="wrap-preview__item-title">
                <div className="fw-bold">{item?.product}</div>
                <div className="fs-sm text-truncate">{item?.title}</div>
                <div className="fs-sm text-truncate">{item?.tags}</div>
              </div>
              <span className="badge bg-primary">{item?.category}</span>
            </li>
          );
        })}
      </ul>
      {displayModal ? (
        <ModalAddPreview setDisplayModal={setDisplayModal}></ModalAddPreview>
      ) : (
        ""
      )}
    </div>
  );
};
export default Preview;
