import React from "react";
import { toast } from "react-toastify";

import axiosPrivate from "../../API/axiosPrivate";

const UserRow = ({ user, index, refetch, setModal }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    (async () => {
      try {
        const { data } = await axiosPrivate.put(`/user/admin/${email}`);
        console.log(data);
        refetch();
        toast.success("Successfully Made admin!");
      } catch (err) {
        if (err.response.status === 403) {
          toast.error("Failed To Make Admin");
        }
      }
    })();
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email} </td>
      <td>
        {role || (
          <button
            onClick={makeAdmin}
            className="btn btn-xs btn-secondary text-white "
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <label
          onClick={() => setModal(user)}
          for="delete-confirm-modal"
          className="btn btn-xs btn-error text-white"
        >
          Remove User
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
