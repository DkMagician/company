import styled from "styled-components";
import bckDiff from "../../images/bckDiff.png";
export const Container = styled.div`
  .card-item {
    max-width: 340px;
    margin: auto;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    background-color: rgba(255, 255, 255, 1);
    display: grid;
    transition: 0.3s;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  .card-item:hover {
    transform: scale(1.2);
  }

  .card-cover {
    background-image: url(${bckDiff});
    width: 100%;
    height: 100%;
    position: absolute;
    height: 160px;
    top: -20%;
    left: 0;
    will-change: top;
    background-size: cover;
    background-position: center;
    filter: blur(30px);
    transform: scale(1.2);
    transition: 0.5s;
  }

  .card-header {
    position: relative;
    display: flex;
    height: 200px;
    flex-shrink: 0;
    width: 100%;
    transition: 0.3s;
    * {
      transition: 0.3s;
    }
  }

  .card-avatar {
    width: 100px;
    height: 100px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-64px);
  }

  .card-name {
    position: absolute;
    bottom: 0;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    transform: translateY(-10px) translateX(-50%);
    left: 50%;
  }

  .card-email {
    position: absolute;
    bottom: 0;
    font-size: 11px;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-7px);
  }

  .card-content {
    padding: 20px;
  }

  .card-desc {
    line-height: 1.8;
    color: #636b6f;
    font-size: 14px;
    font-weight: 400;
    font-family: "DM Sans", sans-serif;
  }

  .card-buttons {
    display: flex;
    justify-content: center;
    margin-top: auto;
    position: sticky;
    bottom: 0;
    left: 0;

    button {
      flex: 1 1 auto;
      user-select: none;
      background: 0;
      font-size: 13px;
      border: 0;
      padding: 15px 5px;
      cursor: alias;
      color: #5c5c6d;
      border-top: 3px solid hsla(240, 11%, 84%, 0.884);
      transition: 0.3s;
      font-family: "Jost", sans-serif;
      font-weight: 500;
      outline: 0;
      border-bottom: 3px solid transparent;
      &.is-active,
      &:hover {
        color: #2b2c48;
        border-top: 0;
        border-bottom: 3px solid #8a84ff;
        background: linear-gradient(
          to bottom,
          rgba(127, 199, 231, 0) 0%,
          rgba(207, 204, 255, 0.2) 44%,
          rgba(211, 226, 255, 0.4) 100%
        );
      }
    }
  }

  .cont-cards {
    display: flex;
    flex-direction: row;
  }

  .sidebar {
    transition-duration: 0.3s;
    display: none;
  }

  .card-posts {
    width: 170px;
    overflow-wrap: break-word;
  }

  .sidebarOpen {
    border-radius: 3%;
    background-color: rgba(255, 255, 255, 0.4);
    width: 230px;
    display: flex;
    position: relative;
    left: 0%;
    flex-direction: column;
    align-items: center;
  }

  .card-innerpost {
    height: 400px;
  }

  .card-bottomal {
    height: 10vh;
  }
`;
