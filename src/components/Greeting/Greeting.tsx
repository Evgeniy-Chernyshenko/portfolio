import { Container } from '../common/Container/Container';
import styles from './Greeting.module.css';

export const Greeting = () => {
  return (
    <section className={styles.greeting}>
      <Container className={styles.greetingContainer}>
        <div className={styles.textBlock}>
          Привет всем
          <h1>Я Петр Иванов</h1>
          Frontend developer
        </div>
        <div className={styles.photoBlock}></div>
      </Container>
    </section>
  );
};
