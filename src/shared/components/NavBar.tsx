import React from 'react';
import { NavLink } from 'react-router';

// Styles
import styles from './styles/navbar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbarContainer}>
      <NavLink className={styles.navLink} to='/' end>
        Home
      </NavLink>
      <NavLink className={styles.navLink} to='/about' end>
        About Me
      </NavLink>
      <NavLink className={styles.navLink} to='/projects' end>
        Projects
      </NavLink>
      <NavLink className={styles.navLink} to='/services' end>
        Services
      </NavLink>
    </nav>
  );
};

export default NavBar;
