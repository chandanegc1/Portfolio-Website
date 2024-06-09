import styled from "styled-components";
const Wrapper = styled.article`
  .main-box .box img {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    transition: transform 0.3s;
  }
  .main-box .box img:hover {
    transform: scale(3);
  }
`;

export default Wrapper;
