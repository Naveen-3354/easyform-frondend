import { Handshake } from "@mui/icons-material";
import "./DropDown.scss";

import { groceryCategories } from "../../data/groceryCategories";

import React, { useEffect, useState } from "react";

export const DropDown = (props) => {
  const [subcat, setSubcat] = useState({ hide: "none" });

  const handleCatogory = (data) => {
    // console.log(data);
    // const grainsArray = Object.entries(data.data).map(([category, items]) => ({
    //   category,
    //   items,
    // }));
    // console.log(grainsArray);
  };

  return (
    <div className="DropDown" style={{ display: `${props.hide}` }}>
      <div className="category">
        {groceryCategories.map((data, index) => {
          return (
            <div key={index} className="supCat">
              <p onClick={() => handleCatogory(data)}>{data.name}</p>
              {/* <div className="subCat">
                <CategoryDropDown display={subcat} />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CategoryDropDown = (props) => {
  // const keys = Object.keys(props.display["data"]);

  // console.log(keys);
  return (
    <div className="categoryDropDown">
      <div className="data">data</div>
    </div>
  );
};
