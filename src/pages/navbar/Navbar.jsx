import "./Navbar.scss";
import logo from "../../assets/logo-cart.png";
import profile from "../../assets/profile.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>EASY</h3>
        <h3>FARM</h3>
        <img src={logo} alt="" />
      </div>
      <div className="delivery">
        <h5>Delivery to</h5>
        <LocationOnOutlinedIcon />
        <div className="address">
          <p>Coimbatore</p>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="What are you looking for?" />
        <SearchOutlinedIcon className="search-icon" />
      </div>
      <div className="cart">
        <div className="wishlist">
          <FavoriteBorderOutlinedIcon className="wishlist-icon" />
        </div>
        <div className="bag">
          <LocalMallOutlinedIcon />
          <div className="bag-count">
            <p>3</p>
          </div>
        </div>
        <div className="carts">
          <div className="cart">
            <p>My cart</p>
            <p className="cost">$200.45</p>
          </div>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
      <div className="profile">
        <img src={profile} alt="" />
        <h3 className="profile-name">Naveen</h3>
        <KeyboardArrowDownOutlinedIcon />
      </div>
    </div>
  );
};

export default Navbar;
