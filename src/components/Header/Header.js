import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.headerLogo} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.header.headerPage1}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.header.headerPage2}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{settings.header.headerPage3}</NavLink>   
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;