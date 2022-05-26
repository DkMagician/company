import React from "react";
import { Container } from "./Style";

const PostsDetail = (props) => {
  const data = props.data;
  console.log("data extraida a pintar posts: ", data);
  return (
    <Container>
      <div class="card">
        <div className="post-title">
          <h2> {data.title} </h2>
        </div>
        <div className="post-body">
          <p> {data.body} </p>
        </div>
      </div>
    </Container>
  );
};

export default PostsDetail;
