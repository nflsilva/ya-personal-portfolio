import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TechnologyIcon = (props) =>  (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
        <FontAwesomeIcon icon={props.icon} className="fa-2x" style={{ color: 'white' }}/>
        <h5 className="mt-2"style={{ color: 'white' }}>{props.title}</h5>
        <div>
            <p className="text-muted">{props.description}</p>
        </div>
    </div>
);
  
export default TechnologyIcon;
