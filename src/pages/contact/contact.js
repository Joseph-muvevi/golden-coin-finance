import React from 'react';
import ContactBanner from "../../components/contact/contactbanner";
import ContactInfo from "../../components/contact/contactInfo";
import Footer from "../../components/footer/footer";

const Contact = () => {
	return (
		<div>
			<ContactBanner/>
			<ContactInfo/>
			<Footer/>
		</div>
	);
};

export default Contact;
