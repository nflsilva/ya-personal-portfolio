import React from 'react';
import Section from '../layout/Section';
import TechnologyGrid from '../technologies/TechnologyGrid';

function TechnologySection(props) {
    return ( 
        props.technologies.techs.length > 0 &&
            <Section title="Technologies" description={props.technologies.description} anchor="technologies">
                <TechnologyGrid technologies={props.technologies.techs}/>
            </Section>
    );
}

export default TechnologySection;