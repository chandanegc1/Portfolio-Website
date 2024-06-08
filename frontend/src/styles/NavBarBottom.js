import styled from "styled-components";

const Wrapper = styled.article`
 *{
   margin: 0;
   padding: 0;
   color: black;
   font-family: "BIGPixelRegular", Courier, "Courier New", monospace;
   font-size: 20px;
   font-weight: bold;
}
 .header h3{
  position: fixed;
  left: 0;
}
.main-header{
  display: flex;
  justify-content: center;
}
.main-header a{
  text-decoration: none;
}
.main-header nav{
   width: 50vw;
   border-radius: 6px;
}

.main-header nav ul{
   line-height: 30px;
   display: flex;
   justify-content: space-around;
   list-style: none;
 }
 .main-header nav ul li a:hover{
  color:red ;
 }

`;
export default Wrapper;