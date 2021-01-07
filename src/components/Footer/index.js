import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';

function Header() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col s12 m6 l6">
          <p>© Copyrights 2019 Stack. All Rights Reserved</p>
        </div>
        <div className="col s12 m6 l6 links">
          <a href="/#">Privacy Policy</a>
          <a href="/#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Header;