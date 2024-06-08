import React from 'react'
import NavBarBottom from '../components/NavBarBottom'
import ProjectIcons from '../components/ProjectIcons'
import { arr } from '../utils/constants'
import Wrapper from '../styles/Home'

const Home = () => {
  return (
    <Wrapper>
    <div className="content">
    {
      arr.map((item)=><ProjectIcons hoverImage={item.initialImg} initialImg={item.hoverImage} Name={item.name} Link={item.link}/> )
    }
    </div>
    
    <div className="navbar">
      <NavBarBottom/>
    </div>
    
    </Wrapper>
  )
}

export default Home