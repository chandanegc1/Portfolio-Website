import React, { useState, useEffect } from "react";
import Wrapper from "../styles/ImageSlider";

const ImageSlider = ({item}) => {
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
    <div className="product-img ">
            <img src={item.data.img[2]} alt="" className="slid" />
            <img src={item.data.img[1]} alt="" className="slid" />
            <img src={item.data.img[0]} alt="" className="slid" />
            <img src={item.data.img[3]} alt="" className="slid" />
            <img src={item.data.img[4]} alt="" className="slid" />
            <div className="button prev-button" onClick={prev}>
            {"<<"}
            </div>
            <div className="button next-button" onClick={next}>
            {">>"}
            </div>
          </div>
    </Wrapper>
  )
}

export default ImageSlider