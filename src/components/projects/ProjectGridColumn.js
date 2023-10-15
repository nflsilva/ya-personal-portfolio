import React from 'react'


function ProjectGridColumn(props) {
    return (
      <div className="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-4 mb-4">
        <div className="grid-item">
          {props.children}
        </div>
      </div>
    );
  }
  
  export default ProjectGridColumn;