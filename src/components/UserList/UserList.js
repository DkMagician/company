import React, { useEffect } from "react";
import UserListing from "../UserListing/UserListing";
import userApi from "../../common/apis/userApi";
import { useDispatch } from "react-redux";
import { addUsers } from "../../features/users/usersSlice";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
const UserList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await userApi.get(`users?page=1`).catch((error) => {
        console.log(error);
      });
      //console.log("The Response from the API: ",response);
      dispatch(addUsers(response.data));
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Header></Header>
      <div>
        <UserListing />
      </div>
    </>
  );
};

export default UserList;
