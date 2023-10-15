import React from 'react';
import TechnologyIcon from './TechnologyIcon'

const TechnologyList = (props) =>  (
    <div className="row">
        { props.technologies.map((t, i) => {
            return <TechnologyIcon key={i} icon={t.icon} title={t.title} description={t.description} />
        })}
    </div>
);

export default TechnologyList;