import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import placeholderApi from "../../common/apis/placeholderApi";
import { addPosts, getAllPosts } from "../../features/users/usersSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import PostsDetail from "../PostsDetail/PostsDetail";
import Header from "../Header/Header";
import { Container } from "./Style";
const UserDetail = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const { idUser } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUsersPosts = async () => {
      const response = await placeholderApi
        .get(`posts?userId=${idUser}`)
        .catch((error) => {
          console.log(error);
        });
      //console.log("The Response from the API placeholder is: ",response);
      dispatch(addPosts(response.data));
    };
    fetchUsersPosts();
  }, []);

  const posts = useSelector(getAllPosts);
  let renderPosts = "";
  //.log('Response state: ' ,posts);
  // console.log('Response state: de la vuelta: '+x ,posts);
  renderPosts =
    posts.length > 0 ? (
      //console.log("hay datos")
      posts.map((post, index) => {
        // console.log("array mapeado: ",post);
        return <PostsDetail key={index} data={post} />;
      })
    ) : (
      <div className="users-error">
        <h3> Error </h3>
      </div>
    );
  return (
    <Container>
      <Header></Header>
      <h1> Posts </h1>
      <div className="post-section">{renderPosts}</div>
    </Container>
  );
};

export default UserDetail;
