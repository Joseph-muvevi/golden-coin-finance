import React from 'react';
import { management } from "../../utils/data/team/management";
import "./team.css";

const TeamManagement = () => {
  return (
	  <div className="team-management">
		  <div className="team-management-content">
			  <h2 className="team-management-header">
					{management.header}
			  </h2>
			  <div className="team-management-body">
					{
						management.cards.map((el, i) => (
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
										src={el.person.image.image}
										alt={el.person.image.alt}/>
									<ul className="testimonials-author-section">
										<li className="testimonials-author-name">
											{el.person.name}
										</li>
										<li className="testimonials-author-title">
											{el.person.title}
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

export default TeamManagement;
