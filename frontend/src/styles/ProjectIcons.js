import styled from "styled-components";
const Wrapper = styled.article`
.main-box .box img{
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: transform 0.3s;
}
.main-box .box img:hover{
    transform: scale(3);
}
`;

export default Wrapper;