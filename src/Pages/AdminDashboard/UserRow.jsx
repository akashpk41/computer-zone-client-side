import React from "react";

const UserRow = ({user}) => {
     const {name, email} = user
  return (

      <tr>
        <th>1</th>
        <td>{name} </td>
        <td>{email} </td>
        <td>Blue</td>
      </tr>

  );
};

export default UserRow;
