import React from 'react';
import "./about.css";
import { topLeft} from "../../utils/data/about/withCard";

const AboutWithCard = () => {
	return (
		<div className="about-with-card">
			<div className="about-width-card-content">
				<div className="about-with-card-top">
					<div className="about-with-card-top-left">
						<h3 className="about-with-card-unit-header">
							{topLeft.header}
						</h3>
						<p className="about-with-card-unit-content">
							{topLeft.content}
						</p>
						<div className="banner-content-links">
							<div className="banner-font-icon">
								{topLeft.icon}
							</div>
							<p className="banner-link">
								{topLeft.buttonText}
							</p>
						</div>
					</div>
					<div className="about-with-card-top-right">

					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutWithCard;
