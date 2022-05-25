import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const BuyPartsModal = ({ part }) => {
  const [user] = useAuthState(auth)
  const { name } = part;
  return (
    <div class="">
      {/* // <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="purchase-part-modal" class="modal-toggle" />
      <div class="modal modal-middle sm:modal-middle">
        <div class="modal-box">
          <label
            for="purchase-part-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-center text-secondary text-lg">{name}</h3>

          <form class="justify-center text-center mt-3 space-y-2">
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered input-primary w-full max-w-xs"
            />

            <button class="btn modal-button mt-3 mx-auto w-80 btn-primary">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyPartsModal;
