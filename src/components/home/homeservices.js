import React from 'react';
import { homeServices } from "../../utils/data/home/homeServices";
import "./home.css"

const Homeservices = () => {
	return (
		<div className="home-services">
			<div className="home-services-content">
				<h2 className="home-service-header">
					Our Services
				</h2>
				<div className="home-service-content-units">
					{
						homeServices.map((el, i) => (
							<div key={i} className="home-service-unit">
								<h3 className="home-service-unit-header">
									{el.header}
								</h3>
								<p className="home-service-unit-content">
									{el.content}
								</p>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Homeservices;
