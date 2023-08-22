import React, { useState } from "react";
import topbnr from "../assets/img/topbnr3.svg";
import copy from "../assets/img/Copy.svg";
import whiteCheck from "../assets/img/white-checksvg.svg";

function TopBanner() {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleCopyButtonClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
        setIsClicked(false);
      }, 1500);
    }, 400);
  };

  return (
    <div className="top-banner">
      <div className="top-part">
        <div className="left-part">
          <img src={topbnr} alt="Top Banner" className="img3d" />
          <div className="right-text">
            <div className="bnr-title">کد تخفیف ۳۵ درصدی</div>
            <div className="code">PNDz4r77</div>
          </div>
        </div>

        <div
          className={`copy-btn ${isClicked ? "clicked" : ""}`}
          onClick={handleCopyButtonClick}
        >
          <div className="copy-text">
            {isClicked ? "کپی شد!" : "کپی کردن کد"}
          </div>
          <div className="copy-img">
            <img
              src={isClicked ? whiteCheck : copy}
              alt={isClicked ? "White Checkmark" : "Copy Icon"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
