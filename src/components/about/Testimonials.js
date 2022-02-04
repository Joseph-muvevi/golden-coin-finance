import React from 'react';
import { aboutClient } from "../../utils/data/about/aboutClients";
import "./about.css"

const Testimonials = () => {
	return (
		<div className="testimonials">
			<div className="testimonials-content">
				<h2 className="testimonials-header">
					{aboutClient.header}
				</h2>
				<div className="testimonials-body">
					{
						aboutClient.body.map((el, i) => (
							<div key={i} className="testimonials-card-unit">
								<div className="testimonials-stars">
									{/* stars here */}
								</div>
								<p className="testimonials-paragraph">
									{el.content}
								</p>
								<div className="testimonials-author">
									<img 
										className="testimonials-author-image"
										src={el.author.image.image}
										alt={el.author.image.alt}/>
									<ul className="testimonials-author-section">
										<li className="testimonials-author-name">
											{el.author.name}
										</li>
										<li className="testimonials-author-title">
											{el.author.title}
										</li>
									</ul>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
