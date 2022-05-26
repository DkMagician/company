import React from "react";
import { useSelector } from "react-redux/es/exports";
import { getAllUsers } from "../../features/users/usersSlice";
import UserCard from "../UserCard/UserCard";
import { Container } from "./Style";
import "./UserListing.scss";
const UserListing = () => {
  const users = useSelector(getAllUsers);
  let renderUsers = "";
  //console.log(users.data);
  renderUsers =
    users.total > 0 ? (
      users.data.map((user, index) => {
        //  console.log("array mapeado: ",user);
        return <UserCard key={index} data={user} />;
      })
    ) : (
      <div className="users-error">
        <h3> Error </h3>
      </div>
    );
  return (
    <Container>
      <div className="user-wrapper">
        <div className="user-list">
          <h1>Users</h1>
          <div className="user-container">{renderUsers}</div>
        </div>
      </div>
    </Container>
  );
};

export default UserListing;
