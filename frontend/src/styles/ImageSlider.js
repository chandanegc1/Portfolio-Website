import styled from "styled-components";

const Wrapper = styled.article`
 .product-img {
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    overflow: hidden;
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


`;
export default Wrapper;