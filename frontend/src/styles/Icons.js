import styled from "styled-components";
const Wrapper = styled.article`
  .main-box .box img {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    transition: transform 0.3s;
  }
  .box {
    transition: transform 0.3s;
  }

  .main-box .box:hover {
    transform: scale(3);
  }
  .main-box .box p {
    position: fixed;
    font-size: 4px;
    margin-top: -3px;
    margin-left: 5px;
    color: white;
    background-color:black;
    padding: 1px 1px;
  }
  .main-box p {
    font-size: 14px;
    margin-top: -2px;
  }
`;

export default Wrapper;
