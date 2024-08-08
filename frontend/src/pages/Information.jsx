import React from 'react';
import InfoNavBar from '../components/InformationPage/InfoNavBar';
import About from '../components/InformationPage/About';
import News from '../components/InformationPage/News';
import BigIdea from '../components/InformationPage/BigIdea';
import FeedBack from '../components/InformationPage/FeedBack';
import Lectures from '../components/InformationPage/Lectures';
import Shop from '../components/InformationPage/Shop';
import Media from '../components/InformationPage/Media';
import Awards from '../components/InformationPage/Awards';
import Staff from '../components/InformationPage/Staff';
import Jobs from '../components/InformationPage/Jobs';
import Wrapper from '../styles/Information';
import Search from '../components/InformationPage/Search';

const Information = () => {
  return (
    <Wrapper>
      <InfoNavBar />

      <div style={{ paddingLeft: '190px', paddingTop: '10px' }}>
        <News />
        <About />
        <BigIdea />
        <Lectures />
        <Shop />
        <Media />
        <Awards />
        <Jobs />
        <Staff />
        <Search />
        <FeedBack />
      </div>
    </Wrapper>
  );
};

export default Information;
