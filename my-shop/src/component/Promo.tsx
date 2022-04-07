import React, { useState } from "react";
import "./../style/promo.scss";
import { Card, Form, Button } from "react-bootstrap";
import { PromoCode } from "./../type/product";
import { useSelector, useDispatch } from "react-redux";
import { ADD_PROMO, REMOVE_PROMO } from "./../actions/index";

const Promo = () => {
  const dispatch = useDispatch();
  let listPromo = [] as PromoCode[];
  listPromo = useSelector((state: any) => state._actionProduct.listPromo);
  const [code, setCode] = useState<string>("");
  const [discount, setDisCount] = useState<number>(0);
  const [unit, setUnit] = useState<string>("DEFAULT");
  const handleInputCode = (e: any) => {
    setCode(e.target.value);
  };
  const handleInputDiscount = (e: any) => {
    if (e.target.value > 0) setDisCount(e.target.value);
  };
  const handleChangeSelect = (e: any) => {
    setUnit(e.target.value);
  };
  const handleClickAddCode = () => {
    if (
      listPromo.length === 0 &&
      unit !== "DEFAULT" &&
      code !== "" &&
      discount !== 0
    ) {
      let payload = {
        code: code,
        discount: discount,
        unit: unit,
      };
      dispatch(ADD_PROMO(payload));
    } else {
      let found = listPromo.some((el) => el.code === code);
      if (!found && unit !== "DEFAULT" && code !== "" && discount !== 0) {
        let payload2 = {
          code: code,
          discount: discount,
          unit: unit,
        };
        dispatch(ADD_PROMO(payload2));
      }
    }
    setCode("");
    setDisCount(0);
    setUnit("DEFAULT");
  };
  const options = [
    {
      label: "Select Unit",
      value: "DEFAULT",
    },
    {
      label: "Percent",
      value: "percent",
    },
    {
      label: "Money",
      value: "money",
    },
  ];
  return (
    <div className="container">
      <div className="wrap-promo">
        <h3>Promo Page</h3>
        <Card>
          <Card.Header>Promo Code</Card.Header>
          <div className="row">
            <div className="col-md-6">
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
                      <select
                        className="form-control w-75 float-right"
                        onChange={handleChangeSelect}
                        value={unit}
                      >
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Form.Group>
                  </Form>
                  <div className="wrap-promo__btn">
                    <Button onClick={handleClickAddCode}>Click</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6">
              <div>
                {listPromo.length > 0 ? (
                  <div className="wrap-promo__wrap-code">
                    {listPromo.map((item: any, index: any) => {
                      return (
                        <div key={index} className="wrap-promo__item-code">
                          <span>
                            Mã code {item?.code} giảm giá {item?.discount}{" "}
                            {item?.unit === "percent" ? "%" : "VND"}
                          </span>
                          <button
                            key={index}
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
                ) : (
                  <div className="wrap-promo__wrap-code">
                    <h3>Chưa nhập code nào hết</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Promo;
