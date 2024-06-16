import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Wrapper from "../styles/project";

const Project = () => {
  const location = useLocation();
  const item = location.state.item;

  const [counter, setCounter] = useState(0);
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const sliderElements = document.querySelectorAll(".slid");
    sliderElements.forEach((item, index) => {
      item.style.left = `${index * 100}%`;
    });
    setSlider(sliderElements);
  }, []);

  const slideImg = () => {
    slider.forEach((item) => {
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  useEffect(() => {
    slideImg();
  }, [counter]);

  const prev = () => {
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
  };

  const next = () => {
    setCounter((prevCounter) => Math.min(prevCounter + 1, slider.length - 1));
  };

  return (
    <Wrapper>
      <Link to="/" className="cancel-btn">
        <h1>X</h1>
      </Link>
      <div className="project">
        <div className="product-details">
          <div className="details">
            <h4>PROJECT DETAILS</h4>
            <br />
            <br />
            <Link to="/"><img src={item.initialImg} alt="" className="logo" /></Link>
            <p>{item.name}</p>
            <br />
            <p>
              Name: <b>{item.data.name}</b>
            </p>
            <p>
              CATEGORY: <b>{item.data.category}</b>
            </p>
            <p>
              YEAR: <b>{item.data.year}</b>
            </p>
            <p>
              STATUS: <b>{item.data.status}</b>
            </p>
            <p>
              LOCATION: <b>{item.data.location}</b>
            </p>
          </div>
        </div>
        <div className="product-right">
          <div className="product-img">
            <img src={item.data.img[2]} alt="" className="slid" />
            <img src={item.data.img[1]} alt="" className="slid" />
            <img src={item.data.img[0]} alt="" className="slid" />
            <div className="button prev-button" onClick={prev}>
            {"<<"}
            </div>
            <div className="button next-button" onClick={next}>
            {">>"}
            </div>
          </div>
          <div className="product-desc">
            <p>{item.data.description}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Project;
