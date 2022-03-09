import { Container } from '../common/Container/Container';
import styles from './HireMe.module.css';

export const HireMe = () => {
  return (
    <section className={styles.hireMe}>
      <Container className={styles.hireMeContainer}>
        <h2>Контакты</h2>
        <form className={styles.form}>
          <input type="text" />
          <input type="text" />
          <textarea></textarea>
          <button>Отправить</button>
        </form>
      </Container>
    </section>
  );
};
