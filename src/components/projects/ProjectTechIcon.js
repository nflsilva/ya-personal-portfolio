import React from 'react';
import { imageFromLogoName } from '../../constants/data';

const ProjectTechIcon = (props) =>  (
    <div className="col-4 col-sm-5 col-md-4 col-lg-4 col-xl-4 mb-2">
        <img src={ imageFromLogoName(props.name) } alt={props.name} className="offset-2 col-8"/>
        <div className="col-12 text-center mt-1">
            <p className="text-muted" style={{fontSize: "0.75rem", marginBottom: "0px"}}>{props.name}</p>
        </div>
    </div>
);
  
export default ProjectTechIcon;
