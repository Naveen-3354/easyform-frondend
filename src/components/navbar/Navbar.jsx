import "./Navbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import Switch from "../switch/Switch";
import Theme from "../themes/Theme";
import { DropDown } from "../dropdown/DropDown";
import { useState } from "react";
// import {groceryCategories} from "../../data/groceryCategories"

const Navbar = () => {
  const [categorydropDown, setCategoryDropDown] = useState("none")

  const handleCategory=()=>{
    categorydropDown === "none" ? setCategoryDropDown("block") : setCategoryDropDown("none")
  }

  
  return (
    <div className="navbar">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search...." />
        <SearchRoundedIcon className="searchIcon" />
      </div>
      <div className="links">
        <div className="home link">
          <h3>Home</h3>
        </div>
        <div className="category link" >
          <GridViewRoundedIcon className="link-icon" onClick={handleCategory}/>
          {/* <h3>Category</h3> */}
          <DropDown hide={categorydropDown} />
        </div>
        <div className="bag link">
          <ShoppingBagRoundedIcon className="link-icon" />
          {/* <h3>Bag</h3> */}
        </div>
        <div className="order link">
          <ShoppingCartRoundedIcon className="link-icon" />
          {/* <h3>Orders</h3> */}
        </div>
        <div className="notification link">
          <NotificationsRoundedIcon className="link-icon big" />
          {/* <h3>Notification</h3> */}
        </div>
        {/* <div className="theme">
          <Theme />
        </div> */}
        <div className="profile link">
          <AccountCircleRoundedIcon className="link-icon big" />
          <h3>Profile</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
