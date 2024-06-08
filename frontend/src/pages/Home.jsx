import React from 'react'
import Wrapper from '../styles/Home'

const Home = () => {
  return (
    <Wrapper>
    <div class="container">
        <div className="header">
        <header className="main-header">
            <nav>
                <ul>
                    <li><a href="#home">CHRONOLOGICAL</a></li>
                    <li><a href="#services">PROGRAMMATIC</a></li>
                    <li><a href="#about">SCALE</a></li>
                    <li><a href="#contact">STATUS</a></li>
                </ul>
            </nav>
        </header>
        </div>
    </div>
    </Wrapper>
  )
}

export default Home