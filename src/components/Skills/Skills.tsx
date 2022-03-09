import { Container } from '../common/Container/Container';
import { Skill } from './Skill/Skill';
import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <section className={styles.skills}>
      <Container className={styles.skillsContainer}>
        <h2>Skills</h2>
        <div className={styles.skillsItemsContainer}>
          <Skill
            icon=""
            title="Skill title 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, hic debitis? Impedit, illo doloremque? Illo reprehenderit accusamus assumenda. Quis, praesentium!"
          />
          <Skill
            icon=""
            title="Skill title 2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, hic debitis? Impedit, illo doloremque? Illo reprehenderit accusamus!"
          />
          <Skill
            icon=""
            title="Skill title 3"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, hic debitis? Impedit, illo doloremque?"
          />
        </div>
      </Container>
    </section>
  );
};
