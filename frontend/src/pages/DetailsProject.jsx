import { useLocation, Link } from "react-router-dom";
import Wrapper from "../styles/DetailsProject";
import ImageSlider from "../components/ImageSlider";
import { useState, useEffect } from "react";

const Project = () => {
  const location = useLocation();
  const item = location.state.item;
  const [istrue, setIstrue] = useState(true);

  function handleClick() {
    setIstrue(!istrue);
  }

  return (
    <Wrapper>
      {istrue ? (
        <div className={"pop-up"}>
          <div className="cancel-btn">
            <Link to="/">
              {istrue ? <h1 onClick={handleClick}>X</h1> : null}
            </Link>
          </div>
          <div className="cancel-btn btn2">
            {istrue ? <h1 onClick={handleClick}>{">"}</h1> : null}
          </div>
          <div className="project">
            <div className="project-left">
              <div className="product-details">
                <div className="details">
                  <h4>PROJECT DETAILS</h4>
                  <br />
                  <br />
                  <Link to="/">
                    <img src={item.initialImg} alt="" className="logo" />
                  </Link>
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
            </div>
            <div className="product-right">
              <div className="class-img">
                <img src={item.data.img[0]} alt="" className="banner" />
              </div>
              <div className="product-desc">
                <p>{item.data.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="slide-left">
          <ImageSlider backBtn={handleClick} item={item} />
        </div>
      )}
    </Wrapper>
  );
};

export default Project;