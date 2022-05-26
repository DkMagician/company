import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  localStorage.removeItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return <div>Logout</div>;
};

export default Logout;
