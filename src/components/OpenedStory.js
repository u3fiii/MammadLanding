import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import whiteToman from "../assets/img/white-toman.svg";

function OpenedStory({ ads, currentAdIndex, setOpenStory, setCurrentAdIndex }) {
  const [currentAd, setCurrentAd] = useState(null);

  const handleClose = () => {
    setOpenStory(false);
  };

  useEffect(() => {
    setCurrentAd(ads[currentAdIndex]);
  }, [ads, currentAdIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) =>
        prevIndex === ads.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [ads.length, setCurrentAdIndex]);

  if (!currentAd || !currentAd.images) {
    return null;
  }

  const formatValueWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const finalPrice = currentAd.price;
  const off = finalPrice * 1.35; // Calculate off as 35% more than finalPrice

  const formattedFinalPrice = formatValueWithCommas(finalPrice);
  const formattedOff = formatValueWithCommas(off.toFixed(0)); // Round off to integer and format with commas

  const handleOpenLink = () => {
    window.open(`https://www.pindo.ir/ads/${currentAd.id}/`, "_blank");
  };

  return (
    <div className="open-story">
      <div className="close-container">
        <div className="rect-progress-container">
          {ads.map((ad, index) => {
            const isCurrent = index === currentAdIndex;
            const isActive = index <= currentAdIndex;
            const rectClasses = `rect ${isCurrent ? "current" : ""} ${
              isActive ? "active" : ""
            }`;
            return <div className={rectClasses} key={index}></div>;
          })}
          <div className="close-btn" onClick={handleClose}>
            <CloseIcon className="open-close-icon" />
          </div>
        </div>
      </div>

      <div className="openstory-img-container">
        <img
          className="openstory-img"
          src={currentAd.images.main}
          alt="Ad Image"
        />

        <div className="bottom-grad"></div>
      </div>
      <div className="openStory-title">{currentAd.title}</div>
      <div className="date-loc">
        {currentAd.seller && (
          <div className="openStory-loc">
            <div>{currentAd.seller.name}</div>
            <StorefrontOutlinedIcon className="date-loc-icon" />
          </div>
        )}
        <div className="openStory-date">
          <div>{currentAd.persian_display_time}</div>
          <AccessTimeIcon className="date-loc-icon" />
        </div>
      </div>
      <div className="open-price-container">
        <div className="prices">
          <div className="off">{formattedOff}</div>
          <div className="final-price">
            <img src={whiteToman} className="white-toman" />
            {formattedFinalPrice}
          </div>
        </div>
        <div className="discount-label">۳۵٪ تخفیف</div>
      </div>
      <div className="open-submit-btn" onClick={handleOpenLink}>
        مشاهده و خرید
      </div>
    </div>
  );
}

export default OpenedStory;
