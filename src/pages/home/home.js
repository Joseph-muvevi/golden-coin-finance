import React from 'react';
import Banner from "../../components/home/banner";
import Homeabout from "../../components/home/homeabout";
import Homeempty from "../../components/home/homeempty";
import Homeproject from "../../components/home/homeproject";
import Homeservices from "../../components/home/homeservices";
import Hometeam from "../../components/home/hometeam";

const Home = () => {
  return (
      <div className="home">
          <Banner/>
          <Homeservices/>
          <Homeabout/>
          <Homeempty/>
          <Homeproject/>
          <Hometeam/>
      </div>
  );
};

export default Home;
