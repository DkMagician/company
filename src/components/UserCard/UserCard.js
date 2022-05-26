import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Style";
import "./UserCard.scss";

const UserCard = (props) => {
  const data = props.data;
  const [open, setOpen] = useState(false);
  const sidebar = "sidebar";
  const sidebarOpen = "sidebarOpen";
  return (
    <Container>
      <div className="cont-cards">
        <div className="card-item" onClick={() => setOpen(!open)}>
          <div className="card-header">
            <div className="card-cover"></div>
            <img
              src={data.avatar}
              alt={data.first_name}
              className="card-avatar"
            ></img>
            <h1 className="card-name">
              {data.first_name + " " + data.last_name}
            </h1>
            <h2 className="card-email"> {data.email} </h2>
          </div>
          <div className="card-bottom">
            <div className="card-content">
              <p className="card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur maximus eros eu viverra aliquam. Vestibulum quis
                bibendum nulla, vel tempus tortor.
              </p>
            </div>
            <div class="card-buttons">
              <Link
                to={`/user/${data.id}`}
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <button type="button" className="btn-posts">
                  Ver Posts
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={open ? sidebarOpen : sidebar}>
          <div className="card-innerpost">
            <div className="card-header">
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
            <div className="card-content">
              <p className="card-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur maximus eros eu viverra aliquam. Vestibulum quis
                bibendum nulla, vel tempus tortor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserCard;
