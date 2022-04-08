import React, { useState } from "react";
import "./../style/preview.scss";
import { Button } from "react-bootstrap";
import ModalAddPreview from "./../component/ModalAddReview";
const Preview = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className="wrap-preview">
      <h3>Preview</h3>
      <Button onClick={() => setDisplayModal(true)} variant="primary">
        Add review
      </Button>
      {displayModal ? <ModalAddPreview setDisplayModal={setDisplayModal}></ModalAddPreview> : ""}
    </div>
  );
};
export default Preview;
