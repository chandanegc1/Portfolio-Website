import styled from "styled-components";

const Wrapper = styled.article`
  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: relative;
  }

  .cancel-btn {
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 10;
    text-decoration: none;
  }

  .cancel-btn h1 {
    margin: 0;
    padding: 0;
    font-size: 24px;
    color: #ff0000;
    cursor: pointer;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-width: 300px;
  }

  .logo {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
  }

  .product-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }

  .product-img {
    width: 100%;
    max-width: 80vw;
    height: 50vh;
    position: relative;
    overflow: hidden;
  }

  .slid {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: transform 1s ease;
  }

  .product-desc {
    width: 100%;
    padding: 20px 5px;
    margin-top: 20px;
  }

  .button {
    position: absolute;
    top: 50%;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }

  .prev-button {
    left: 0px;
  }

  .next-button {
    right: 0px;
  }

  @media (min-width: 768px) {
    .project {
      flex-direction: row;
      justify-content: space-between;
    }

    .product-details,
    .product-right {
      height: 100vh;
    }

    .product-details {
      flex: 1;
      max-width: 300px;
    }

    .product-right {
      flex: 2;
    }

    .product-img {
      height: 60vh;
    }
  }
`;

export default Wrapper;
