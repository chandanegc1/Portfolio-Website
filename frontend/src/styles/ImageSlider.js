import styled from "styled-components";

const Wrapper = styled.article`
 .product-img {
    width: 100%;
    height: 100vh;
    position: absolute;
    overflow: hidden;
  }
  .product-img .cancel-btn{
    right:10px;
    top:10px;
    possition:fixed;
    
  }
  .slid {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: transform 1s ease;
  }
  .button {
    position: absolute;
    top: 50%;
    color: black;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    background-color: rgba(128, 128, 128, 0.300);
    padding:5px 0;
  }
  .prev-button {
    left: 0px;
  }
  .next-button {
    right: 0px;
  }


`;
export default Wrapper;