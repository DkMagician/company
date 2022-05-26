import styled from "styled-components";

export const Container = styled.div`
  .containerHome {
    height: 98vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #3d6392;
  }

  .input {
    width: 60%;
    height: 20px;
    justify-content: center;
    display: flex;
    margin: auto;
    padding: 10px;
    outline: none;
    border-radius: 5px;
  }

  .label-header {
    color: #3d6392;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
  }

  .label-footer {
    color: #4a525d;
    font-size: 1em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }

  .btn {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #4a525d;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s ease-in;
    cursor: pointer;
  }

  .btn:hover {
    background: #616c7c;
  }

  .form-login {
    width: 25%;
    height: 50vh;
    background: #fff;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
  }

  .login {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .text-danger {
    color: #f80909dc;
    font-size: 0.8em;
    margin-left: 18%;
  }
`;
