import React from 'react';
import { bannerItems } from "../../utils/data/home/banner";
import Navbar from "../navbar/navbar";
import "./home.css"

const Banner = () => {
	return (
		<div className="banner">
			<Navbar/>
		
			<div className="banner-main">
				<div className="banner-main-content">
					<div className="banner-main-content-left"></div>
					<div className="banner-main-content-right">
						<div className="banner-main-content-right-info">
							<p className="banner-p">
								{bannerItems.content}
							</p>
							<div className="home-banner-content-links">
								<div className="banner-font-icon">
									{bannerItems.icon}
								</div>
								<p className="banner-link">
									{bannerItems.text}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
