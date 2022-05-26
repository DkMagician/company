import React, { useEffect } from "react";
import { useParams } from "react-router";
import placeholderApi from "../../common/apis/placeholderApi";
import { showPhotos, getAllPhotos } from "../../features/users/usersSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import PhotosList from "../PhotosList/PhotosList";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "../UserListing/UserListing.scss";
import { Container } from "./Style";

const PhotosAlbum = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const { idAlbum } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPhotosAlbums = async () => {
      const response = await placeholderApi
        .get(`albums/${idAlbum}/photos`)
        .catch((error) => {
          console.log(error);
        });
      //  console.log("The Response from the API placeholder is: ",response);
      dispatch(showPhotos(response.data));
    };
    fetchPhotosAlbums();
  }, []);

  const photos = useSelector(getAllPhotos);
  let renderPhotos = "";
  //.log('Response state: ' ,posts);
  renderPhotos =
    photos.length > 0 ? (
      photos.map((title, index) => {
        //console.log("array mapeado: ",title);
        return <PhotosList key={index} data={title} />;
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
          <h1>Fotos de Album</h1>
          <div className="user-container">{renderPhotos}</div>
        </div>
      </div>
    </Container>
  );
};

export default PhotosAlbum;
