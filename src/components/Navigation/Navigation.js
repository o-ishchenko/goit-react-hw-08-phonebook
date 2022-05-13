import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
