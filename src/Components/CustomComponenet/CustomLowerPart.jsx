import React from "react";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import "./CustomLowerPart.css"

const CustomLowerPart = ({ p, image, button, title, hidebutton }) => {
  return (
    <div>
      <div className={`service-container-lower-pt-3 ${image}`}>
        <div className={`service-container-lower-pt-3-image `}>
          <div className="service-container-lower-pt-3-text">
            <Fade Top>
              <h1>{title}</h1>
            </Fade>
            <zoom Top>
              <p>{p}</p>
            </zoom>
            {!hidebutton && (
              <div className="service-container-button">
                <Zoom Top>
                  <button>{button}</button>
                </Zoom>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLowerPart;
