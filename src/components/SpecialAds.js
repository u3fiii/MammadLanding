import React, { useEffect, useState } from "react";
import toman from "../assets/img/Toman.svg";
import OpenedStory from "./OpenedStory";

function SpecialAds() {
  const [ads, setAds] = useState([]);
  const [openStory, setOpenStory] = useState(false); // New state for controlling OpenedStory component visibility
  const [currentAdIndex, setCurrentAdIndex] = useState(null); // New state to store the ID of the selected ad

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.pindo.ir/v1/category/stationary/"
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setAds(data.data.advertisements);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getRandomAds = () => {
    const filteredAds = ads.filter((ad) => ad.images);
    const shuffledAds = filteredAds.sort(() => 0.5 - Math.random());
    return shuffledAds.slice(0, 9);
  };

  const randomAds = getRandomAds();

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  const handleOpenStory = (index) => {
    setOpenStory(true);
    setCurrentAdIndex(index);
  };

  return (
    <div className="container">
      <div className="container-title">
        <div>پیشنهاد ویژه</div>
        <div className="stationary"> لوازم‌التحریر</div>
      </div>
      <div className="special-ads-wrapper">
        <div className="special-ads">
          {randomAds.map((ad, index) => (
            <div
              key={ad.id}
              className="special-ad"
              onClick={() => handleOpenStory(index)}
            >
              <div className="image-wrapper">
                <img
                  src={ad.images && ad.images.main}
                  className="special-img"
                />
              </div>
              <div className="price-container">
                <div className="price">{formatPrice(ad.price)}</div>
                <img className="toman" src={toman} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {openStory && (
        <OpenedStory
          ads={randomAds}
          currentAdIndex={currentAdIndex}
          setOpenStory={setOpenStory}
          setCurrentAdIndex={setCurrentAdIndex}
        />
      )}
    </div>
  );
}

export default SpecialAds;
