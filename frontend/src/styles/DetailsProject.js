import styled from "styled-components";

const Wrapper = styled.article`
  .project {
    margin-top: 60px;
    display: flex;
  }
  .cancel-btn {
    position: fixed;
    top: -45px;
    right: 15px;
    z-index: 10;
    padding: 0 5px;
    text-decoration: none;
    background-color: aliceblue;
  }
  .btn2 {
    top: 50vh;
    right: 2px;
    background-color: white;
  }
  .cancel-btn p {
    padding: 0px 5px;
    padding-bottom: 3px;
    font-size: 30px;
    color: black;
    cursor: pointer;
  }
  .page-nav {
    position: fixed;
    bottom: 20px;
  }
  .page-nav h4:hover {
    color: red;
    cursor: pointer;
  }
  .product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-width: 0;
    height: 300px;
    font-family: "Agency FB Bold";
    font-weight: normal;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
  .project-left {
    width: 400px;
  }
  .product-right {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .class-img {
    width: 100%;
    max-width: 1400px;
  }
  .banner {
    width: 1400px;
    height: 100%;
    max-height: 300px;
    cursor: pointer;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .product-desc {
    padding: 20px 0px;
    padding-right: 25px;
    font-family: "Agency FB", sans-serif;
  }

  @media (min-width: 768px) {
    .project {
      flex-direction: row;
      justify-content: space-between;
    }

    .product-details,
    .product-right {
      /* height: 100vh; */
    }

    .product-details {
      flex: 1;
      max-width: 300px;
    }

    .product-right {
      flex: 2;
    }

    .product-img {
      /* height: 60vh; */
    }
  }
  .slide-left {
    animation: slideIn 0.8s forwards;
    position: relative;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  .slide-out {
    animation: slideout 0.8s forwards;
    position: relative;
  }

  @keyframes slideout {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default Wrapper;
