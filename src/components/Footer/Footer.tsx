import { Container } from '../common/Container/Container';
import styles from './Footer.module.css';
import { FooterLink } from './FooterLink/FooterLink';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <h2>Петр Иванов</h2>
        <div className={styles.footerLinksContainer}>
          <FooterLink
            img="https://armonia.md/wp-content/uploads/2017/09/facebook-logo-1.png"
            link="#"
          />
          <FooterLink
            img="https://armonia.md/wp-content/uploads/2017/09/facebook-logo-1.png"
            link="#"
          />
          <FooterLink
            img="https://armonia.md/wp-content/uploads/2017/09/facebook-logo-1.png"
            link="#"
          />
          <FooterLink
            img="https://armonia.md/wp-content/uploads/2017/09/facebook-logo-1.png"
            link="#"
          />
        </div>
        <div className={styles.footerText}>
          © 2022 Все, что вы напишете, может быть использовано против вас в суде
        </div>
      </Container>
    </footer>
  );
};
