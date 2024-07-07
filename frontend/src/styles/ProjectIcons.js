import styled from "styled-components";
const Wrapper = styled.article`
  .main-box .box img {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    transition: transform 0.3s;
  }
  .box{
    transition: transform 0.3s;
  }
  
  .main-box .box:hover {
    transform: scale(3);
  }
  .p-name{
    position: fixed;
    font-size: 5px;
    margin-top:-3px;
    margin-left: 12px;
    color: white;
    background-color: black;
    padding: 0 2px;
  }
`;

export default Wrapper;
