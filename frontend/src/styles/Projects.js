import styled from "styled-components";

const Wrapper = styled.article`
  .content {
    display: flex;
    padding: 40px;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .navbar {
    position: fixed;
    bottom: 15px;
  }

  .full-destop {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 20px;
    position: fixed;
  }
`;
export default Wrapper;
