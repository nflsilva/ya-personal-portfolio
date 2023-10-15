import React from 'react';

const Interests = (props) =>  (
    <div className="mb-4">
        <p className="text-muted">Some of my personal interests include:</p>
        <div className="row">
            { props.interests.map((p, i) => (
                <div key={i} className='col-12 col-sm-5 col-md-4 mb-1'>
                    <span className="badge text-bg-secondary">{p}</span>
                </div>
            ))}
        </div>
    </div>
);

export default Interests;