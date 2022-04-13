import React, { useState } from "react";
import "./../style/modalPreview.scss";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ADD_REVIEW } from "./../actions/index";
interface IProps {
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalAddPreview: React.FC<IProps> = ({ setDisplayModal }) => {
  const dispatch = useDispatch();
  const [title, setTilte] = useState("");
  const [tags, setTags] = useState("");
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  let listProductItem = [] as any;
  const handleChangeSelect = (e: any) => {
    setProduct(e.target.value);
    let categoryItem = listProductItem.filter(
      (item: any) => item.title === product
    );
    setCategory(categoryItem[0]?.title || '');
  };
  listProductItem = useSelector((state: any) => state._actionProduct.product);
  const handleSubmitForm = () => {
    if(title !== '' && tags !== '' && product !== '' && category !== '') {
      const obj = {
        title: title,
        tags: tags,
        product: product,
        category: category
      };
      dispatch(ADD_REVIEW(obj));
    }
    setDisplayModal(false)
  };
  return (
    <div className="modal-preview">
      <section className="modal-preview__content">
        <div className="modal-preview__header">
          <div className="modal-preview__title">Add New Preview</div>
          <button
            className="modal-preview__btn-close"
            onClick={() => setDisplayModal(false)}
          >
            X
          </button>
        </div>
        <div className="modal-preview__body">
          <Form>
            <Form.Group className="mb-3 modal-preview__item">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={(e: any) => setTilte(e.target.value)}
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>
            <Form.Group className="mb-3 modal-preview__item">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                onChange={(e: any) => setTags(e.target.value)}
                placeholder="Enter tags"
              />
            </Form.Group>
            <Form.Group className="mb-3 modal-preview__item">
              <Form.Label>Tags</Form.Label>
              <select
                className="form-control"
                onChange={handleChangeSelect}
                value={product}
              >
                {listProductItem.map((item: any, index: number) => (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </Form.Group>
            <Form.Group className="mb-3 modal-preview__item">
              <Form.Label>Category</Form.Label>
              <Form.Control
                readOnly
                value={category}
                placeholder="Enter tags"
              />
            </Form.Group>
            <Button onClick={handleSubmitForm}>Submit</Button>
          </Form>
        </div>
      </section>
      <h3>Add Review</h3>
    </div>
  );
};
export default ModalAddPreview;
