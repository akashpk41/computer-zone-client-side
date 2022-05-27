import React from "react";

const DeleteConfirmModal = ({ modal }) => {
  return (
    <div className="mx-10 ">
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal  mx-auto text-center jusitfy-center sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-semibold text-error text-xl">
            Are you sure want to delete{" "}
            <span className="font-bold  text-black"> {modal.name}?</span>
          </h3>

          <div className="modal-action">
            <button className="btn  btn-error text-white ">Confirm</button>
            <label for="delete-confirm-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
