import React from "react";
import { Link } from "react-router-dom";
import "../UserCard/UserCard.scss";
import { Container } from "./Style";
import photoAlbum from "../../images/photoAlbum.png";

const TitlesAlbums = (props) => {
  const data = props.data;
  return (
    <Container>
      <div className="card-item">
        <Link
          to={`/albums/photos/${data.id}`}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <div className="card-header">
            <img
              src={photoAlbum}
              alt={data.title}
              className="card-avatar"
            ></img>
          </div>
          <div className="card-bottom">
            <div className="card-content">
              <p className="card-desc"> {data.title} </p>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default TitlesAlbums;
