import { Container } from '../common/Container/Container';
import styles from './RemoteWork.module.css';

export const RemoteWork = () => {
  return (
    <div className={styles.remoteWork}>
      <Container className={styles.remoteWorkContainer}>
        <h2>Рассматриваю варианты удаленной работы</h2>
        <button>Нанять меня</button>
      </Container>
    </div>
  );
};
