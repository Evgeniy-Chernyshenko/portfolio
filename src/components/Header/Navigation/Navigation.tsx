import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <a href="#">Главная</a>
      <a href="#">Скиллы</a>
      <a href="#">Работы</a>
      <a href="#">Контакты</a>
    </nav>
  );
};
