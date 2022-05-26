import styled from "styled-components";
export const Container = styled.div`
  .post-section {
    width: 100%;
    height: 84.8vh;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 60px;
  }
  h1 {
    color: #fff;
  }
`;
