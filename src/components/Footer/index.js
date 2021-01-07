import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col s12 m6 l6">
          <p>© Copyrights 2019 Stack. All Rights Reserved</p>
        </div>
        <div className="col s12 m6 l6 links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Header;