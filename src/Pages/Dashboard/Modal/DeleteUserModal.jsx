import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../API/axiosPrivate";

const DeleteUserModal = ({ modal, refetch }) => {
  // console.log(modal.email);

  const deleteProduct = (email) => {
    //   console.log(id);

    (async () => {
      try {
        const { data } = await axiosPrivate.delete(`/user/${email}`);
        console.log(data);

        if (data.deletedCount > 0) {
          toast.success("User Removed Successfully!");
          refetch();
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

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
            <label
              for="delete-confirm-modal"
              onClick={() => deleteProduct(modal.email)}
              className="btn  btn-error text-white "
            >
              Confirm
            </label>
            <label for="delete-confirm-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
