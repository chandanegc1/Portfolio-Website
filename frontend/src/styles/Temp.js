import styled from "styled-components";

const Wrapper = styled.article`
  a {
    text-decoration: none;
  }
  .main-header {
    width: 100vw;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 10px;
    color: black;
    left: 0;
    text-align: center;
    z-index: 1000;
  }

  nav {
    width: 50vw;
    border: 2px solid red;
    border-radius: 6px;
  }

  ul {
    line-height: 30px;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  @media (max-width: 800px) {
    .main-header {
      display: none;
    }
  }
`;
export default Wrapper;
