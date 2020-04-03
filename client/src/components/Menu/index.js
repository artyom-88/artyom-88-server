import React from 'react';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../../const';
import styles from './styles.module.scss';

/**
 * Menu items render function
 */
const renderItems = () =>
  PAGES.map(({ id, name, url }) => (
    <li key={id} className='nav-item'>
      <NavLink exact={!url} className={`nav-link ${styles.item}`} activeClassName={styles.active} to={`/${url}`}>
        {name}
      </NavLink>
    </li>
  ));

/**
 * /**
 * Navigation menu component
 */
const Menu = () => (
  <nav className={`flexBox ${styles.container}`} id='menu'>
    <ul className='nav'>{renderItems()}</ul>
  </nav>
);

export default Menu;
