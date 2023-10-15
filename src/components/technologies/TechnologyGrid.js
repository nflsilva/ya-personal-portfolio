import React from 'react';

import { faMobileScreenButton, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import TechnologyIcon from './TechnologyIcon'

var icons = [faMobileScreenButton, faReact, faMobileScreenButton]

const TechnologyList = (props) =>  (
    <div className="row">
        { props.technologies.map((t, i) => {
            return <TechnologyIcon key={i} icon={t.icon} title={t.title} description={t.description} />
        })}
    </div>
);

export default TechnologyList;