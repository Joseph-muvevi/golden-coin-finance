import React from 'react';
import { aboutInfo } from "../../utils/data/about/aboutInfo";
import "./about.css";

const AboutIntro = () => {
	return (
		<div className="about-intro">
			<div className="about-intro-content">
				<div className="about-intro-content-left">
					<img
						className="about-intro-img"
						src={aboutInfo.image.image}
						alt={aboutInfo.image.alt}/>
				</div>
				<div className="about-intro-content-right">
					<h5 className="about-intro-header">
						{aboutInfo.header}
					</h5>
					<p className="about-intro-text">
						{aboutInfo.content.paragraph}
					</p>
					<h3 className="about-intro-h3">
						{aboutInfo.content.list.listHeader}
					</h3>
					<div className="about-intro-ul">
						{
							aboutInfo.content.list.listItems.map((li, i) => (
								<div key = {i} className="about-intro-li">
									- 
									<p className="about-intr-li-p">
										{li}
									</p>
								</div>
							))
						}

					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutIntro;
