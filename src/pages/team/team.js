import React from 'react';
import Footer from "../../components/footer/footer";
import TeamBanner from "../../components/team/teambanner";
import TeamManagement from "../../components/team/teamManagement";

const Team = () => {
	return (
		<div>
			<TeamBanner/>
			<TeamManagement/>
			<Footer/>
		</div>
	);
};

export default Team;
