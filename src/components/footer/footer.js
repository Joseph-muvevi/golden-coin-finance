import React from 'react';
import "./footer.css"
import { NavHashLink } from "react-router-hash-link";
import { footerLeft, footerRight } from "../../utils/data/footer";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="footer-left">
					<div className="footer-logo">
						{footerLeft.logo.logo}
					</div>
					<p className="footer-p">
						{footerLeft.content}
					</p>
				</div>
				<div className="footer-right">
					<div className="footer-links">
							{
								footerRight.links.map((link, i) => (
									<NavHashLink key={i} to={link.path} className="footer-link">
										{link.name}
									</NavHashLink>
								))
							}
					
					</div>
					<div className="footer-social-links">
						{
							footerRight.socialMedia.map((link, i) => (
								<a key={i} className="social-link" href={link.link} target="_blank" rel="noreferrer">
									{link.icon}
								</a>
							))
						}
					</div>
				</div>
			</div>
			<hr className="footer-hr"/>
			<div className="footer-botom">
				<p className="copyright">
					Copyright © 2022
				</p>
			</div>
		</footer>
	);
};

export default Footer;
