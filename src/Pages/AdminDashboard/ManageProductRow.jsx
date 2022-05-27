import React from "react";

const ManageProductRow = ({ parts, index, setModal }) => {
  const { img, name, price, available } = parts;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div className="w-16 mask mask-squircle">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name} </td>
      <td className="text-green-700">{price} &#2547; </td>
      <td>{available} </td>
      <td>
        <label
          onClick={() => setModal(parts)}
          for="delete-confirm-modal"
          className="btn btn-xs btn-error text-white"
        >
          Delete
        </label>

      </td>
    </tr>
  );
};

export default ManageProductRow;
