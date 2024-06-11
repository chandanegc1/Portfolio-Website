import React, { useState } from 'react';
import Wrapper from "../styles/InfoNavBar";
import { Link } from 'react-router-dom';

const InfoNavBar = () => {
  let path = String(window.location.pathname.slice(13)).toUpperCase();
  if(path==="") path = "NEWS";
  
  const [color , setColor] = useState(path);
  const handleClick = (e)=>{
    setColor(e);
  }
  return (
    <Wrapper>
      <div className="leftblock">
        <div className="menublock">
          <ul className="menu">
            <li onClick={(e)=>handleClick("PROJECTS")} >
              <Link to="/" className={color==="PROJECTS"?"red-color":""}>
                <h4>PROJECTS</h4>
              </Link>
            </li>
            <li onClick={()=>handleClick("NEWS")} >
              <Link className={color==="NEWS"?"red-color":""}to="/information" >
                NEWS
              </Link>
            </li>
            <li onClick={()=>handleClick("ABOUT")} >
              <Link className={color==="ABOUT"?"red-color":""}to="/information/about">
                ABOUT
              </Link>
            </li>
            <li onClick={()=>handleClick("BIG-IDEAS")} >
              <Link className={color==="BIG-IDEAS"?"red-color":""}to="/information/big-ideas">
                BIG IDEAS
              </Link>
            </li>
            <li onClick={()=>handleClick("LECTURES")} >
              <Link className={color==="LECTURES"?"red-color":""}to="/information/lectures">
                LECTURES
              </Link>
            </li>
            <li onClick={()=>handleClick("SHOP")} >
              <Link className={color==="SHOP"?"red-color":""}to="/information/shop">
                SHOP
              </Link>
            </li>
            <li onClick={()=>handleClick("MEDIA")} >
              <Link className={color==="MEDIA"?"red-color":""}to="/information/media">
                MEDIA
              </Link>
            </li>
            <li onClick={()=>handleClick("AWARDS")} >
              <Link className={color==="AWARDS"?"red-color":""}to="/information/awards">
                AWARDS
              </Link>
            </li>
            <li onClick={()=>handleClick("JOBS")} >
              <Link className={color==="JOBS"?"red-color":""}to="/information/jobs">
                JOBS
              </Link>
            </li>
            <li onClick={()=>handleClick("STAFF")} >
              <Link className={color==="STAFF"?"red-color":""}to="/information/staff">
                STAFF
              </Link>
            </li>
            <li onClick={()=>handleClick("CONTACT")} >
              <Link className={color==="CONTACT"?"red-color":""}to="/information/contact">
                CONTACT
              </Link>
            </li>
            <li onClick={()=>handleClick("SEARCH")} >
              <Link className={color==="SEARCH"?"red-color":""}to="/information/search">
                SEARCH
              </Link>
            </li>
            <li onClick={()=>handleClick("FEEDBACK")} >
              <Link className={color==="FEEDBACK"?"red-color":""}to="/information/feedback">
                FEEDBACK
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default InfoNavBar;
