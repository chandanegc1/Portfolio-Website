import styled from "styled-components";

const Wrapper = styled.article`
  .project {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  .cancel-btn {
    position: fixed;
    top: -40px;
    right: 10px;
    z-index: 10;
    padding: 0 5px;
    text-decoration: none;
    background-color: aliceblue;
  }

  .cancel-btn h1 {
    margin: 0;
    padding: 0;
    font-size: 24px;
    color: black;
    cursor: pointer;
  }

  .page-nav{
    position: fixed;
    bottom: 20px;
  }
  .page-nav h4:hover{
    color: red;
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
  }
  .product-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .class-img{
    width: 100%;
    max-width: 90vw;
    height: 50vh;
  }
 .first-img{
    width: 100%;
    height: 100%;
    cursor: pointer;
 }
  .product-desc {
    width: 100%;
    padding: 20px 5px;
    margin-top: 20px;
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
`;

export default Wrapper;
