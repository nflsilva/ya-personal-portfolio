import React from 'react';
import ProjectGrid from './ProjectGrid';
import Section from '../layout/Section';

function ProjectBodySection(props) {
  return (
    props.projects.length > 0 &&
      <Section title={props.title} anchor={props.title} description={props.description}>
        <ProjectGrid projects={props.projects}/>
      </Section>
  );
}

export default ProjectBodySection;