import React from 'react';
import { navbar, navbtn, navlogo } from "../../utils/data/navbar";
import { NavHashLink } from 'react-router-hash-link';
import "./navbar.css";

const Navbar = () => {
  return (
	  <div className="navbar">
		  <div className="navbar-content">
			  <div className="nav-logo">
				  {navlogo.logo}
			  </div>
				<div className="nav-middle">
				{
					navbar &&
					navbar.map((item, index) => (
							<NavHashLink to={`${item.path}/#top`} key={index} className="navlink-items">
								{item.name}
							</NavHashLink>
						))
					}
				</div>
				<div className="nav-btn">
					<button type="button">
						{navbtn.name}
					</button>
				</div>
		  </div>
	  </div>
  )
};

export default Navbar;
