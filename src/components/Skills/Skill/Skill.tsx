import styles from './Skill.module.css';

export const Skill = (props: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.skill}>
      <div className={styles.icon}></div>
      <h3>{props.title}</h3>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};
