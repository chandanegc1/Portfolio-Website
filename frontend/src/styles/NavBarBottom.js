import styled from "styled-components";

const Wrapper = styled.article`
  * {
    margin: 0;
    padding: 0;
    color: black;
    font-family: "BIGPixelRegular", Courier, "Courier New", monospace;
    font-size: 20px;
  }
  .header h3 {
    position: fixed;
    left: 0;
  }
  .main-header {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-header a {
    text-decoration: none;
  }
  .main-header nav {
    width: 50vw;
    border-radius: 6px;
  }

  .main-header nav ul {
    line-height: 30px;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  .main-header nav ul li a:hover {
    color: red;
  }
  .main-header nav ul li{
    cursor: pointer;
  }
  .color-red{
    color: red;
  }

  @media (max-width: 800px) {
    .main-header nav {
      width: 90vw;
    }
  }
  @media (max-width: 1000px) {
    .main-header nav {
      width: 70vw;
    }
  }
`;
export default Wrapper;
