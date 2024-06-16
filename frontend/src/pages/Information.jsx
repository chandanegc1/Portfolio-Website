import React from 'react';
import InfoNavBar from '../components/InfoNavBar';
import About from './About';
import News from './News';
import BigIdea from './BigIdea';
import FeedBack from './FeedBack';
import Lectures from './Lectures';
import Shop from './Shop';
import Media from './Media';
import Awards from './Awards';
import Staff from './Staff';
import Jobs from './Jobs';
import Wrapper from '../styles/Information';
import Search from './Search';
const Information = () => {
  return (
    <Wrapper>
      <InfoNavBar />

      <div style={{ paddingLeft: '190px', paddingTop: '10px' }}>
        <News/>
        <About  />
        <BigIdea  />
        <Lectures/>
        <Shop/>
        <Media/>
        <Awards />
        <Jobs/>
        <Staff/>
        <Search/>
        <FeedBack/>
      </div>
    </Wrapper>
  );
};

export default Information;
