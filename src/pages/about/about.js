import React from 'react';
import Footer from "../../components/footer/footer";
import AboutBanner from "../../components/about/aboutBanner";
import AboutIntro from "../../components/about/aboutIntro";
import AboutWithCard from "../../components/about/aboutWithCard";
import Testimonials from "../../components/about/Testimonials";

const About = () => {
	return (
		<div>
			<AboutBanner/>
			<AboutIntro/>
			<Testimonials/>
			<AboutWithCard/>
			<Footer/>
		</div>
	);
};

export default About;
