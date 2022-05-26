import React, { useEffect } from "react";
import { useParams } from "react-router";
import placeholderApi from "../../common/apis/placeholderApi";
import { showTitles, getAllTitles } from "../../features/users/usersSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import TitlesAlbums from "../TitlesAlbums/TitlesAlbums";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { Container } from "./Style";
import "../UserListing/UserListing.scss";

const Albums = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const { idUser } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTitlesUser = async () => {
      const response = await placeholderApi
        .get(`users/${idUser}/albums`)
        .catch((error) => {
          console.log(error);
        });
      // console.log("The Response from the API placeholder is: ",response);
      dispatch(showTitles(response.data));
    };
    fetchTitlesUser();
  }, []);

  const titles = useSelector(getAllTitles);
  let renderTitles = "";
  //.log('Response state: ' ,posts);
  renderTitles =
    titles.length > 0 ? (
      titles.map((title, index) => {
        //console.log("array mapeado: ",title);
        return <TitlesAlbums key={index} data={title} />;
      })
    ) : (
      <div className="users-error">
        <h3> Error </h3>
      </div>
    );

  return (
    <Container>
      <Header></Header>
      <div className="user-wrapper">
        <div className="user-list">
          <h1>Titulos</h1>
          <div className="user-container">{renderTitles}</div>
        </div>
      </div>
    </Container>
  );
};

export default Albums;
