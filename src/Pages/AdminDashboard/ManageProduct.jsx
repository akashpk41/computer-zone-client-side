import React, { useState } from "react";
import { useQuery } from "react-query";
import { SpinnerRoundOutlined } from "spinners-react";
import axiosPrivate from "../../API/axiosPrivate";
import DeleteConfirmModal from "../Dashboard/DeleteConfirmModal";
import ManageProductRow from "./ManageProductRow";

const ManageProduct = () => {
  const [modal, setModal] = useState(null);
  const { data, isLoading } = useQuery("parts", () =>
    axiosPrivate.get("/parts")
  );
  // console.log(data.data);

  if (isLoading) {
    return (
      <SpinnerRoundOutlined
        size={100}
        color="red"
        className="w-48 h-48 text-primary text-center mx-auto"
      />
    );
  }
  return (
    <div className="mx-10  ">
      <h1 className="text-center mb-3 font-semibold text-primary text-xl ">
        {" "}
        Manage Product{" "}
      </h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data?.data?.map((parts, index) => (
              <ManageProductRow index={index} key={parts._id} parts={parts} setModal={setModal} />
            ))}
          </tbody>
        </table>
      </div>
      {modal && <DeleteConfirmModal modal={modal} />}
    </div>
  );
};

export default ManageProduct;
