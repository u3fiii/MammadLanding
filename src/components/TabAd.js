import React, { useEffect } from "react";

function TabAd({ ad }) {
  const handleOpenLink = () => {
    window.open(`https://www.pindo.ir/ads/${ad.id}/`, "_blank");
  };

  return (
    <div className="tab-ad" onClick={handleOpenLink}>
      <img src={ad.images && ad.images.main} className="tab-img" />
      <div className="tab-ad-title">{ad.title}</div>
    </div>
  );
}

export default TabAd;
