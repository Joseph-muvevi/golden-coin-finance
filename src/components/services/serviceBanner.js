import React from 'react';
import Navbar from "../navbar/navbar";
import "./service.css"

const ServiceBanner = () => {
  return (
	  <div className="service-banner">
		  <Navbar/>

		  <div className="service-banner-main">
				<div className="service-main-content">
			  		<div className="top-banner-line"></div>
					<h1 className="banner-header">
						Services
					</h1>
				</div>
		  </div>
	  </div>
  );
};

export default ServiceBanner;
