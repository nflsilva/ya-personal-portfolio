import React from 'react';

import './WavingHandStyle.css';

const Intro = () =>  (
    <div className="App-header">
        <div className="container" style={{paddingLeft: "0px"}}>
            <div className="row">
                <div className="offset-1 col-10 col-sm-8">
                    <h1>Hello. My name is Nelson 👋</h1>
                    <h1>Welcome To</h1>
                    <h1>My Personal Portfolio</h1>
                    <small className="text-muted">The purpose of this website is to showcase my professional journey and some personal projects that I've built in my free time.</small>
                </div>
            </div>
        </div>
    </div>
);

export default Intro;