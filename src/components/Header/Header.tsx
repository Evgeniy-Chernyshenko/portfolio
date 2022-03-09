import { Container } from '../common/Container/Container';
import styles from './Header.module.css';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Navigation />
      </Container>
    </header>
  );
};
