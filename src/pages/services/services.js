import React from 'react';
import ServiceBanner from "../../components/services/serviceBanner";
import Footer from "../../components/footer/footer";
import ServiceContent from "../../components/services/serviceContent";
import ServiceSingleCard from "../../components/services/serviceWithCard";

const Services = () => {
	return (
		<div className="service-page">
			<ServiceBanner/>
			<ServiceContent/>
			<ServiceSingleCard/>
			<Footer/>
		</div>
	);
};

export default Services;
