import React, { useState } from 'react';
import Wrapper from "../styles/InfoNavBar";
import {HashLink as Link } from 'react-router-hash-link';

const InfoNavBar = () => {
  let path = window.location.hash.slice(1).toUpperCase()  || "NEWS";
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
              <Link smooth to="/" className={color==="PROJECTS"?"red-color":""}>
                <h4>PROJECTS</h4>
              </Link>
            </li>
            <li onClick={()=>handleClick("NEWS")} >
              <Link smooth className={color==="NEWS"?"red-color":""}to="/information/#news" >
                NEWS
              </Link>
            </li>
            <li onClick={()=>handleClick("ABOUT")} >
              <Link smooth className={color==="ABOUT"?"red-color":""}to="/information/#about">
                ABOUT
              </Link>
            </li>
            <li onClick={()=>handleClick("BIG-IDEAS")} >
              <Link smooth className={color==="BIG-IDEAS"?"red-color":""}to="/information/#big-ideas">
                BIG IDEAS
              </Link>
            </li>
            <li onClick={()=>handleClick("LECTURES")} >
              <Link smooth className={color==="LECTURES"?"red-color":""}to="/information/#lectures">
                LECTURES
              </Link>
            </li>
            <li onClick={()=>handleClick("SHOP")} >
              <Link smooth className={color==="SHOP"?"red-color":""}to="/information/#shop">
                SHOP
              </Link>
            </li>
            <li onClick={()=>handleClick("MEDIA")} >
              <Link smooth className={color==="MEDIA"?"red-color":""}to="/information/#media">
                MEDIA
              </Link>
            </li>
            <li onClick={()=>handleClick("AWARDS")} >
              <Link smooth className={color==="AWARDS"?"red-color":""}to="/information/#awards">
                AWARDS
              </Link>
            </li>
            <li onClick={()=>handleClick("JOBS")} >
              <Link smooth className={color==="JOBS"?"red-color":""}to="/information/#jobs">
                JOBS
              </Link>
            </li>
            <li onClick={()=>handleClick("STAFF")} >
              <Link smooth className={color==="STAFF"?"red-color":""}to="/information/#staff">
                STAFF
              </Link>
            </li>
            <li onClick={()=>handleClick("CONTACT")} >
              <Link smooth className={color==="CONTACT"?"red-color":""}to="/information/#contact">
                CONTACT
              </Link>
            </li>
            <li onClick={()=>handleClick("SEARCH")} >
              <Link smooth className={color==="SEARCH"?"red-color":""}to="/information/#search">
                SEARCH
              </Link>
            </li>
            <li onClick={()=>handleClick("FEEDBACK")} >
              <Link smooth className={color==="FEEDBACK"?"red-color":""}to="/information/#feedback">
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
