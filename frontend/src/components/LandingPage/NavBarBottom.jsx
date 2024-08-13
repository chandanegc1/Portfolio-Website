import React, { useState } from 'react';
import Wrapper from '../../styles/NavBarBottom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sortItems } from '../../Redux/Slices/ProjectDataSlice';
import { changePath } from '../../Redux/Slices/pathSlice';

const NavBarBottom = () => {
  const [navPath, setNavPath] = useState('CHRONOLOGICAL');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setNavPath(e);
    dispatch(changePath(e));
    dispatch(sortItems(e));
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <header className="main-header">
            <Link to="/information"><h3>INFO</h3></Link>
            <nav>
              <ul>
                <li className={navPath === 'CHRONOLOGICAL' ? 'color-red' : null} onClick={() => handleClick('CHRONOLOGICAL')}>
                  CHRONOLOGICAL
                </li>
                <li className={navPath === 'TYPOLOGY' ? 'color-red' : null} onClick={() => handleClick('TYPOLOGY')}>
                  TOPOLOGY
                </li>
                <li className={navPath === 'STATUS' ? 'color-red' : null} onClick={() => handleClick('STATUS')}>
                  STATUS
                </li>
                <li className={navPath === 'LOCATION' ? 'color-red' : null} onClick={() => handleClick('LOCATION')}>
                  LOCATION
                </li>
                <li className={navPath === 'TECHNOLOGY' ? 'color-red' : null} onClick={() => handleClick('TECHNOLOGY')}>
                  TECHNOLOGY
                </li>
                <li className={navPath === 'RANDOM' ? 'color-red' : null} onClick={() => handleClick('RANDOM')}>
                  RANDOM
                </li>
                <li className={navPath === 'LIST-VIEW' ? 'color-red' : null} onClick={() => handleClick('LIST-VIEW')}>
                  LIST-VIEW
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBarBottom;
