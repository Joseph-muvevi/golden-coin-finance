import React,{useState} from 'react';
import { navbar, navbtn, navlogo } from "../../utils/data/navbar";
import { NavHashLink } from 'react-router-hash-link';
import "./navbar.css";

const Navbar = () => {
	const [navOpened, setNavOpened] = useState(false);
	const [mobileMenuClassName, setMobileMenuClassName] = useState("")
	const [navContentClassName, setNavContentCLassName] = useState("")

	const handleBtnClick = () => {
		setNavOpened(!navOpened)

		if(navOpened){
			setMobileMenuClassName("active")
			setNavContentCLassName("phone")
		} else {
			setMobileMenuClassName("")
			setNavContentCLassName("")
		}
	}

  return (
	  <div className="navbar">
			<div className="nav-logo-phone">
				<img 
					src={navlogo.logo}
					alt={navlogo.alt}
					className="navlogo-image"/>
			</div>	
		  <nav className={"navbar-content"+ navContentClassName}>
			  <div className="nav-logo">
				<img 
						src={navlogo.logo}
						alt={navlogo.alt}
						className="navlogo-image"/>
			  </div>
				<div className="nav-middle">
				{
					navbar &&
					navbar.map((item, index) => (
							<NavHashLink to={`${item.path}#top`} key={index} className="navlink-items">
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
		  </nav>
		  <div className={"hamburger "  + mobileMenuClassName } onClick={handleBtnClick}>
			  <div className="bar"></div>
			  <div className="bar"></div>
			  <div className="bar"></div>
		  </div>
	  </div>
  )
};

export default Navbar;
