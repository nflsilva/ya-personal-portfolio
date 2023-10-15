import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialIconLink = (props) =>  (
    <a href={props.href} className="social-icon">
        <FontAwesomeIcon icon={props.icon} width="30" height="30" style={{ color: 'white' }}/>
    </a>
);

export default SocialIconLink;