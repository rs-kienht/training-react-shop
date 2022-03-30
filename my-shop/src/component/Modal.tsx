import React from "react";
import { Modal, Button } from "react-bootstrap";

interface Irops {
  setStausModal:any
}
const ModalInfo: React.FC<Irops>=({setStausModal}) => {
  return (
    <Modal.Dialog>
      <div className="wrap-modal">
        <Modal.Footer>
          <Button variant="secondary" onClick={setStausModal(false)}>
            Close
          </Button>
          <Button variant="primary">
            Add To Cart
          </Button>
        </Modal.Footer>
      </div>
    </Modal.Dialog>
  );
};
export default ModalInfo;
