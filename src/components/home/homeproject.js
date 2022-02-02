import React from 'react';
import { bottom, topLeft } from "../../utils/data/home/homeproject";

const Homeproject = () => {
	return (
		<div className="home-project">
			<div className="home-project-content">
				<div className="home-project-top">
					<div className="home-project-top-left">
						<h3 className="home-project-unit-header">
							{topLeft.header}
						</h3>
						<p className="home-project-unit-content">
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
					<div className="home-project-top-right">

					</div>
				</div>
				<div className="home-project-bottom">
					<h2 className="home-project-bottom-left">
						{bottom.leftContent}
					</h2>
					<p className="home-project-bottom-right">
						{bottom.rightContent}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Homeproject;
