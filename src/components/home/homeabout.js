import React from 'react';
import { aboutImg, aboutStatement, homeAboutIntro } from "../../utils/data/home/homeAbout";
import "./home.css";

const Homeabout = () => {
	return (
		<div className="home-about">
			<div className="home-about-content">
				<div className="home-about-left">
					<div className="home-about-left-top">
						<h2 className="home-about-header">
							{homeAboutIntro.header}
						</h2>
						<p className="home-about-subhead">
							{homeAboutIntro.content}
						</p>
					</div>
					<div className="home-about-content-info">
						{
							aboutStatement.map((el, i) => (
								<div key={i} className="home-about-unit">
									<h3 className="home-about-unit-header">
										{el.header}
									</h3>
									<p className="home-about-unit-content">
										{el.content}
									</p>
								</div>
							))
						}
					</div>
				</div>
				<div className="home-about-right">
					<img 
						className="home-about-image"
						src={aboutImg.image} 
						alt={aboutImg.alt}/>
				</div>
			</div>
		</div>
	);
};

export default Homeabout;
