import styled from "styled-components";

const Wrapper = styled.article`
 
 .destop-content{
    height: 90vh;
    display: flex;
    justify-content: space-between;
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
   margin: 5px 0;
 }
`;
export default Wrapper;