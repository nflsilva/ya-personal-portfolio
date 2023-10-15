import React from 'react';
import { mobileApps, games, tools, technologies } from '../../constants/data';

const NavigationBar = () =>  (
  <header>
    <nav className="navbar navbar-expand bd-navbar bg-body-tertiary">
      <div className="container flex-column flex-md-row">

        <a className="navbar-brand" href="#">nflsilva.dev</a>

        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">

            { mobileApps.length > 0 && 
              <li className="nav-item">
                <a className="nav-link" href="#Mobile Apps">Mobile Apps</a>
              </li>
            }

            { games.length > 0 && 
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Games">Games</a>
              </li>
            }

            { tools.length > 0 && 
              <li className="nav-item">
                <a className="nav-link" href="#Tools">Tools</a>
              </li>
            }

            { technologies.length > 0 && 
              <li className="nav-item">
                <a className="nav-link" href="#Technologies">Technologies</a>
              </li>
            }

            <li className="nav-item">
              <a className="nav-link" href="#About me">About me</a>
            </li>
            
          </ul>
        </div>

      </div>
      
    </nav>
  </header>
);

export default NavigationBar;