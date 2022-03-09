import { Container } from '../common/Container/Container';
import { MyWork } from './MyWork/MyWork';
import styles from './MyWorks.module.css';

export const MyWorks = () => {
  return (
    <section className={styles.myWorks}>
      <Container className={styles.myWorksContainer}>
        <h2>Мои работы</h2>
        <div className={styles.myWorksItemsContainer}>
          <MyWork
            img="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            title="My work 1"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, quasi?"
          />
          <MyWork
            img="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            title="My work 2"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, quasi?"
          />
        </div>
      </Container>
    </section>
  );
};
