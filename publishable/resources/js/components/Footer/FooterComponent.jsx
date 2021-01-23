import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FooterComponent = () => (
  <footer className="footer bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <a href="/">About</a>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="/">Contact</a>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="/">Terms of Use</a>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
          <p className="text-muted small mb-4 mb-lg-0">
            &copy; Your Website 2020. All Rights Reserved.
          </p>
        </div>
        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mr-3">
              <a href="/facebook" aria-label="go to facebook website">
                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" fixedWidth />
              </a>
            </li>
            <li className="list-inline-item mr-3">
              <a href="/twitter" aria-label="go to twitter website">
                <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" fixedWidth />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/instagram" aria-label="go to instagram website">
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" fixedWidth />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterComponent;
