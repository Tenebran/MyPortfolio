import React from 'react';
import './Nav.scss';

export default function Nav() {
  return (
    <div className="nav">
      <a href="/#" className="nav__link">
        Main
      </a>
      <a href="/#" className="nav__link">
        Skills
      </a>
      <a href="/#" className="nav__link">
        Projects
      </a>
      <a href="/#" className="nav__link">
        Contacts
      </a>
    </div>
  );
}
