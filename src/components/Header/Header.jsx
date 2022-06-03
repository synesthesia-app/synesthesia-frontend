import React from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  useHistory,
} from 'react-router-dom';
import styles from './Header.css';
import About from '../About/About';
import Login from '../../views/Login/Login';
import { useUser } from '../../context/UserProvider';
import AuthButton from '../AuthButton/AuthButton';

export default function Header() {
  const { userObj } = useUser();

  return (
    <header>
      <div className={styles.brand}>
        <Link className={styles.logoStuff} to="/main">
          <img
            className={styles.logo}
            src="../../chromaticLogoFullColor.png"
            alt="chromatic-logo"
          />
          <h1 className={styles.logoType}>CHROMATIC</h1>
        </Link>
      </div>
      <div className={styles.auth}>
        <p className={styles.welcome}>
          {userObj?.username ? `welcome ${userObj.username}` : 'Please sign in'}
        </p>
        <div className={styles.routes}>
          <Link to="/about">About</Link>
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
