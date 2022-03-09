import styles from './FooterLink.module.css';

export const FooterLink = (props: { link: string; img: string }) => {
  return (
    <a className={styles.footerLink} href={props.link}>
      <img src={props.img} alt="Footer link" />
    </a>
  );
};
