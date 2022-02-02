import React from 'react';
import { left, right } from "../../utils/data/home/homeTeam";

const Hometeam = () => {
	return (
		<div className="home-team">
			<div className="home-team-content">
				<div className="home-team-left">
					<h5 className="home-team-small-header">
						{left.h5}
					</h5>
					<h2 className="home-team-header">
						{left.h2}
					</h2>
				</div>
				<div className="home-team-right">
					<p className="home-team-right-p">
						{right}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hometeam;
