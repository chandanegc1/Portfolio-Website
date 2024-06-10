import styled from "styled-components";

const Wrapper = styled.article`
 .leftblock {
    background-color: #fff;
    min-height: 481px;
    width: 250px;
    width: 140px;
    float: left;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0px;
}
.menublock {
    height: 100%;
    top: 0px;
    bottom: 0px;
    overflow: auto;
    position: absolute;
    width: 180px;
    background-color: #fff;
    padding: 10px 0px 10px 25px;
    min-height: 444px;
    border-right: 1px solid black;
}
ul.menu {
    list-style: none outside none;
    margin: 0;
    padding: 0;
}

.menu {
    font-family: "BIGPixelRegular", Courier, "Courier New", monospace;
    font-size: 20px;
}
.menublock ul.menu li:first-child {
    line-height: 34px;
    margin-bottom: 53px;
}

ul.menu li {
    margin: 0px 0 3px 0;
    padding: 0;
}
a:hover{
    color: red;
}

`;
export default Wrapper;