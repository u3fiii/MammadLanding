import React from "react";

import catImg1 from "../assets/img/cat1.svg";
import catImg2 from "../assets/img/cat2.svg";
import catImg3 from "../assets/img/cat3.svg";
import catImg4 from "../assets/img/cat4.svg";

function Categories() {
  return (
    <div className="categories">
      <div className="category cat1">
        <img src={catImg1} />
        <div>لوازم‌التحریر</div>
      </div>
      <div className="category cat1">
        <img src={catImg2} />
        <div>کیف و کوله</div>
      </div>
      <div className="category cat1">
        <img src={catImg3} />
        <div>پوشاک</div>
      </div>
      <div className="category cat1">
        <img src={catImg4} />
        <div>لوازم ورزشی</div>
      </div>
    </div>
  );
}

export default Categories;
