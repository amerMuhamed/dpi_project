import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
const Navbar = () => {
const {darkMode,toggle} = useContext(DarkModeContext);
const{currentUser} = useContext(AuthContext)
  return (
    <div className={darkMode ? "navbar  text-white bg-[#222]" : "navbar"}>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon/>
<div >
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle}  className="cursor-pointer"/>
        ) : (
          <DarkModeOutlinedIcon onClick={toggle}  className="cursor-pointer" />
        )}
     </div>   
        <GridViewOutlinedIcon cursor="pointer"/>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <div className="hidden sm:flex gap-5">
        <PersonOutlinedIcon className="cursor-pointer "  />
        <EmailOutlinedIcon className="cursor-pointer  " />
        </div>
        <NotificationsOutlinedIcon  className="cursor-pointer"/>
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;