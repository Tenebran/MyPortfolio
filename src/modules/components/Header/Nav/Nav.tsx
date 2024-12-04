import React from 'react';
import './Nav.scss';
import { Link } from 'react-scroll';

export default function Nav() {
  return (
    <div className="nav">
      <Link
        activeClass="active"
        to="main"
        className="nav__link"
        spy={true}
        smooth={true}
        duration={500}>
        Main
      </Link>
      <Link
        activeClass="active"
        to="skills"
        className="nav__link"
        spy={true}
        smooth={true}
        duration={500}>
        Skills
      </Link>
      <Link
        activeClass="active"
        to="projects"
        className="nav__link"
        spy={true}
        smooth={true}
        duration={500}>
        Projects
      </Link>
      <Link
        activeClass="active"
        to="certificates"
        className="nav__link"
        spy={true}
        smooth={true}
        duration={500}>
        Certificates
      </Link>
      <Link
        activeClass="active"
        to="contacts"
        className="nav__link"
        spy={true}
        smooth={true}
        duration={500}>
        Contacts
      </Link>
    </div>
  );
}
