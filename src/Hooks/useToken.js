import axios from "axios";
import React, { useState } from "react";

const useToken = (user) => {
  const email = user?.user?.email;
  const currentUser = { email };

  if (email) {
    axios
      .put(`http://localhost:5000/user/${email}`, currentUser)
      .then((res) => {
        console.log(res.data);
        const accessToken = res.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
      });
  }

  const [token, setToken] = useState("");
  // console.log(token);

  return [token];
};

export default useToken;
