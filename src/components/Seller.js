import React from "react";

function Seller({ seller }) {
  return (
    <div className="seller-container">
      <img src={seller.logo} alt={seller.name} className="seller-logo" />
      <div>{seller.name}</div>
      <div className="ads-count">تعداد آگهی {seller.ads_count}</div>
    </div>
  );
}

export default Seller;
