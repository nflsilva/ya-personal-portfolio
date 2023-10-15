import React from 'react'


function TimelineEvent(props) {
    return (
      <div className="col-12 col-sm-3 mb-4">
        <div className="grid-item">
          <h5 className="mt-2" style={{ color: 'white' }}>{ props.year }</h5>
          <div><small className="text-muted">{ props.description }</small></div>
        </div>
      </div>
    );
  }
  
  export default TimelineEvent;