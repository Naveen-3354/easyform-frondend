import "./Navbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { DropDown, Notify } from "../dropdown/DropDown";
import { useState } from "react";

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
          <DropDown hide={categorydropDown} />
        </div>
        <div className="bag link">
          <ShoppingBagRoundedIcon className="link-icon" />
        </div>
        <div className="order link">
          <ShoppingCartRoundedIcon className="link-icon" />

        </div>
        <div className="notification link">
          <NotificationsRoundedIcon className="link-icon big" />
          <Notify/>
        </div>
        <div className="profile link">
          <AccountCircleRoundedIcon className="link-icon big" />
          <h3>Profile</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
