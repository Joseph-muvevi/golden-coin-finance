import React from 'react';
import { topLeft, bottom } from "../../utils/data/services/serviceWithCard";
import "./service.css"


const ServiceSingleCard = () => {
	return (
		<div className="service-with-card">
			<div className="service-width-card-content">
				<div className="service-with-card-top">
					<div className="service-with-card-top-left">
						<h3 className="service-with-card-unit-header">
							{topLeft.header}
						</h3>
						<p className="service-with-card-unit-content">
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
					<div className="service-with-card-top-right">

					</div>
				</div>
				<div className="service-with-card-bottom">
					<h2 className="service-with-card-bottom-left">
						{bottom.leftContent}
					</h2>
					<p className="service-with-card-bottom-right">
						{bottom.rightContent}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceSingleCard;
