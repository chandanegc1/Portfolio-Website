import styled from "styled-components"

const Wrapper = styled.article`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color: black;
}
a{
   text-decoration: none;
}
body , html{
   margin: 0;
   padding: 0;
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

 nav{
   width: 50vw;
   border: 2px solid red;
   border-radius: 6px;
}


 ul{
   line-height: 30px;
   display: flex;
   justify-content: space-around;
   list-style: none;
 }
`;
export default Wrapper; 