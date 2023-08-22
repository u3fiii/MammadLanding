import React, { useEffect } from "react";
import toman from "../assets/img/Toman.svg";

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function TabAd({ ad }) {
  const handleOpenLink = () => {
    window.open(`https://www.pindo.ir/ads/${ad.id}/`, "_blank");
  };

  const netPrice = ad.price;
  const offPrice = Math.round(netPrice * 1.35);

  return (
    <div className="tab-ad" onClick={handleOpenLink}>
      <img src={ad.images && ad.images.main} className="tab-img" />
      <div className="tab-ad-title">{ad.title}</div>
      <div className="price-cont">
        <div className="off-price">{formatPrice(offPrice)}</div>
        <div className="net-price">
          {formatPrice(netPrice)}
          <img src={toman} alt="Toman" />
        </div>
      </div>
    </div>
  );
}

export default TabAd;
