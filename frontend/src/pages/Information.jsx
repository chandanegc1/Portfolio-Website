import React from 'react';
import InfoNavBar from '../components/InfoNavBar';
import { Outlet } from 'react-router-dom';

const Information = () => {
  return (
    <>
      <InfoNavBar />
      <div style={{ paddingLeft: '190px', paddingTop: '10px' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Information;
