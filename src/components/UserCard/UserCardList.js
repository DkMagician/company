import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Style";
import "./UserCard.scss";

const UserCardList = (props) => {
  const data = props.data;
  return (
    <Container>
      <div className="card-item">
        <Link
          to={`/albums/${data.id}`}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <div className="card-header">
            <div className="card-cover"></div>
            <img
              src={data.avatar}
              alt={data.first_name}
              className="card-avatar"
            ></img>
            <h1 className="card-name">
              {" "}
              {data.first_name + " " + data.last_name}{" "}
            </h1>
            <h2 className="card-email"> {data.email} </h2>
          </div>
          <div className="card-bottomal">&nbsp;</div>
        </Link>
      </div>
    </Container>
  );
};

export default UserCardList;
