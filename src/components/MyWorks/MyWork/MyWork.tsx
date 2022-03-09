import styles from './MyWork.module.css';

export const MyWork = (props: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.myWork}>
      <a className={styles.imgBlock} href="#">
        <img className={styles.img} src={props.img} alt="My work" />
        <button className={styles.button}>Смотреть</button>
      </a>
      <h3>{props.title}</h3>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};
