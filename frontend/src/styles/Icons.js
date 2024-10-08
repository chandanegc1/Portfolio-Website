import styled from "styled-components";
const Wrapper = styled.article`
*{
  font-family: "Agency FB", sans-serif;
}
.main-box{
  /* position:absolute; */
}
  .main-box .box img {
    width: 45px;
    height: 45px;
    margin: 0 5px;
    transition: transform 0.3s;
  }
  .box {
    transition: transform 0.3s;
  }
  .main-box .box:hover {
    transform: scale(2.8);
  }
  .main-box .box p {
    position: fixed;
    font-size: 3.3px;
    margin-top: -3px;
    margin-left: 5px;
    color: white;
    background-color:black;
    padding: 0 1px;
  }
  .main-box p {
    font-size: 12px;
    margin-top: -5px;
    color: rgb(118, 117, 117);
  }

  .main-box-list .box img {
    width: 45px;
    height: 45px;
    margin: 0 5px;
    transition: transform 0.3s;
  }
  .main-box-list .logo-name {
    font-size: 12px;
    text-align: left;
    color: rgb(118, 117, 117);
  }
  .main-box-list .box{
    display: flex;
    width: 240px;
    margin: 2px 0;
  }
  .main-box-list .box .p-name{
    display: block;
    position: none;
    font-size: 14px;
    text-align: left;
  }
`;

export default Wrapper;
