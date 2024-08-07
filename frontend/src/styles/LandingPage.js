import styled from "styled-components";

const Wrapper = styled.article`
 .desktop-content{
    height: 90vh;
    display: flex;
    justify-content: center;
    margin: 0 10px;
 }

 .icon-group{
   display: flex;
   flex-direction: column-reverse;
   align-items: center;
   text-align: center;
   cursor: pointer;
 }
 
 .icon-group h3{
    line-height: 40px;
    font-family: "Agency FB Bold";
    font-weight: normal;
    font-size: 17px;
 }
 .box-icon{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    height: 80vh;
 }
 .box-icon .icon-click{
   margin: 1px 0;
 }
  
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
