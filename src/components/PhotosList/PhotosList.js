import React from "react";
import "../UserCard/UserCard.scss";
import { Container } from "./Style";
const PhotosList = (props) => {
  const data = props.data;
  return (
    <Container>
      <div className="card-item">
        <div className="card-header">
          <img src={data.url} alt={data.title} className="card-avatar"></img>
        </div>
        <div className="card-bottom">
          <div className="card-content">
            <p className="card-desc"> {data.title} </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PhotosList;
