import React from 'react';
import Wrapper from "../styles/InfoNavBar";
import { Link } from 'react-router-dom';

const InfoNavBar = () => {
  return (
    <Wrapper>
      <div className="leftblock">
        <div className="menublock">
          <ul className="menu">
            <li>
              <Link to="/">
                <h4>PROJECTS</h4>
              </Link>
            </li>
            <li>
              <Link to="/information/news">
                NEWS
              </Link>
            </li>
            <li>
              <Link to="/information/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/information/big-ideas">
                BIG IDEAS
              </Link>
            </li>
            <li>
              <Link to="/information/lectures">
                LECTURES
              </Link>
            </li>
            <li>
              <Link to="/information/shop">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/information/media">
                MEDIA
              </Link>
            </li>
            <li>
              <Link to="/information/awards">
                AWARDS
              </Link>
            </li>
            <li>
              <Link to="/information/jobs">
                JOBS
              </Link>
            </li>
            <li>
              <Link to="/information/staff">
                STAFF
              </Link>
            </li>
            <li>
              <Link to="/information/contact">
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/information/search">
                SEARCH
              </Link>
            </li>
            <li>
              <Link to="/information/feedback">
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
