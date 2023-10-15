import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SocialIconLink from './SocialIconLink'

const NavigationBar = () =>  (
  <header>
    <nav className="navbar navbar-expand bd-navbar bg-body-tertiary">
      <div className="container flex-column flex-md-row">

        <a className="navbar-brand" href="#">nflsilva.dev</a>

        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link" href="#mobile-apps">Mobile Apps</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#games">Games</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tools">Tools</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#technologies">Technologies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me">About me</a>
            </li>
          </ul>
        </div>

      </div>
      
    </nav>
  </header>
);

export default NavigationBar;