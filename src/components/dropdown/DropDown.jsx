import { Handshake } from "@mui/icons-material";
import "./DropDown.scss";

import { groceryCategories } from "../../data/groceryCategories";

import React, { useState } from "react";

export const DropDown = (props) => {
  // const [hide, setHide]= useState("none")
  const [subcat, setSubcat] = useState();
  const keys = Object.keys(groceryCategories);

  const handleCatogory = (e) => {
    const { innerText } = e.target;
    console.log(groceryCategories[innerText.toLowerCase()]);
    setSubcat(groceryCategories[innerText.toLowerCase()]);
    // handleCategorys();
  };

  // const handleCategorys=()=>{
  //   hide === "none" ? setHide("block") : setHide("none")
  // }
  return (
    <div className="DropDown" style={{ display: `${props.hide}` }}>
      <div className="category">
        {keys.map((data) => {
          return (
            <div>
              <p onClick={handleCatogory}>
                {data}
                <CategoryDropDown hide={subcat} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CategoryDropDown = (props) => {
  return (
    <div className="categoryDropDown" style={{ display: `${props.hide}` }}>
      <div className="data">data</div>
    </div>
  );
};
