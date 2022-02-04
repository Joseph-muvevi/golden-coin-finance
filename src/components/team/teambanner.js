import React from 'react';
import Navbar from "../navbar/navbar";
import "./team.css"

const TeamBanner = () => {
	return (
		<div className="team-banner">
		<Navbar/>

		<div className="team-banner-main">
			  <div className="team-main-content">
					<div className="top-banner-line"></div>
				  <h1 className="banner-header">
					  Our Team
				  </h1>
			  </div>
		</div>
	</div>
	);
};

export default TeamBanner;
