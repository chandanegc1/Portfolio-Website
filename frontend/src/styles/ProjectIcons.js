import styled from "styled-components";
const Wrapper = styled.article`
.main-box .box img{
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: transform 0.4s;
}
.main-box .box img:hover{
    transform: scale(4);
}
`;

export default Wrapper;