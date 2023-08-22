import React from "react";
import TabAd from "./TabAd";

function TabAds({ math }) {
  const filteredAds = math.filter((ad) => ad.images); // Filter ads with images property set to true

  return (
    <div className="tab-ads">
      {filteredAds.map((ad, index) => (
        <TabAd ad={ad} key={index} />
      ))}
    </div>
  );
}

export default TabAds;
