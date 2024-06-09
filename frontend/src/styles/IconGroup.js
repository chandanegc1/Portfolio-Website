import styled from "styled-components";

const Wrapper = styled.article`
 
 .destop-content{
    height: 85vh;
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
 }
 .icon-group{
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
  

 }
 .icon-group h3{
    margin: 0 10px;
    line-height: 50px;
 }
 .box-icon{
    display: flex;
    height: 80vh;
    flex-direction: column-reverse;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
    align-items: center;
    text-align: center;
 }
`;
export default Wrapper;