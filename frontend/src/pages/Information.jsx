import React from "react";
import Wrapper from "../styles/Information";
import { Link } from 'react-router-dom';

const Information = () => {
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
              <Link to="/news">
                NEWS
              </Link>
            </li>
            <li>
              <Link to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/big-ideas">
                BIG IDEAS
              </Link>
            </li>
            <li>
              <Link to="/lectures">
                LECTURES
              </Link>
            </li>
            <li>
              <Link to="/shop">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/media">
                MEDIA
              </Link>
            </li>
            <li>
              <Link to="/awards">
                AWARDS
              </Link>
            </li>
            <li>
              <Link to="/jobs">
                JOBS
              </Link>
            </li>
            <li>
              <Link to="/staff">
                STAFF
              </Link>
            </li>
            <li>
              <Link to="/contact">
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/search">
                SEARCH
              </Link>
            </li>
            <li>
              <Link to="/feedback">
                FEEDBACK
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Information;
