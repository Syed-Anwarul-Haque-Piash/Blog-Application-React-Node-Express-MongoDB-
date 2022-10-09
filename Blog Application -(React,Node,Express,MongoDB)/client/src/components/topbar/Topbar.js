import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Topbar.css";

const Topbar = () => {
  const {user,dispatch}=useContext(Context);
  const handleLogout=()=>{
     dispatch({type:"LOGOUT"});
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">About</Link>
            </li>
          <li className="topListItem">
            <Link to="/" className="link">Contact</Link>
            </li>
          <li className="topListItem">
            <Link to="/write" className="link">Write</Link>
            </li>
          <li className="topListItem"onClick={handleLogout}>
            {user && "Logout"}
            </li>
        </ul>
      </div>
      <div className="topRight">
        {user ?( 
          <Link to='/settings'>
          <img
          className="topImg"
          src={user.profilePic}
          alt=""
        />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
            <Link to="/login" className="link">Login</Link>
            </li>
            <li className="topListItem">
            <Link to="/register" className="link">Register</Link>
            </li>
          
          
          </ul>
          
        )}
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
