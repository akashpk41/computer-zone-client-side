import React from "react";
import Iframe from "react-iframe";

const PCBuilding = () => {
  return (
    <div className=" md:mx-12 mx-2  py-7 border rounded-md border-secondary my-10 ">
      <h1 className="text-2xl text-center font-bold mb-3"> PC With Our Component's Example </h1>
      <Iframe
        //  https://www.youtube.com/watch?v=yQK--z_jE7M
        url="https://www.youtube.com/embed/yQK--z_jE7M"
        //    width="w-full"
        //    height="h-full"
        id="myId"
        className="shadow-2xl w-full h-96  "
        display="initial"
        position="relative"
      />
    </div>
  );
};

export default PCBuilding;
