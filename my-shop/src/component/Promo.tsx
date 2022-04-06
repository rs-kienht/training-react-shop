import React, { useState } from "react";
import "./../style/promo.scss";
import { Card, Form, Button } from "react-bootstrap";
import { Product } from "./../type/product";
import { useSelector, useDispatch } from "react-redux";
import { ADD_PROMO,REMOVE_PROMO } from "./../actions/index";

const Promo = () => {
  const dispatch = useDispatch();
  let listPromo = [] as Product[];
  listPromo = useSelector((state: any) => state._actionProduct.listPromo);
  const [code, setCode] = useState<string>("");
  const [discount, setDisCount] = useState<number>(0);
  const [unit, setUnit] = useState<string>("");
  const handleInputCode = (e: any) => {
    setCode(e.target.value);
  };
  const handleInputDiscount = (e: any) => {
    setDisCount(e.target.value);
  };
  const handleChangeSelect = (e: any) => {
    setUnit(e.target.value);
  };
  const handleClickAddCode = () => {
    const payload = {
      code: code,
      discount: discount,
      unit: unit || "percent",
    };
    console.log(listPromo.length)
    if(listPromo.length === 0) {
      dispatch(ADD_PROMO(payload));
    }
    else {
      listPromo.forEach((item:any) => {
        if(payload?.code !== '' && payload?.discount !== 0 && item?.code !== payload?.code) {
          dispatch(ADD_PROMO(payload));
        }
      })
    }
    setCode("");
    setDisCount(0);
    setUnit("");
  };
  return (
    <div className="container">
      <div className="wrap-promo">
        <h3>Promo Page</h3>
        <Card>
          <Card.Header>Promo Code</Card.Header>
          <div className="row">
            <div className="col-md-5">
              <Card>
                <Card.Header>Create Code</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="wrap-promo__row">
                      <label>Code</label>
                      <input
                        type="text"
                        className="form-control w-75 float-right"
                        placeholder="Create code discount"
                        value={code}
                        onChange={handleInputCode}
                      />
                    </Form.Group>
                    <Form.Group className="wrap-promo__row">
                      <label>Discount</label>
                      <input
                        type="number"
                        className="form-control w-75 float-right"
                        placeholder="Create code discount"
                        value={discount}
                        onChange={handleInputDiscount}
                      />
                    </Form.Group>
                    <Form.Group className="wrap-promo__row">
                      <Form.Label>Unit</Form.Label>
                      <Form.Select
                        className="form-control w-75 float-right"
                        aria-label="Default select example"
                        onChange={handleChangeSelect}
                      >
                        <option value="percent">Percent</option>
                        <option value="money">Money</option>
                      </Form.Select>
                    </Form.Group>
                  </Form>
                  <div className="wrap-promo__btn">
                    <Button onClick={handleClickAddCode}>Click</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-7">
              <Card>
                <div className="wrap-promo__wrap-code">
                  {listPromo.map((item: any, index:any) => {
                    return (
                      <div className="wrap-promo__item-code">
                        <span>
                          Mã code {item?.code} giảm giá {item?.discount}{" "}
                          {item?.unit === "percent" ? "%" : "$"}
                        </span>
                        <button
                          className="btn btn-danger btn-sm rounded-0"
                          type="button"
                          title="Delete"
                          onClick={() => dispatch(REMOVE_PROMO(index))}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Promo;
