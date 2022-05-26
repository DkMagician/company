import React, { useEffect } from "react";
import UserListAll from "../UserListing/UserListAll";
import userApi from "../../common/apis/userApi";
import { useDispatch } from "react-redux";
import { addUsers } from "../../features/users/usersSlice";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
const AlbumsUser = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUsersLists = async () => {
      const response = await userApi.get(`users?page=1`).catch((error) => {
        console.log(error);
      });
      //console.log("The Response from the API: ",response);
      dispatch(addUsers(response.data));
    };
    fetchUsersLists();
  }, []);

  return (
    <>
      <Header></Header>
      <div>
        <UserListAll />
      </div>
    </>
  );
};

export default AlbumsUser;
