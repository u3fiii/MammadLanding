import React, { useEffect, useState } from "react";
import Seller from "./Seller";

function BestSellers() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.pindo.ir/v2/");
      const data = await response.json();
      const allSellers = data.data.widgets[2].data.sellers;
      const randomSellers = getRandomSellers(allSellers, 7);
      setSellers(randomSellers);
      console.log(randomSellers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRandomSellers = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div className="best-sellers">
      <h2 className="sellers-title">فروشگاه‌های برتر</h2>
      {/* Render the sellers data */}
      <div className="sellers-container">
        {sellers.map((seller) =>
          seller.logo ? <Seller key={seller.id} seller={seller} /> : null
        )}
      </div>
    </div>
  );
}

export default BestSellers;
