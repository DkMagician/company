import styled from "styled-components";
export const Container = styled.div`
  .post-title,
  .post-body {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: 1s;
    -moz-transition: 1s;
    -ms-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
    backface-visibility: hidden;
    border-radius: 20px;
  }

  .post-body {
    background-color: #ddd;
    -webkit-transform: rotateX(180deg);
    -moz-transform: rotateX(180deg);
    -o-transform: rotateX(180deg);
    -ms-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
  .post-title {
    background-color: #fff;
  }

  .card {
    margin: 10px;
    min-width: 200px;
    width: 300px;
    height: 200px;
    position: relative;
  }

  .card:hover .post-title {
    -webkit-transform: rotateX(180deg);
    -moz-transform: rotateX(180deg);
    -o-transform: rotateX(180deg);
    -ms-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }

  .card:hover .post-body {
    -webkit-transform: rotateX(360deg);
    -moz-transform: rotateX(360deg);
    -o-transform: rotateX(360deg);
    -ms-transform: rotateX(360deg);
    transform: rotateX(360deg);
  }
`;
