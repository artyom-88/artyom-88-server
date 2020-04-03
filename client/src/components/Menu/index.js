import React from 'react';
import {NavLink} from 'react-router-dom';
import {PAGES} from '../../const';
import styles from './styles.module.scss';

/**
 * Menu items render function
 */
const renderItems = () =>
  PAGES.map(
    ({id, name, url}) => (
      <NavLink exact={!url} className={styles.item} activeClassName={styles.active} to={`/${url}`} key={id}>
        {name}
      </NavLink>
    )
  );

/**
 * /**
 * Navigation menu component
 */
const Menu = () => (
  <nav className={`flexBox ${styles.container}`} id='menu'>
    {renderItems()}
  </nav>
);

export default Menu;
