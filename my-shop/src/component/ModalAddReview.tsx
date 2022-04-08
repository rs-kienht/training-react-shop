import React from 'react'
import "./../style/modalPreview.scss"
interface IProps {
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>
}
const ModalAddPreview: React.FC<IProps> = ({setDisplayModal}) => {
  return (
    <div className="modal-preview">
      <section className="modal-preview__content">
        <div className="modal-preview__header">
          <div className="modal-preview__title">Add New Preview</div>
          <button className="modal-preview__btn-close" onClick={() => setDisplayModal(false)}>X</button>
        </div>
        <div className="modal-preview__body">
          
        </div>
      </section>
      <h3>Add Review</h3>
    </div>
  )
}
export default ModalAddPreview