import React from "react";

const UpdateProfileModal = ({ setModal }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="update-profile-modal"
        className="modal-toggle"
      />
      <div className="modal sm:modal-middle">
        <div className="modal-box">
          <label
            for="update-profile-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button onClick={() => setModal(false)} className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
