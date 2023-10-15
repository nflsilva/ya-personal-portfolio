import React from 'react';

import Intro from '../intro/Intro'
import ProjectBodySection from '../projects/ProjectSection';
import TechnologySection from '../technologies/TechnologySection';
import AboutMeSection from '../about-me/AboutMeSection';
import { mobileApps, games, tools, technologies, aboutMe } from '../../constants/data';


function Body() {
  return (
    <div className="body" style={{backgroundColor: "#282c34"}}>
        <div className="container">
          <Intro></Intro>
          <ProjectBodySection title="Mobile Apps" projects={mobileApps} description={"🟥 = under professional context."} />
          <ProjectBodySection title="Games" projects={games} />
          <ProjectBodySection title="Tools" projects={tools} />
          <TechnologySection technologies={technologies} />
          <AboutMeSection about={aboutMe} />
        </div>
      </div>
  );
}

export default Body;