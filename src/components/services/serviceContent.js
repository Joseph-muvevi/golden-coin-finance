import React from 'react';
import "./service.css"
import { serviceIntroCards, serviceIntroHeader } from "../../utils/data/services/servicesIntro";

const ServiceContent = () => {
  return (
		<div className="service-content">
			<div className="service-intro-top">
				<h2 className="service-header">
					{serviceIntroHeader}
				</h2>
				<div className="full-horizontal-line"></div>
			</div>
			<div className="service-intro-bottom">
				{
					serviceIntroCards.map((el, i) => (
						<div key={i} className="service-bottom-unit">
							<h3 className="home-service-unit-header">
								{el.header}
							</h3>
							<p className="home-service-unit-content">
								{el.content}
							</p>
							<div className="content-links">
								<div className="banner-font-icon">
									{el.action.icon}
								</div>
								<a className="card-link" href={el.action.link}>
									<p className="p-card-link">
										{el.action.name}
									</p>
								</a>
							</div>
						</div>
					))
				}
			</div>
		</div>
  );
};

export default ServiceContent;
