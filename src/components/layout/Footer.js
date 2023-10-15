import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>  (
    <footer className="offset-1 col-10 mt-4 bg-dark text-white py-3">
      <div className="container">
        <div className="row">

          <div className="col-8">
            <p>&copy; 2023 Nelson Lopes da Silva</p>
          </div>

          <div className="col-4 d-flex justify-content-end">
            <a href="https://github.com/nflsilva" style={{ color: 'white', marginRight: '' }}>
              <FontAwesomeIcon icon={faGithub} className="fa-2x"/>
            </a>
            <div className="col-5 d-flex justify-content-end">
              <a href="https://linkedin.com/nflsilva" style={{ color: 'white' }}>
                <FontAwesomeIcon icon={faLinkedin} className="fa-2x"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
);

export default Footer;