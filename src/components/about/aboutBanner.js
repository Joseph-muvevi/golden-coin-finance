import React from 'react';
import Navbar from "../navbar/navbar";
import "./about.css"

const AboutBanner = () => {
	return (
		<div className="about-banner">
		<Navbar/>

		<div className="about-banner-main">
			  <div className="about-main-content">
					<div className="top-banner-line"></div>
				  <h1 className="banner-header">
					  About us
				  </h1>
			  </div>
		</div>
	</div>
	);
};

export default AboutBanner;
