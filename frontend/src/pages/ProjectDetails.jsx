import { useLocation, Link } from "react-router-dom";
import React, { useState } from "react";
import Wrapper from "../styles/ProjectDetails";
import ImageSlider from "../components/ImageSlider";
import { ArrowBack } from "../components/common/icons/ArrowBack";
import CancelIcon from "@mui/icons-material/Cancel";
import { ArrowForward } from "../components/common/icons/ArrowForward";

const DetailsProject = () => {
  const location = useLocation();
  const { item } = location.state;
  const [isPopupVisible, setPopupVisible] = useState(true);

  function togglePopup() {
    setPopupVisible(!isPopupVisible);
  }

  return (
    <Wrapper>
      {isPopupVisible ? (
        <div className="pop-up">
          <div className="cancel-btn">
            <Link to="/">
              {isPopupVisible ? (
                <p onClick={togglePopup}>
                  <CancelIcon fontSize="large" />
                </p>
              ) : null}
            </Link>
          </div>
          <div className="cancel-btn btn2">
            {isPopupVisible ? (
              <h1 onClick={togglePopup}>
                <ArrowForward fontSize={"large"} />
              </h1>
            ) : null}
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
                    NAME: <b>{item.data.name}</b>
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
          <ImageSlider backBtn={togglePopup} item={item} />
        </div>
      )}
    </Wrapper>
  );
};

export default DetailsProject;
