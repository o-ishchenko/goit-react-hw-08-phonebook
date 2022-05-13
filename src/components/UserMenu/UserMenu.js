import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome, {name}</span>

      <Button
        variant="outlined"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>

      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button> */}
    </div>
  );
}
