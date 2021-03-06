import React, { useEffect, useState } from "react";
import axiosPrivate from "../API/axiosPrivate";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const[adminLoading,setAdminLoading] = useState(true)
  const email = user?.email;
  //   console.log(email);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin,adminLoading];
};

export default useAdmin;
