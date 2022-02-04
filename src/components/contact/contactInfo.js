import React from 'react';
import { getInTouch, socialMedia } from "../../utils/data/contact/contactInfo";
import "./contact.css"

const ContactInfo = () => {
	return (
		<div className="contact-info">
			<div className="contact-info-content">
				<div className="contact-info-left">
					<div className="contact-left-top">
						<h2 className="contact-header">
							{getInTouch.header}
						</h2>
						<div className="contact-location">
							{
								getInTouch.items.map((el, i) => (
									<div key={i} className="contact-info-blocks">
										{el.icon}
										<p className="contact-info-p">
											{el.text}
										</p>
									</div>
								))
							}
						</div>
					</div>
					<div className="contact-left-bottom">
						<div className="contact-left-top">
							<h3 className="contact-header">
								{socialMedia.header}
							</h3>
							<div className="contact-location">
								{
									socialMedia.icons.map((el, i) => (
										<a 
											className="contact-social-links"
											href={el.link}
											target="_blank"
											rel="noreferrer">
												{el.icon}
										</a>
									))
								}
							</div>
						</div>
					</div>
				</div>
				<div className="contact-info-right">
					
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
